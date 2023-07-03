import { NextResponse } from 'next/server';
import prisma from '@/app/libs/prismadb';

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const existingOrg = await prisma.socialOrganization.findUnique({
      where: {
        email: data.email,
      },
    });

    if (existingOrg) {
      return NextResponse.json('Organização já está cadastrada.');
    }

    const newOrganization = await prisma.socialOrganization.create({
      data: {
        ...data,
        province: data.province.value,
        county: data.county.value,
      },
    });

    console.log(newOrganization);
    return NextResponse.json(newOrganization);
  } catch (error) {
    NextResponse.error();
  }
}

// import prisma from "@/app/libs/prismadb";
// import { getCurrentUser } from "@/app/actions/getCurrentUser";
// import { NextResponse } from "next/server";

// export async function POST(request: Request) {
//   try {
//     const organizationId: string = '';
//     const currentUser = await getCurrentUser();
//     if (!currentUser) throw NextResponse.error();

//     const socialOrganization = await prisma.socialOrganization.findUnique({
//       where: {
//         id: organizationId
//       }
//     });

//     if (!socialOrganization) {
//       return NextResponse.error();
//     }

//     const voluntersList = socialOrganization.volunteerIds;

//   } catch (error) {
//     console.log(error);
//   }
// }
