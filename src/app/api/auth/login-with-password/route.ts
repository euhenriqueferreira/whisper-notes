import { getUserByEmail } from "@/app/utils/getUserByEmail";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

interface LoginWithPasswordAPIProps {
	email: string;
	password: string;
}

export async function POST(request: Request) {
	const data: LoginWithPasswordAPIProps = await request.json();

	try {
		const user = await getUserByEmail(data.email);

		if (user?.password !== data.password) {
			return NextResponse.json(
				{
					error: "Erro ao tentar fazer login.",
				},
				{ status: 400 },
			);
		}

		const jwtSecret = process.env.JWT_SECRET || "default_secret";

		const authToken = jwt.sign({ email: data.email }, jwtSecret, {
			expiresIn: "15m",
		});

		return NextResponse.json({ token: authToken });
	} catch (error) {
		return NextResponse.json(
			{
				error: "Erro no envio do e-mail de login.",
			},
			{ status: 400 },
		);
	}
}
