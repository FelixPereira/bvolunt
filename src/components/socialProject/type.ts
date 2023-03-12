export interface SocialProjectType {
  _id: string | number;
  name: string;
  backgroundImage: string;
  organizationOwner: string;
  registeredVolunteers: number;
  sponsorsLogos: string[];
}