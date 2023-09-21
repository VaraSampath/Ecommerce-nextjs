import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === "/" && !request.cookies.has("eccom")) {
    let response = NextResponse.redirect(new URL("/login", request.url));
    return response;
  }
  if (
    (request.nextUrl.pathname === "/login" ||
      request.nextUrl.pathname === "/register") &&
    request.cookies.has("eccom")
  ) {
    let response = NextResponse.redirect(new URL("/", request.url));
    return response;
  }
}

export const config = {
  matcher: "/:path*",
};
