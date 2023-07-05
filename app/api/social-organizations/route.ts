import { NextResponse } from 'next/server';
import prisma from '@/app/libs/prismadb';

export async function POST(request: Request, response: Response) {
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

    // console.log(data);
    // console.log(parseInt(data.totalVolunteer, 10))

    const newOrganization = await prisma.socialOrganization.create({
      data: {
        name: '',
        email: 'felixpereira538@gmail.com',
        telephone: '+244947647832',
        totalVolunteer: 7,
        responsibleName: 'Félix Pereira',
        responsibleEmail: 'felixpereira538@gmail.com',
        responsiblePhone: '+244947647832',
        address: 'Luanda',
        description:
          'Lorem ipsum dolor sit amet consectetur adipiscing elit dignissim eros, parturient mi ut ultrices curabitur vehicula volutpat suscipit nam, fermentum turpis sociosqu fusce sociis fringilla facilisi curae. Donec tempor rhoncus mi netus himenaeos quis, ut sapien magnis cursus potenti, in id fermentum parturient nunc. Blandit aliquam porta quis netus vel quisque dignissim phasellus mattis sodales, vitae elementum integer vehicula libero mus sed duis rutrum imperdiet placerat, mauris cras nostra habitasse primis ante arcu eget aliquet.',
        coverImage:
          'https://res.cloudinary.com/dbqeewjr1/image/upload/v1688474148/pyykie26rz7nx7nwhbw6.jpg',
        province: 'Benguela',
        county: 'Bocoio',
        logo: 'https://res.cloudinary.com/dbqeewjr1/image/upload/v1688474165/bjmnlvrgpkzhjusbvrst.jpg',
      },
      // data: {
      //   ...data,
      //   province: data.province.value,
      //   county: data.county.value,
      //   totalVolunteer: parseInt(data.totalVolunteer, 10),
      //   name2: ''
      // },
    });

    // console.log('New org: ', newOrganization);
    console.log(data);
    return new NextResponse('Criado com sucesso', {
      status: 201,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      },
    });
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
