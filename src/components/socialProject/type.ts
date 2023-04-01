type Sponsor = {
  _id: string;
  logo: string;
  name: string;
};

export interface SocialProjectType {
  _id: string;
  name: string;
  contactEmail: string;
  contactPhoneNumber: string;
  coverImage: string;
  organizationOwner: string;
  province: string;
  registeredVolunteers: number;
  sponsors: Sponsor[];
  description: string;
}
