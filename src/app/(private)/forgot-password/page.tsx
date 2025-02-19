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
import { EnvelopeOpen } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import lightBlur from "../../../assets/light-blur.png";
import logoSvg from "../../../assets/logo.svg";

const forgotPasswordFormSchema = z.object({
	email: z
		.string()
		.min(8, "O e-mail deve ter pelo menos 8 caracteres.")
		.max(255, "O e-mail deve ter no máximo 255 caracteres.")
		.email("O valor deve ser um e-mail válido."),
});

type forgotPasswordFormSchemaType = z.infer<typeof forgotPasswordFormSchema>;

export default function ResetPassword() {
	const {
		register,
		handleSubmit,
		formState: { isSubmitting, errors },
	} = useForm<forgotPasswordFormSchemaType>({
		resolver: zodResolver(forgotPasswordFormSchema),
	});

	async function handleForgotPassword(data: forgotPasswordFormSchemaType) {
		try {
			await api.post("/auth/forgot-password", {
				email: data.email,
			});

			toast.success(
				"Um link de redefinição de senha foi enviado para o seu e-mail",
			);
		} catch (error) {
			toast.error("Erro ao enviar o email de redefinição de senha.");
		}
	}

	return (
		<div className="w-screen h-screen flex items-center justify-center relative">
			<Image
				src={lightBlur}
				alt=""
				className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[75%] h-[75%] object-contain"
			/>

			<main className="flex flex-col items-center gap-10 relative">
				<Image src={logoSvg} alt="" />

				<form
					onSubmit={handleSubmit(handleForgotPassword)}
					className="relative bg-gray-800 border border-gray-700 px-8 py-10 rounded-md flex flex-col items-stretch gap-4 w-[480px]"
				>
					<TextInputRoot>
						<TextInputLabel htmlFor="email">
							Seu e-mail
						</TextInputLabel>
						<TextInputBox>
							<TextInput
								id="email"
								placeholder="Digite seu e-mail..."
								{...register("email")}
							/>
						</TextInputBox>
						{errors.email && (
							<TextInputError>
								{errors.email.message}
							</TextInputError>
						)}
					</TextInputRoot>

					<ButtonRoot
						color="primary"
						size="big"
						variant="fill"
						type="submit"
						disabled={isSubmitting}
					>
						<ButtonText>Enviar link de redefinição</ButtonText>
						<EnvelopeOpen size={16} />
					</ButtonRoot>
				</form>

				<Link
					href="/login"
					className="text-sm font-normal text-center text-gray-400"
				>
					<span className="underline">
						Voltar para a página de login
					</span>
				</Link>
			</main>
		</div>
	);
}
