import { Event } from '@prisma/client';

export type SafeEvent = Omit<Event, 'createdAt' | 'updatedAt'> & {
  createdAt: string;
  updatedAt: string;
};

export type SmallEventCard = Pick<Event, 'title' | 'address' | 'startDate'>;
