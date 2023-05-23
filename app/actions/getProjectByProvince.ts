import { SOCIALPROJECTS } from '@/app/data/socialProjects';

export async function getProjectsByProvince(provinceName: string) {
  const totalProjects = SOCIALPROJECTS.filter(
    (socialProject) => socialProject.province === provinceName
  ).length;
  return totalProjects;
}
