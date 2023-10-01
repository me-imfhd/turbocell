import { authMiddleware } from "@clerk/nextjs";
import { NextResponse } from "next/server";

// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your middleware
export default authMiddleware({
  publicRoutes:[
    "/",
    "/signin",
    "/signup",
    "/categories",
    "/products",
    "/product",
    "/stores",
    "/store",
    "/blog(.*)",
    "/about(.*)",
    "/contact(.*)",
    "/terms(.*)",
    "/privacy(.*)",
    "/api(.*)",
  ],
  async afterAuth(auth, req){
    if(auth.isPublicRoute){
      return NextResponse.next();
    }
    const url = new URL(req.nextUrl.origin)
    if(!auth.userId){
      url.pathname = "/signin"
      return NextResponse.redirect(url);
    }
    
  }
});

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};