import authConfig from './auth.config';
import NextAuth from 'next-auth';

import {
  DEFAULT_ORG_LOGIN_REDIRECT,
  DEFAULT_USER_lOGIN_REDIRECT,
  apiAuthPrefix,
  authRoutes,
  publicRoutes,
} from './routes';

const { auth } = NextAuth(authConfig);

export default auth((req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;

  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);

  if (isApiAuthRoute) {
    return null;
  }

  if (isAuthRoute) {
    // if (isLoggedIn && loggedInUser.typeOfUser === user) {
    //   return Response.redirect(new URL(DEFAULT_USER_lOGIN_REDIRECT, nextUrl));
    // } else if (isLoggedIn && loggedInUser.typeOfUser === org) {
    //   return Response.redirect(new URL(DEFAULT_ORG_LOGIN_REDIRECT, nextUrl));
    // }

    if (isLoggedIn) {
      return Response.redirect(new URL(DEFAULT_USER_lOGIN_REDIRECT, nextUrl));
    }
    return null;
  }

  if (!isLoggedIn && !isPublicRoute) {
    return Response.redirect(new URL('iniciar-sessão', nextUrl));
  }

  return null; 
});

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
