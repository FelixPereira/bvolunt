import { SafeSocialProject, SafeUser } from '@/types';
import { AccountType } from '@prisma/client';

interface OrgDashBoadData {
  socialProjects?: SafeSocialProject[];
  volunteers?: SafeUser[];
}

export async function getOrgDashBoardData(
  orgId?: string
): Promise<OrgDashBoadData> {
  try {
    const socialOrg = await prisma?.socialOrganization.findUnique({
      where: {
        id: orgId,
      },
      select: {
        socialProjects: {
          include: {
            socialOrganization: {
              select: {
                name: true,
                telephone: true,
                email: true,
              },
            },
          },
        },
        volunteers: true,
      },
    });

    const socialProjects = socialOrg?.socialProjects.map((project) => {
      return {
        ...project,
        createdAt: project.createdAt.toISOString(),
        updatedAt: project.updatedAt.toISOString(),
      };
    });

    const volunteers = socialOrg?.volunteers.map((volunteer) => {
      const { hashedPassword, ...withoutPassword } = volunteer;
      return {
        ...withoutPassword,
        createdAt: withoutPassword.createdAt.toISOString(),
        updatedAt: withoutPassword.updatedAt.toDateString(),
        accountType: AccountType.USER,
      };
    });

    return {
      socialProjects,
      volunteers,
    };
  } catch (error: any) {
    throw new Error(error);
  }
}
