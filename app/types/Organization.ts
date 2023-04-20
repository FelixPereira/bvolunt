export interface OrganizationType {
  _id: string;
  coverImage: string;
  name: string;
  description: string;

  responsible: string;
  totalVolunteers: number;
  telephone: string;
  email: string;

  province: string;
  county: string;
  street: string;

  createdAt: string;
}
