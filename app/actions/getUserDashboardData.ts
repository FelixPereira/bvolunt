import { Event, SocialOrganization, SocialProject } from '@prisma/client';
import prisma from '@/libs/prismadb';

interface UserDashboardData {
  events?: Event[];
  socialProjects?: SocialProject[];
  socialOrgs?: SocialOrganization[];
}

export async function getUserDashboardData(
  userId: string
): Promise<UserDashboardData> {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
      include: {
        socialProjects: {
          include: {
            socialOrganization: true,
          },
        },
        socialOrganizations: true,
        events: true,
      },
    });

    const events = user?.events;
    const socialOrgs = user?.socialOrganizations;
    const socialProjects = user?.socialProjects;

    return {
      events,
      socialOrgs,
      socialProjects,
    };
  } catch (error: any) {
    throw new Error(error);
  }
}
