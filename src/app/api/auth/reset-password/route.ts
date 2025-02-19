import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

interface ResetPasswordAPIProps {
	email: string;
	newPassword: string;
}

export async function POST(request: Request) {
	try {
		const data: ResetPasswordAPIProps = await request.json();

		const hashedPassword = await bcrypt.hash(data.newPassword, 10);

		console.log("hashed", hashedPassword);

		const updatedUser = await prisma.user.update({
			where: {
				email: data.email,
			},
			data: {
				password: hashedPassword,
			},
		});

		return NextResponse.json(
			{ message: "Senha redefinida com sucesso." },
			{ status: 200 },
		);
	} catch (error) {
		return NextResponse.json(
			{ message: "Erro ao cadastrar usuário" },
			{
				status: 500,
				headers: { "Content-Type": "application/json" },
			},
		);
	}
}
