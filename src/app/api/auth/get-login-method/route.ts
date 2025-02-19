import { getUserByEmail } from "@/app/utils/getUserByEmail";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.EMAIL_API_KEY);

interface LoginMethodAPIProps {
	email: string;
}

export async function POST(request: Request) {
	const data: LoginMethodAPIProps = await request.json();

	const existingUser = await getUserByEmail(data.email);

	if (!existingUser) {
		return NextResponse.json(
			{ error: "Esse usuário não existe." },
			{ status: 401 },
		);
	}

	return NextResponse.json({ user: existingUser });
}
