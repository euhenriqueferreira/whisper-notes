import { NextRequest, NextResponse } from "next/server";

const authRoutes = [
	"/login",
	"/register",
	"/callback",
	"/forgot-password",
	"/reset-password",
];

export function middleware(request: NextRequest) {
	const token = request.cookies.get("@whisper_auth_token")?.value;
	const isAuthenticated = !!token;
	const path = request.nextUrl.pathname;

	if (isAuthenticated && authRoutes.includes(path)) {
		return NextResponse.redirect(new URL("/home", request.url));
	}

	if (!isAuthenticated && !authRoutes.includes(path)) {
		const loginUrl = new URL("/login", request.url);

		return NextResponse.redirect(loginUrl);
	}

	return NextResponse.next();
}

export const config = {
	matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
