import { ButtonRoot } from "@/app/components/button/ButtonRoot";
import { ButtonText } from "@/app/components/button/ButtonText";
import { TextInput } from "@/app/components/textInput/TextInput";
import { TextInputBox } from "@/app/components/textInput/TextInputBox";
import { TextInputLabel } from "@/app/components/textInput/TextInputLabel";
import { TextInputRoot } from "@/app/components/textInput/TextInputRoot";
import { ThemeSelector } from "@/app/components/themeSelector/ThemeSelector";
import {
	ArrowsCounterClockwise,
	CameraRotate,
	CaretDown,
	FloppyDisk,
	Trash,
	XCircle,
} from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import profileCoverImg from "../../../assets/profile-cover-image.png";
import profileImg from "../../../assets/profile-image.png";

export default function Profile() {
	return (
		<div className="flex flex-col gap-8 h-full px-10">
			<h1 className="text-3xl text-gray-400 tracking-tight leading-tight font-semibold text-left">
				Meu perfil
			</h1>
			<section className="flex items-stretch gap-4">
				<div className="rounded-md overflow-hidden w-[350px] bg-gray-700 min-h-[250px] flex flex-col">
					<header>
						<div className="relative group overflow-hidden">
							<Image
								src={profileCoverImg}
								alt=""
								className="w-full h-[100px] object-cover"
							/>
							<div className="w-full h-full bg-gray-700/85 absolute left-0 top-0 z-10 text-md text-gray-400 font-semibold flex justify-center items-center gap-2 cursor-pointer opacity-0 hover:opacity-100 transition duration-100">
								<p>Editar foto</p>
								<CameraRotate size={30} />
							</div>
						</div>
						<div className="relative w-fit z-30 ml-3 ">
							<Image
								src={profileImg}
								alt=""
								className="h-[60px] w-[60px] rounded-full object-cover -mt-[35px]"
							/>
							<div className="w-full h-full rounded-full bg-gray-700/85 absolute left-0 top-0 z-10 text-md text-gray-400 font-semibold flex justify-center items-center gap-2 cursor-pointer opacity-0 hover:opacity-100 transition duration-100">
								<CameraRotate size={30} />
							</div>
						</div>
					</header>
					<footer className="px-3 py-4 flex-1 flex flex-col justify-between">
						<div>
							<p className="text-md leading-relaxed font-semibold text-gray-400">
								Nome: Henrique Ferreira Pereira
							</p>
							<p className="text-md leading-relaxed font-semibold text-gray-400">
								E-mail: quinhopereira.dev@gmail.com
							</p>
						</div>

						<span className="block text-xs font-regular text-gray-500 mt-7">
							Criado em 20/01/2023
						</span>
					</footer>
				</div>
				<form className="flex-1 flex flex-col gap-3 justify-between">
					<h2 className="text-xl text-gray-400 font-semibold tracking-tight leading-tight">
						Deseja editar as suas credenciais?
					</h2>

					<div className="flex flex-col gap-3">
						<TextInputRoot>
							<TextInputLabel htmlFor="name">
								Seu nome
							</TextInputLabel>
							<TextInputBox>
								<TextInput
									id="name"
									placeholder="Digite seu nome..."
								/>
							</TextInputBox>
							{/* <TextInputError>
								O nome é obrigatório
							</TextInputError> */}
						</TextInputRoot>
						<TextInputRoot>
							<TextInputLabel htmlFor="email">
								Seu e-mail
							</TextInputLabel>
							<TextInputBox>
								<TextInput
									id="email"
									placeholder="Digite seu e-mail..."
								/>
							</TextInputBox>
							{/* <TextInputError>
								O nome é obrigatório
							</TextInputError> */}
						</TextInputRoot>
					</div>

					<div className="flex justify-between gap-4">
						<ButtonRoot
							color="secondary"
							size="big"
							variant="outline"
						>
							<ButtonText>Limpar campos</ButtonText>
							<XCircle size={20} />
						</ButtonRoot>
						<ButtonRoot color="primary" size="big" variant="fill">
							<ButtonText>Salvar perfil</ButtonText>
							<FloppyDisk size={20} />
						</ButtonRoot>
					</div>
				</form>
			</section>

			<section className="flex flex-col gap-2">
				<h2 className="text-xl text-gray-400 font-semibold tracking-tight leading-tight">
					Altere configurações importantes
				</h2>

				<div className="w-full flex items-center justify-between px-3 py-2.5 border-2 border-gray-700 hover:border-gray-600 transition duration-100 rounded-md">
					<p className="text-md font-semibold text-gray-400">
						Recupere sua senha
					</p>

					<div className="w-40">
						<ButtonRoot
							color="secondary"
							size="normal"
							variant="outline"
						>
							<ButtonText>Recuperar senha </ButtonText>
							<ArrowsCounterClockwise size={14} />
						</ButtonRoot>
					</div>
				</div>
				<div className="w-full flex items-center justify-between px-3 py-2.5 border-2 border-gray-700 hover:border-gray-600 transition duration-100 rounded-md">
					<p className="text-md font-semibold text-gray-400">
						Método de login
					</p>

					<div className="w-52">
						<div className="relative">
							<ButtonRoot
								color="secondary"
								size="normal"
								variant="outline"
							>
								<ButtonText>Tipo de login</ButtonText>
								<CaretDown size={14} />
							</ButtonRoot>
							{/* <div className="bg-gray-800 absolute z-10 top-[105%] border border-gray-400 w-full rounded-md p-1 flex flex-col gap-1 shadow-md shadow-black/5">
								<ButtonRoot
									color="secondary"
									size="normal"
									variant="ghost"
								>
									<ButtonText>
										Login com e-mail e senha
									</ButtonText>
								</ButtonRoot>
								<ButtonRoot
									color="secondary"
									size="normal"
									variant="ghost"
								>
									<ButtonText>
										Login com link por e-mail
									</ButtonText>
								</ButtonRoot>
							</div> */}
						</div>
					</div>
				</div>
				<div className="w-full flex items-center justify-between px-3 py-2.5 border-2 border-gray-700 hover:border-gray-600 transition duration-100 rounded-md">
					<p className="text-md font-semibold text-gray-400">
						Trocar tema
					</p>

					<ThemeSelector />
				</div>
				<div className="w-full flex items-center justify-between px-3 py-2.5 border-2 border-red-400 hover:border-red-300 transition duration-100 rounded-md">
					<p className="text-md font-semibold text-red-400">
						Excluir conta
					</p>

					<div className="w-40">
						<ButtonRoot color="danger" size="normal" variant="fill">
							<ButtonText>Excluir conta</ButtonText>
							<Trash size={14} />
						</ButtonRoot>
					</div>
				</div>
			</section>
		</div>
	);
}
