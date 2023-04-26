import NextAuth, { AuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import Credentials from 'next-auth/providers/credentials';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import prisma from '@/app/libs/prismadb';
import bcrypt from 'bcrypt';


const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SESCRET as string,
    }),
    Credentials({
      name: 'credentials',
      credentials: {
        email: { label: 'email', type: 'text' },
        password: { label: 'password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) {
          throw new Error('Credenciais inválidas');
        }

        const user = await prisma.volunteer.findUnique({
          where: {
            email: credentials.email,
          },
        });

        if (!user || !user.hashedPassword) {
          throw new Error('Credenciais inválidas');
        }

        const isValidPassword = await bcrypt.compare(
          credentials.password,
          user.hashedPassword
        );

        if (!isValidPassword) {
          throw new Error('Credentiais inválidas');
        }

        return user;
      },
    }),
  ],
  pages: {
    signIn: '/',
  },
  debug: process.env.NODE_ENV === 'development',
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);
