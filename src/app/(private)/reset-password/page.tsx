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
import { ArrowsCounterClockwise } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import logoSvg from "../../../../public/logo.svg";
import lightBlur from "../../../assets/light-blur.png";

const resetPasswordFormSchema = z
	.object({
		password: z
			.string()
			.min(8, "A senha deve ter no mínimo 8 caracteres")
			.max(50, "A senha deve ter no máximo 50 caracteres"),
		password_confirmation: z
			.string()
			.min(8, "A senha deve ter no mínimo 8 caracteres")
			.max(50, "A senha deve ter no máximo 50 caracteres"),
	})
	.refine(
		(state) => {
			if (state.password !== state.password_confirmation) {
				return false;
			}

			return true;
		},
		{
			message: "As duas senhas devem ser iguais",
			path: ["password_confirmation"],
		},
	);

type resetPasswordFormSchemaType = z.infer<typeof resetPasswordFormSchema>;

export default function ResetPassword() {
	const searchParams = useSearchParams();
	const userEmail = searchParams.get("email");

	const router = useRouter();

	const {
		register,
		handleSubmit,
		formState: { isSubmitting, errors },
	} = useForm<resetPasswordFormSchemaType>({
		resolver: zodResolver(resetPasswordFormSchema),
	});

	async function handleResetPassword(data: resetPasswordFormSchemaType) {
		if (!userEmail) {
			toast.error(
				"Erro ao redefinir sua senha, por favor, confira a url.",
			);
		}

		try {
			await api.post("/auth/reset-password", {
				email: userEmail,
				newPassword: data.password,
			});

			toast.success("Sua senha foi redefinida com sucesso.");

			router.push("/login");
		} catch (error) {
			toast.error("Erro ao redefinir sua senha.");
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
					onSubmit={handleSubmit(handleResetPassword)}
					className="relative bg-gray-800 border border-gray-700 px-8 py-10 rounded-md flex flex-col items-stretch gap-4 w-[480px]"
				>
					<TextInputRoot>
						<TextInputLabel htmlFor="password">
							Sua nova senha
						</TextInputLabel>
						<TextInputBox>
							<TextInput
								id="password"
								placeholder="Digite sua nova senha..."
								type="password"
								{...register("password")}
							/>
						</TextInputBox>
						{errors.password && (
							<TextInputError>
								{errors.password.message}
							</TextInputError>
						)}
					</TextInputRoot>
					<TextInputRoot>
						<TextInputLabel htmlFor="password_confirmation">
							Confirme sua nova senha
						</TextInputLabel>
						<TextInputBox>
							<TextInput
								id="password_confirmation"
								placeholder="Confirme sua nova senha..."
								type="password"
								{...register("password_confirmation")}
							/>
						</TextInputBox>
						{errors.password_confirmation && (
							<TextInputError>
								{errors.password_confirmation.message}
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
						<ButtonText>Redefinir senha</ButtonText>
						<ArrowsCounterClockwise size={16} />
					</ButtonRoot>
				</form>
			</main>
		</div>
	);
}
