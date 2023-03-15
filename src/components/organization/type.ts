export interface OrganizationType {
  _id: string;
  name: string;
  backgroundImage: string;
  responsible: string;
  totalVolunteers: number;
  telephone: string;
  email: string;
  description: string;
  address: {
    province: string;
    county: string;
    street: string;
  };
}