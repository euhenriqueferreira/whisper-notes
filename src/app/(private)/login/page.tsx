"use client";
import { ButtonRoot } from "@/app/components/button/ButtonRoot";
import { ButtonText } from "@/app/components/button/ButtonText";
import { TextInput } from "@/app/components/textInput/TextInput";
import { TextInputBox } from "@/app/components/textInput/TextInputBox";
import { TextInputError } from "@/app/components/textInput/TextInputError";
import { TextInputLabel } from "@/app/components/textInput/TextInputLabel";
import { TextInputRoot } from "@/app/components/textInput/TextInputRoot";
import { api } from "@/lib/axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { AxiosError } from "axios";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const LoginFormSchema = z.object({
	email: z
		.string()
		.min(8, "O e-mail deve ter pelo menos 8 caracteres.")
		.max(255, "O e-mail deve ter no máximo 255 caracteres.")
		.email("O valor deve ser um e-mail válido."),
});

type loginFormSchemaType = z.infer<typeof LoginFormSchema>;

export default function Login() {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm<loginFormSchemaType>({
		resolver: zodResolver(LoginFormSchema),
	});

	async function handleLoginUser(data: loginFormSchemaType) {
		try {
			const response = await api.post("/auth/login", {
				email: data.email,
			});

			toast.success(
				"Um link de autenticação foi enviado para o seu e-mail",
			);
		} catch (error: unknown) {
			if (error instanceof AxiosError) {
				toast.error("Não foi possível fazer login.");
			}
		}
	}

	return (
		<>
			<form
				onSubmit={handleSubmit(handleLoginUser)}
				className="relative bg-gray-800 border border-gray-700 px-8 py-10 rounded-md flex flex-col items-stretch gap-4"
			>
				<TextInputRoot>
					<TextInputLabel htmlFor="email">Seu e-mail</TextInputLabel>
					<TextInputBox>
						<TextInput
							id="email"
							placeholder="Digite seu e-mail..."
							{...register("email")}
						/>
					</TextInputBox>
					{errors.email && (
						<TextInputError>{errors.email.message}</TextInputError>
					)}
				</TextInputRoot>

				{/* {isLoginWithPassword && (
				<TextInputRoot>
					<TextInputLabel htmlFor="password">
						Sua senha
					</TextInputLabel>
					<TextInput
						type="password"
						id="password"
						placeholder="Digite sua senha..."
					/>
					{/* <TextInputError>O e-mail é obrigatório</TextInputError> *
				</TextInputRoot>
				)} */}

				<ButtonRoot
					color="primary"
					size="big"
					variant="fill"
					type="submit"
					disabled={isSubmitting}
				>
					<ButtonText>Entrar</ButtonText>
					<ArrowRight size={16} />
				</ButtonRoot>
			</form>

			<Link
				href="/register"
				className="text-sm font-normal text-center text-gray-400"
			>
				Ainda não tem uma conta?{" "}
				<span className="underline">Criar conta</span>
			</Link>
		</>
	);
}
