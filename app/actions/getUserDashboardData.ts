import prisma from '@/libs/prismadb';
import { SafeEvent, SafeSocialOrg, SafeSocialProject } from '@/types';

interface UserDashboardData {
  events?: SafeEvent[];
  socialProjects?: SafeSocialProject[];
  socialOrgs?: SafeSocialOrg[];
}

export async function getUserDashboardData(
  userId?: string
): Promise<UserDashboardData> {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
      select: {
        socialProjects: {
          include: {
            socialOrganization: true,
          },
        },
        socialOrganizations: true,
        events: true,
      },
    });

    const events = user?.events.map((event) => {
      return {
        ...event,
        createdAt: event.createdAt.toISOString(),
        updatedAt: event.updatedAt.toISOString(),
      };
    });
    const socialOrgs = user?.socialOrganizations.map((socialOrg) => {
      return {
        ...socialOrg,
        createdAt: socialOrg.createdAt.toISOString(),
        updatedAt: socialOrg.updatedAt.toISOString(),
      };
    });
    const socialProjects = user?.socialProjects.map((socialProject) => {
      return {
        ...socialProject,
        createdAt: socialProject.createdAt.toISOString(),
        updatedAt: socialProject.updatedAt.toISOString(),
      };
    });

    return {
      events,
      socialOrgs,
      socialProjects,
    };
  } catch (error: any) {
    throw new Error(error);
  }
}

