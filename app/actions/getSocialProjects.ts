import { SocialProject } from '@prisma/client';
import prisma from '../libs/prismadb';

import { formatToLowerCased, formatToCapitalized } from '../utils';
// import { SOCIALPROJECTS } from '../data/socialProjects';

interface IParams {
  province: string;
  orderby: string;
}

export async function getSocialProjects({
  searchParams,
}: {
  searchParams: IParams;
}) {
  try {
    let socialProjects: SocialProject[] = [];

    socialProjects = await prisma.socialProject.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });

    if (searchParams.province) {
      socialProjects = socialProjects.filter(
        (socialProject) =>
          socialProject.province === formatToCapitalized(searchParams.province)
      );
    }

    if (searchParams.orderby === 'asc') {
      socialProjects = socialProjects.sort(
        (socialProjectA, socialProjectB) =>
          Number(new Date(socialProjectA.createdAt)) -
          Number(new Date(socialProjectB.createdAt))
      );
    }

    if (searchParams.orderby === 'desc') {
      socialProjects = socialProjects.sort(
        (socialProjectA, socialProjectB) =>
          Number(new Date(socialProjectB.createdAt)) -
          Number(new Date(socialProjectA.createdAt))
      );
    }

    return socialProjects;

    // let socialProjects: any = SOCIALPROJECTS;

    // if (searchParams?.province) {
    //   socialProjects = SOCIALPROJECTS.filter(
    //     (socialProject) =>
    //       formatToLowerCased(socialProject.province) === searchParams?.province
    //   );
    // }

    // if (searchParams.orderby === 'asc') {
    //   socialProjects = socialProjects.sort((socialProjectA, socialProjectB) => {
    //     console.log('date: ', 'Data');
    //     // return new Date(socialProjectA) - new Date(socialProjectB);

    //     return 0;
    //   });

    //   // socialProjects.map((pr) => console.log(pr.createdAt));
    // }

    // return socialProjects;
  } catch (error: any) {
    throw new Error(error);
  }
}
