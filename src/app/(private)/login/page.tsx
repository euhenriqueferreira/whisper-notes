import { ButtonRoot } from "@/app/components/button/ButtonRoot";
import { ButtonText } from "@/app/components/button/ButtonText";
import { TextInput } from "@/app/components/textInput/TextInput";
import { TextInputBox } from "@/app/components/textInput/TextInputBox";
import { TextInputLabel } from "@/app/components/textInput/TextInputLabel";
import { TextInputRoot } from "@/app/components/textInput/TextInputRoot";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

interface LoginProps {
	isLoginWithPassword?: boolean;
}

export default function Login({ isLoginWithPassword }: LoginProps) {
	return (
		<>
			<form className="relative bg-gray-800 border border-gray-700 px-8 py-10 rounded-md flex flex-col items-stretch gap-4">
				<TextInputRoot>
					<TextInputLabel htmlFor="email">Seu e-mail</TextInputLabel>
					<TextInputBox>
						<TextInput
							id="email"
							placeholder="Digite seu e-mail..."
						/>
					</TextInputBox>
					{/* <TextInputError>O e-mail é obrigatório</TextInputError> */}
				</TextInputRoot>

				{isLoginWithPassword && (
					<TextInputRoot>
						<TextInputLabel htmlFor="password">
							Sua senha
						</TextInputLabel>
						<TextInput
							type="password"
							id="password"
							placeholder="Digite sua senha..."
						/>
						{/* <TextInputError>O e-mail é obrigatório</TextInputError> */}
					</TextInputRoot>
				)}

				<ButtonRoot color="primary" size="big" variant="fill">
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
