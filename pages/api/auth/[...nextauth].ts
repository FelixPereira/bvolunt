import { PrismaAdapter } from '@next-auth/prisma-adapter';
import NextAuth, { AuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import CredentialProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcrypt';
import prisma from '@/libs/prismadb';
import { SocialOrganization, User } from '@prisma/client';

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SESCRET as string,
    }),
    CredentialProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'email', type: 'text' },
        password: { label: 'password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) {
          throw new Error('Credenciais inválidas');
        }

        let loggedInUser: User | SocialOrganization | null = null;

        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        });

        const organization = await prisma.socialOrganization.findUnique({
          where: {
            email: credentials.email,
          },
        });

        if (user) {
          loggedInUser = user;
        } else if (organization) {
          loggedInUser = organization;
        } else if (!user || !organization) {
          throw new Error('Credenciais inválidas');
        }

        if (!loggedInUser || !loggedInUser.hashedPassword) {
          throw new Error('Credenciais inválidas');
        }

        const isValidPassword = await bcrypt.compare(
          credentials.password,
          loggedInUser.hashedPassword
        );

        if (!isValidPassword) {
          throw new Error('Credenciais inválidas');
        }

        return loggedInUser;
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
