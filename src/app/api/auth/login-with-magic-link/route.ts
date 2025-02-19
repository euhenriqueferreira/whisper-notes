import { getUserByEmail } from "@/app/utils/getUserByEmail";
import LoginEmail from "@/email-templates/login-email";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.EMAIL_API_KEY);

interface LoginWithMagicLinkAPIProps {
	email: string;
}

export async function POST(request: Request) {
	const data: LoginWithMagicLinkAPIProps = await request.json();

	const existingUser = await getUserByEmail(data.email);

	const jwtSecret = process.env.JWT_SECRET || "default_secret";

	const authToken = jwt.sign({ email: data.email }, jwtSecret, {
		expiresIn: "15m",
	});

	const magicLink = `${process.env.NEXT_PUBLIC_BASE_URL}/callback?token=${authToken}`;

	try {
		await resend.emails.send({
			from: `${process.env.EMAIL_FROM_NAME} <${process.env.EMAIL_FROM_EMAIL}>`,
			to: "quinhopereira.dev@gmail.com",
			subject: "Login no Whisper Notes",
			react: LoginEmail({
				name: existingUser?.name || "Usuário",
				magicLink: magicLink,
			}),
		});

		return NextResponse.json({ data });
	} catch (error) {
		return NextResponse.json(
			{
				error: "Erro no envio do e-mail de login.",
			},
			{ status: 400 },
		);
	}
}
