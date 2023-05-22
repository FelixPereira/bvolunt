import { SocialProject } from '@prisma/client';
import prisma from '../libs/prismadb';

// import { SOCIALPROJECTS } from '@/data/socialProjects';
import { formatToLowerCased, formatToCapitalized } from '../utils';

export async function getSocialProjects(params: any) {
  try {
    let socialProjects: SocialProject[] = [];

    socialProjects = await prisma.socialProject.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });

    if (params?.searchParams.province) {
      socialProjects = await prisma.socialProject.findMany({
        where: {
          province: formatToCapitalized(params.searchParams.province),
        },
      });
    }

    if (params?.searchParams.orderBy === 'asc') {
      socialProjects = await prisma.socialProject.findMany({
        orderBy: {
          createdAt: 'asc',
        },
      });
    }

    if (params?.searchParams.orderBy === 'desc') {
      socialProjects = await prisma.socialProject.findMany({
        orderBy: {
          createdAt: 'desc',
        },
      });
    }

    return socialProjects;

    // let socialProjects: any = SOCIALPROJECTS;

    // if (params?.searchParams.province) {
    //   socialProjects = SOCIALPROJECTS.filter(
    //     (socialProject) =>
    //       formatToLowerCased(socialProject.province) ===
    //       params?.searchParams.province
    //   );

    //   return socialProjects;
    // }

    // return socialProjects;
  } catch (error: any) {
    throw new Error(error);
  }
}
