import { SocialProject } from '@prisma/client';
import prisma from '../libs/prismadb';

import { formatToLowerCased, formatToCapitalized } from '../utils';
import { SOCIALPROJECTS } from '../data/socialProjects';

interface IParams {
  province: string;
  orderby: string;
}

export async function getSocialProjects({ province, orderby }: IParams) {
  try {
    let socialProjects = SOCIALPROJECTS;
    // let socialProjects: SocialProject[] = [];

    // socialProjects = await prisma.socialProject.findMany({
    //   orderBy: {
    //     createdAt: 'desc',
    //   },
    // });

    if (province === 'todas') {
      socialProjects = socialProjects;
    }

    if (province && province !== 'todas') {
      socialProjects = socialProjects.filter(
        (socialProject) =>
          socialProject.province === formatToCapitalized(province)
      );
    }

    if (orderby === 'asc') {
      socialProjects = socialProjects.sort(
        (socialProjectA, socialProjectB) =>
          Number(new Date(socialProjectA.createdAt)) -
          Number(new Date(socialProjectB.createdAt))
      );
    }

    if (orderby === 'desc') {
      socialProjects = socialProjects.sort(
        (socialProjectA, socialProjectB) =>
          Number(new Date(socialProjectB.createdAt)) -
          Number(new Date(socialProjectA.createdAt))
      );
    }

    return socialProjects;
  } catch (error: any) {
    throw new Error(error);
  }
}
