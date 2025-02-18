import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
	const { searchParams } = new URL(request.url);
	const token = searchParams.get("token");

	if (!token) {
		return NextResponse.json(
			{ error: "O token é inválido." },
			{ status: 400 },
		);
	}

	try {
		if (process.env.JWT_SECRET) {
			const emailDecoded = jwt.decode(token);

			return NextResponse.json({
				token: token,
			});
		}
	} catch (error) {
		return NextResponse.json(
			{
				error: "Token expirado ou inválido.",
			},
			{ status: 401 },
		);
	}
}
