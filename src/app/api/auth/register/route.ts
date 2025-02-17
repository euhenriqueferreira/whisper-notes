import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

// export async function GET(request: Request) {
// 	return NextResponse.json({ message: "Hello World!" });
// }

export async function POST(request: Request) {
	try {
		const data = await request.json();

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
				}
			);
		}

		const newUser = await prisma.user.create({
			data: {
				name: data.name,
				email: data.email,
			},
		});

		return new Response(
			JSON.stringify({
				message: "Usuário cadastrado com sucesso",
				user: newUser,
			}),
			{
				status: 201,
				headers: { "Content-Type": "application/json" },
			}
		);
	} catch (error) {
		return NextResponse.json(
			{ message: "Erro ao cadastrar usuário" },
			{
				status: 500,
				headers: { "Content-Type": "application/json" },
			}
		);
	}
}
