export interface Provinces {
  id: number;
  name: string;
  slug: string;
  organizations: {
    id: number;
    name: string;
  }[];
  socialProjects: string[];
}

export const PROVINCES: Provinces[] = [
  {
    id: 1,
    name: 'Benguela',
    slug: 'benguela',
    organizations: [
      { id: Math.floor(Math.random() * 50), name: 'Nome da organização' },
      { id: Math.floor(Math.random() * 50), name: 'Nome da organização' },
      { id: Math.floor(Math.random() * 50), name: 'Nome da organização' },
      { id: Math.floor(Math.random() * 50), name: 'Nome da organização' },
      { id: Math.floor(Math.random() * 50), name: 'Nome da organização' },
      { id: Math.floor(Math.random() * 50), name: 'Nome da organização' },
    ],
    socialProjects: ['', '', '', ''],
  },
  {
    id: 2,
    name: 'Cabinda',
    slug: 'cabinda',
    organizations: [
      { id: Math.floor(Math.random() * 50), name: 'Nome da organização' },
      { id: Math.floor(Math.random() * 50), name: 'Nome da organização' },
      { id: Math.floor(Math.random() * 50), name: 'Nome da organização' },
    ],
    socialProjects: [],
  },
  {
    id: 3,
    name: 'Huambo',
    slug: 'huambo',
    organizations: [
      { id: Math.floor(Math.random() * 50), name: 'Nome da organização' },
      { id: Math.floor(Math.random() * 50), name: 'Nome da organização' },
      { id: Math.floor(Math.random() * 50), name: 'Nome da organização' },
      { id: Math.floor(Math.random() * 50), name: 'Nome da organização' },
      { id: Math.floor(Math.random() * 50), name: 'Nome da organização' },
    ],
    socialProjects: [],
  },
  {
    id: 4,
    name: 'Huíla',
    slug: 'huila',
    organizations: [
      { id: Math.floor(Math.random() * 50), name: 'Nome da organização' },
      { id: Math.floor(Math.random() * 50), name: 'Nome da organização' },
      { id: Math.floor(Math.random() * 50), name: 'Nome da organização' },
      { id: Math.floor(Math.random() * 50), name: 'Nome da organização' },
      { id: Math.floor(Math.random() * 50), name: 'Nome da organização' },
      { id: Math.floor(Math.random() * 50), name: 'Nome da organização' },
      { id: Math.floor(Math.random() * 50), name: 'Nome da organização' },
      { id: Math.floor(Math.random() * 50), name: 'Nome da organização' },
    ],
    socialProjects: [],
  },
  {
    id: 5,
    name: 'Kwanza Norte',
    slug: 'kwanza-norte',
    organizations: [],
    socialProjects: [],
  },
  {
    id: 6,
    name: 'Kwanza sul',
    slug: 'kwanza-sul',
    organizations: [],
    socialProjects: [],
  },
  {
    id: 7,
    name: 'Luanda',
    slug: 'luanda',
    organizations: [
      { id: Math.floor(Math.random() * 50), name: 'Nome da organização' },
      { id: Math.floor(Math.random() * 50), name: 'Nome da organização' },
      { id: Math.floor(Math.random() * 50), name: 'Nome da organização' },
      { id: Math.floor(Math.random() * 50), name: 'Nome da organização' },
      { id: Math.floor(Math.random() * 50), name: 'Nome da organização' },
      { id: Math.floor(Math.random() * 50), name: 'Nome da organização' },
      { id: Math.floor(Math.random() * 50), name: 'Nome da organização' },
    ],
    socialProjects: [],
  },
  {
    id: 8,
    name: 'Lunda Sul',
    slug: 'lunda sul',
    organizations: [],
    socialProjects: [],
  },
  {
    id: 9,
    name: 'Moxico',
    slug: 'moxico',
    organizations: [],
    socialProjects: [],
  },
  {
    id: 10,
    name: 'Uíge',
    slug: 'uige',
    organizations: [],
    socialProjects: [],
  },
  {
    id: 11,
    name: 'Zaire',
    slug: 'zaire',
    organizations: [],
    socialProjects: [],
  },
  {
    id: 12,
    name: 'Bengo',
    slug: 'bengo',
    organizations: [],
    socialProjects: [],
  },
];
