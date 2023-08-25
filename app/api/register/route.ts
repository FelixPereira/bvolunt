import bcrypt from 'bcrypt';
import prisma from '@/libs/prismadb';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, telephone, password } = body;

  const hashedPassword = await bcrypt.hash(password, 12);

  const volunteer = await prisma.volunteer.create({
    data: {
      name,
      email,
      telephone,
      hashedPassword,
    },
  });

  // const account = await prisma.account.create({
  //   data: {
  //     type: 'volunteer',
  //     volunteerId: volunteer.id
  //   },

  // })


  // const user = await prisma.volunteer.create({
  //   data: {
  //     account: {
  //       create: {
  //         type: 'volunteer',
  //         id_token: '',
  //         provider: '',
  //         providerAccountId: ''
  //       }
  //     },
  //   },
  //   include: {
  //     account: {
  //       select: {

  //       }
  //     }
  //   }
  // })

  return NextResponse.json(volunteer);
}
