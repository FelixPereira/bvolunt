import { NextResponse } from 'next/server';
import prisma from '@/libs/prismadb';
import { getCurrentUser } from '@/actions';
import { getOrg } from '@/actions/getOrg';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const loggedInOrg = await getCurrentUser();
    const currentOrg = await getOrg(loggedInOrg?.email);

    const existingOrg = await prisma.socialOrganization.findUnique({
      where: {
        email: data.email,
      },
    });

    if (existingOrg?.id !== currentOrg?.id)
      return NextResponse.json(
        { mssage: 'O email já está em uso' },
        { status: 400 }
      );

    const updatedOrg = await prisma.socialOrganization.update({
      where: {
        id: currentOrg?.id,
      },
      data: {
        ...data,
        province: data.province.value,
        county: data.county.value,
      },
    });

    const { hashedPassword, ...orgWithoutPassword } = updatedOrg;

    return NextResponse.json({ data: orgWithoutPassword }, { status: 200 });
  } catch (error: any) {
    const status = error.status || 500;
    return NextResponse.json({ messsage: error.message }, { status });
  }
}
