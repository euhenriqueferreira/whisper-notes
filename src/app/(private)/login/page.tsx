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
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { setCookie } from "nookies";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import logoSvg from "../../../../public/logo.svg";

interface userData {
	id: number;
	name: string;
	email: string;
	password?: string;
	bio?: string;
	profileImageUrl?: string;
	coverImageUrl?: string;
	isLoginWithPassword: boolean;
	createdAt: string;
	updatedAt: string;
}

export default function Login() {
	const [isLoginWithPassword, setIsLoginWithPassword] = useState(false);
	const [userCanSubmitForm, setUserCanSubmitForm] = useState(false);

	const router = useRouter();

	const LoginFormSchema = z
		.object({
			email: z
				.string()
				.min(8, "O e-mail deve ter pelo menos 8 caracteres.")
				.max(255, "O e-mail deve ter no máximo 255 caracteres.")
				.email("O valor deve ser um e-mail válido."),
			password: z.string().optional(),
		})
		.refine(
			(state) => {
				console.log(state.password);
				if (isLoginWithPassword && !state.password) {
					console.log("nice");
					return false;
				}

				return true;
			},
			{ message: "A senha é obrigatória.", path: ["password"] },
		);

	type loginFormSchemaType = z.infer<typeof LoginFormSchema>;

	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
		control,
	} = useForm<loginFormSchemaType>({
		resolver: zodResolver(LoginFormSchema),
		context: { isLoginWithPassword },
	});

	async function handleEmailBlur(event: any) {
		const email = event.target.value.trim();

		if (!email) {
			setIsLoginWithPassword(false);
			setUserCanSubmitForm(false);
			return;
		}

		try {
			const response = await api.post("/auth/get-login-method", {
				email: email,
			});

			const userData: userData = response.data.user;

			if (userData.isLoginWithPassword) {
				setIsLoginWithPassword(true);
				toast.info(
					"Detectamos que você prefere fazer login com e-mail e senha.",
				);
			} else {
				setIsLoginWithPassword(false);
				toast.info(
					"Detectamos que você prefere fazer login via link por e-mail.",
				);
			}

			setUserCanSubmitForm(true);
		} catch (error) {
			if (error instanceof AxiosError)
				toast.error("Não existe uma conta com esse e-mail.");

			setIsLoginWithPassword(false);
		}
	}

	async function handleLoginUser(data: loginFormSchemaType) {
		try {
			if (isLoginWithPassword && data.password) {
				const response = await api.post("/auth/login-with-password", {
					email: data.email,
					password: data.password,
				});

				setCookie(null, "@whisper_auth_token", response.data.token, {
					maxAge: 7 * 24 * 60 * 60,
					path: "/",
				});

				router.push("/home");
			} else {
				await api.post("/auth/login-with-magic-link", {
					email: data.email,
				});

				toast.success(
					"Um link de autenticação foi enviado para o seu e-mail",
				);
			}
		} catch (error: unknown) {
			if (error instanceof AxiosError) {
				toast.error("Não foi possível fazer login.");
			}
		}
	}

	return (
		<>
			<div className="flex flex-col items-center relative">
				<h1 className="mb-2.5 text-gray-400 tracking-tight text-5xl font-bold">
					Bem vindo ao
				</h1>
				<Image src={logoSvg} alt="" />
			</div>

			<form
				onSubmit={handleSubmit(handleLoginUser)}
				className="relative bg-gray-800 border border-gray-700 px-8 py-10 rounded-md flex flex-col items-stretch gap-4 w-[480px]"
			>
				<TextInputRoot>
					<TextInputLabel htmlFor="email">Seu e-mail</TextInputLabel>
					<TextInputBox>
						<Controller
							control={control}
							name="email"
							render={({ field }) => (
								<TextInput
									id="email"
									placeholder="Digite seu e-mail..."
									onBlur={handleEmailBlur}
									value={field.value ?? ""}
									onChange={field.onChange}
								/>
							)}
						/>
					</TextInputBox>
					{errors.email && (
						<TextInputError>{errors.email.message}</TextInputError>
					)}
				</TextInputRoot>

				{isLoginWithPassword && (
					<TextInputRoot>
						<div className="flex items-center justify-between w-full">
							<TextInputLabel htmlFor="password">
								Sua senha
							</TextInputLabel>
							{isLoginWithPassword && (
								<Link
									href="/forgot-password"
									className="text-sm font-normal text-center text-gray-400"
								>
									<span className="underline">
										Esqueci minha senha
									</span>
								</Link>
							)}
						</div>
						<TextInputBox>
							<TextInput
								type="password"
								id="password"
								placeholder="Digite sua senha..."
								{...register("password")}
							/>
						</TextInputBox>

						{errors.password && (
							<TextInputError>
								{errors.password.message}
							</TextInputError>
						)}
					</TextInputRoot>
				)}

				<ButtonRoot
					color="primary"
					size="big"
					variant="fill"
					type="submit"
					disabled={isSubmitting || !userCanSubmitForm}
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
