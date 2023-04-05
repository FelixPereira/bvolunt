import { rest } from 'msw';
import { ORGANIZATIONS } from '../data/organizations';

export const handlers = [
  rest.get('/api/organizations/:id', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(ORGANIZATIONS[0]));
  }),
];
