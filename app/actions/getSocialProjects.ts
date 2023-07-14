import { SocialProject } from '@prisma/client';
import prisma from '../libs/prismadb';

import { formatToLowerCased, formatToCapitalized } from '../utils';
import { SOCIALPROJECTS } from '../data/socialProjects';

interface IParams {
  provincia: string;
  ordenar: string;
}

export async function getSocialProjects({ provincia, ordenar }: IParams) {
  try {
    let socialProjects: SocialProject[] = [];
    // socialProjects = SOCIALPROJECTS;

    socialProjects = await prisma.socialProject.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });

    if (provincia === 'todas') {
      socialProjects = socialProjects;
    }

    if (provincia && provincia !== 'todas') {
      socialProjects = socialProjects.filter(
        (socialProject) =>
          socialProject.province === formatToCapitalized(provincia)
      );
    }

    if (ordenar === 'antigos') {
      socialProjects = socialProjects.sort(
        (socialProjectA, socialProjectB) =>
          Number(new Date(socialProjectA.createdAt)) -
          Number(new Date(socialProjectB.createdAt))
      );
    }

    if (ordenar === 'recentes') {
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
