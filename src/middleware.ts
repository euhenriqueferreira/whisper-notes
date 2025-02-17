import { NextRequest, NextResponse } from "next/server";

const authRoutes = ["/login", "/register"];

export function middleware(request: NextRequest) {
	const token = request.cookies.get("auth_token")?.value;
	const isAuthenticated = !!token;
	const path = request.nextUrl.pathname;

	if (isAuthenticated && authRoutes.includes(path)) {
		return NextResponse.redirect(new URL("/home", request.url));
	}

	if (!isAuthenticated && !authRoutes.includes(path)) {
		const loginUrl = new URL("/login", request.url);

		loginUrl.searchParams.set("callbackUrl", path);
		return NextResponse.redirect(loginUrl);
	}

	return NextResponse.next();
}

export const config = {
	matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
