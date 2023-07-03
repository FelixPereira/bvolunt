import { Volunteer } from '@prisma/client';

export const VOLUNTEER: Volunteer = {
  id: 'userId',
  name: 'Félix Pereira',
  email: 'felixpereira@gmail.com',
  telephone: '93556434543',
  // address: '',
  profission: 'Developer',
  image: '',
  emailVerified: new Date(),
  hashedPassword: '',
  createdAt: new Date(),
  updatedAt: new Date(),
  socialOrganizationIds: [],
  address: '',
  socialProjectsIds: [],
  events: [],

  // socialProjects: [],
};
