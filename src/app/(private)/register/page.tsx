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
import { User } from "@phosphor-icons/react/dist/ssr";
import { AxiosError } from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";

const registerFormSchema = z.object({
	name: z
		.string()
		.min(2, "O nome deve ter pelo menos 2 caracteres.")
		.max(255, "O nome deve ter no máximo 255 caracteres."),
	email: z
		.string()
		.min(8, "O e-mail deve ter pelo menos 8 caracteres.")
		.max(255, "O e-mail deve ter no máximo 255 caracteres.")
		.email("O valor deve ser um e-mail válido."),
});

type registerFormSchemaType = z.infer<typeof registerFormSchema>;

export default function Register() {
	const router = useRouter();

	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm<registerFormSchemaType>({
		resolver: zodResolver(registerFormSchema),
	});

	async function handleRegisterUser(data: registerFormSchemaType) {
		try {
			await api.post("/auth/register", {
				name: data.name,
				email: data.email,
			});

			toast.success("Você se cadastrou com sucesso!");
			router.push("/login");
		} catch (error: unknown) {
			if (error instanceof AxiosError) {
				toast.error(error.response?.data.error);
			}
		}
	}

	return (
		<>
			<form
				onSubmit={handleSubmit(handleRegisterUser)}
				className="relative bg-gray-800 border border-gray-700 px-8 py-10 rounded-md flex flex-col items-end gap-4 w-[480px]"
			>
				<TextInputRoot>
					<TextInputLabel htmlFor="name">Seu nome</TextInputLabel>
					<TextInputBox>
						<TextInput
							id="name"
							placeholder="Digite seu nome...."
							{...register("name")}
						/>
					</TextInputBox>
					{errors.name && (
						<TextInputError>{errors.name.message}</TextInputError>
					)}
				</TextInputRoot>

				<TextInputRoot>
					<TextInputLabel htmlFor="email">Seu e-mail</TextInputLabel>
					<TextInputBox>
						<TextInput
							id="email"
							placeholder="Digite seu e-mail...."
							{...register("email")}
						/>
					</TextInputBox>
					{errors.email && (
						<TextInputError>{errors.email.message}</TextInputError>
					)}
				</TextInputRoot>

				<ButtonRoot
					color="primary"
					size="big"
					variant="fill"
					type="submit"
					disabled={isSubmitting}
				>
					<ButtonText>Criar conta</ButtonText>
					<User size={16} />
				</ButtonRoot>
			</form>

			<Link
				href="/login"
				className="text-sm font-normal text-center text-gray-400"
			>
				Já tem uma conta? <span className="underline">Fazer login</span>
			</Link>
		</>
	);
}
