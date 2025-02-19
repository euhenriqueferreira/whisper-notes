import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

interface RegisterAPIProps {
	name: string;
	email: string;
}

export async function POST(request: Request) {
	try {
		const data: RegisterAPIProps = await request.json();

		console.log("data", data);

		const userAlreadyExists = await prisma.user.findUnique({
			where: {
				email: data.email,
			},
		});

		if (userAlreadyExists) {
			return NextResponse.json(
				{ error: "Esse e-mail já está sendo usado." },
				{
					status: 409,
					headers: { "Content-Type": "application/json" },
				},
			);
		}

		const newUser = await prisma.user.create({
			data: {
				name: data.name,
				email: data.email,
			},
		});

		return NextResponse.json(
			{ message: "Usuário cadastrado com sucesso", user: newUser },
			{ status: 201 },
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
