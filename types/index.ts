export * from './safeSocialOrg';
export * from './safeSocialProject';
export * from './safeUser';
export * from './safeEvent';

export type MetaDatas = (
  | {
      label: string;
      data: string | null;
    }
  | {
      label: string;
      data: number;
    }
)[];

export interface Sponsor {
  id: string;
  logoUrl: string;
  name: string;
}
