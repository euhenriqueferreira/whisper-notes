import { ButtonRoot } from "@/app/components/button/ButtonRoot";
import { ButtonText } from "@/app/components/button/ButtonText";
import { TextInput } from "@/app/components/textInput/TextInput";
import { TextInputBox } from "@/app/components/textInput/TextInputBox";
import { TextInputLabel } from "@/app/components/textInput/TextInputLabel";
import { TextInputRoot } from "@/app/components/textInput/TextInputRoot";
import { User } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

export default function Register() {
	return (
		<>
			<form className="relative bg-gray-800 border border-gray-700 px-8 py-10 rounded-md flex flex-col items-end gap-4 w-[480px]">
				<TextInputRoot>
					<TextInputLabel htmlFor="name">Seu nome</TextInputLabel>
					<TextInputBox>
						<TextInput
							id="name"
							placeholder="Digite seu nome...."
						/>
					</TextInputBox>
					{/* <TextInputError>O e-mail é obrigatório</TextInputError> */}
				</TextInputRoot>

				<TextInputRoot>
					<TextInputLabel htmlFor="email">Seu e-mail</TextInputLabel>
					<TextInputBox>
						<TextInput
							id="email"
							placeholder="Digite seu e-mail...."
						/>
					</TextInputBox>
					{/* <TextInputError>O e-mail é obrigatório</TextInputError> */}
				</TextInputRoot>

				<ButtonRoot color="primary" size="big" variant="fill">
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
