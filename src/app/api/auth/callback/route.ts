import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
	const { searchParams } = new URL(request.url);
	const token = searchParams.get("token") || "";

	try {
		if (process.env.JWT_SECRET) {
			const tokenDecoded = jwt.verify(token, process.env.JWT_SECRET);

			return NextResponse.json({
				message: "Token verificado",
				token: token,
				decoded: tokenDecoded,
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
