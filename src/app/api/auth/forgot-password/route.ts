import { getUserByEmail } from "@/app/utils/getUserByEmail";
import LoginEmail from "@/email-templates/login-email";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.EMAIL_API_KEY);

interface ForgotPasswordAPIProps {
	email: string;
}

export async function POST(request: Request) {
	const data: ForgotPasswordAPIProps = await request.json();

	const existingUser = await getUserByEmail(data.email);

	const resetLink = `${process.env.NEXT_PUBLIC_BASE_URL}/reset-password?email=${data.email}`;

	try {
		await resend.emails.send({
			from: `${process.env.EMAIL_FROM_NAME} <${process.env.EMAIL_FROM_EMAIL}>`,
			to: "quinhopereira.dev@gmail.com",
			subject: "Redefinir sua senha | Whisper Notes",
			react: LoginEmail({
				name: existingUser?.name || "Usuário",
				magicLink: resetLink,
			}),
		});

		return NextResponse.json({ data });
	} catch (error) {
		return NextResponse.json(
			{
				error: "Erro no envio do e-mail de redefinição de senha.",
			},
			{ status: 400 },
		);
	}
}
