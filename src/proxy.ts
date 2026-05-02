import { NextRequest, NextResponse } from "next/server";

const protectedRoutes = ["/dashboard", "/profile",];

const authRoutes = ["/login", "/register"];

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const accessToken = request.cookies.get("access_token")?.value;

  const isProtected = protectedRoutes.some((route) => pathname.startsWith(route));

  const isAuthPage = authRoutes.includes(pathname);

  // If you are not logged in and access a protected page → redirect to login
  if (!accessToken && isProtected) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // If you are already logged in but open the login page → redirect to the dashboard
  if (accessToken && isAuthPage) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  // If you are not logged in and root page → redirect to login
  if (!accessToken && pathname === "/") {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/admin/:path*", "/login", "/register", "/"],
};

