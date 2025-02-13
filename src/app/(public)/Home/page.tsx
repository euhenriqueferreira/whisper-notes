import ButtonText from "@/app/components/button/ButtonText";
import ButtonGrayOutlineRoot from "@/app/components/button/variants/ButtonGrayOutlineRoot";
import {
	CaretRight,
	ClockCounterClockwise,
	ListDashes,
	Note,
	Star,
	UserCircleDashed,
} from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import profileCoverImg from "../../../assets/profile-cover-image.png";
import profileImg from "../../../assets/profile-image.png";
import NavLinkRoot from "../components/NavLink/NavLinkRoot";
import NavLinkText from "../components/NavLink/NavLinkText";

export default function Home() {
	return (
		<div className="flex flex-col gap-12">
			<header className="relative flex items-end shadow-md shadow-black/5">
				<Image
					src={profileCoverImg}
					alt=""
					className="rounded-b-md w-full bottom-0 object-cover absolute"
					style={{ height: "calc(100% + 60px)" }}
				/>
				<div className="w-full relative mb-4 flex items-center justify-between px-8">
					<p className="text-xl text-gray-400 font-semibold text-left tracking-tight leading-tight">
						Bem vindo de volta
						<span className="block font-bold text-yellow-400 text-3xl">
							Henrique!
						</span>
					</p>

					<Image
						src={profileImg}
						alt=""
						className="rounded-full w-[60px] h-[60px]"
						quality={100}
					/>
				</div>
			</header>

			<div className="flex flex-col gap-5 px-8">
				<section className="flex flex-col gap-4">
					<h2 className="tracking-tight text-xl font-medium text-gray-400 leading-tight">
						Acesso rápido
					</h2>
					<div className="flex items-center gap-6">
						<ButtonGrayOutlineRoot>
							<ButtonText text="Listas de compras" />
							<Note size={20} />
						</ButtonGrayOutlineRoot>
						<ButtonGrayOutlineRoot>
							<ButtonText text="Notas sobre o trabalho" />
							<Note size={20} />
						</ButtonGrayOutlineRoot>
						<ButtonGrayOutlineRoot>
							<ButtonText text="Receitas" />
							<Note size={20} />
						</ButtonGrayOutlineRoot>
					</div>
				</section>
				<section className="flex flex-col gap-4">
					<h2 className="tracking-tight text-xl font-medium text-gray-400 leading-tight">
						Favoritos
					</h2>
					<div className="flex items-center gap-6">
						<ButtonGrayOutlineRoot>
							<ButtonText text="Listas de compras" />
							<Star size={20} weight="fill" color="#CCB900" />
						</ButtonGrayOutlineRoot>
						<ButtonGrayOutlineRoot>
							<ButtonText text="Notas sobre o trabalho" />
							<Star size={20} weight="fill" color="#CCB900" />
						</ButtonGrayOutlineRoot>
						<ButtonGrayOutlineRoot>
							<ButtonText text="Receitas" />
							<Star size={20} weight="fill" color="#CCB900" />
						</ButtonGrayOutlineRoot>
					</div>
				</section>
			</div>

			<div className="flex gap-6 px-8">
				<div className="flex flex-col gap-4 flex-1">
					<h2 className="tracking-tight text-xl font-medium text-gray-400 leading-tight">
						Notas mais recentes
					</h2>

					<div className="w-full rounded-md overflow-hidden border border-gray-700 shadow-md shadow-black/5">
						<div className="w-full bg-gray-700">
							<div className="w-full h-10 flex items-center justify-between px-3">
								<span className="text-sm font-semibold text-gray-400">
									Nome da nota
								</span>
								<span className="text-sm font-semibold text-gray-400">
									Última modificação
								</span>
							</div>
						</div>
						<div className="w-full">
							<div className="w-full h-10 flex items-center justify-between gap-1.5 px-3 border-b border-gray-700 hover:bg-gray-700/50 transition duration-100 cursor-pointer">
								<span className="text-sm font-semibold text-gray-400 flex-1 whitespace-nowrap text-ellipsis overflow-hidden">
									Lista de compras do mercado
								</span>
								<span className="text-sm font-semibold text-gray-400 whitespace-nowrap">
									há 10 minutos
								</span>
							</div>
							<div className="w-full h-10 flex items-center justify-between gap-1.5 px-3 border-b border-gray-700 hover:bg-gray-700/50 transition duration-100 cursor-pointer">
								<span className="text-sm font-semibold text-gray-400 flex-1 whitespace-nowrap text-ellipsis overflow-hidden">
									Receita de bolo de laranja
								</span>
								<span className="text-sm font-semibold text-gray-400 whitespace-nowrap">
									há 2 horas
								</span>
							</div>
							<div className="w-full h-10 flex items-center justify-between gap-1.5 px-3 border-b border-gray-700 hover:bg-gray-700/50 transition duration-100 cursor-pointer">
								<span className="text-sm font-semibold text-gray-400 flex-1 whitespace-nowrap text-ellipsis overflow-hidden">
									Anotações para entrevista de emprego
								</span>
								<span className="text-sm font-semibold text-gray-400 whitespace-nowrap">
									há 13 horas
								</span>
							</div>
							<div className="w-full h-10 flex items-center justify-between gap-1.5 px-3 border-b border-gray-700 hover:bg-gray-700/50 transition duration-100 cursor-pointer">
								<span className="text-sm font-semibold text-gray-400 flex-1 whitespace-nowrap text-ellipsis overflow-hidden">
									Horários aulas faculdade
								</span>
								<span className="text-sm font-semibold text-gray-400 whitespace-nowrap">
									há 3 dias
								</span>
							</div>
							<div className="w-full h-10 flex items-center justify-between gap-1.5 px-3 border-b border-gray-700 hover:bg-gray-700/50 transition duration-100 cursor-pointer">
								<span className="text-sm font-semibold text-gray-400 flex-1 whitespace-nowrap text-ellipsis overflow-hidden">
									Lembrar de comprar isso
								</span>
								<span className="text-sm font-semibold text-gray-400 whitespace-nowrap">
									há 1 mês
								</span>
							</div>
						</div>
					</div>
				</div>
				<div className="flex flex-col gap-4 flex-1">
					<h2 className="tracking-tight text-xl font-medium text-gray-400 leading-tight">
						Ações
					</h2>
					<div className="w-full flex flex-col justify-between gap-1 py-4 px-3 flex-1 rounded-md border border-gray-700 shadow-md shadow-black/5">
						<NavLinkRoot variant="big">
							<Note size={16} className="min-w-6" />
							<NavLinkText>Criar nota</NavLinkText>
							<CaretRight size={14} />
						</NavLinkRoot>
						<NavLinkRoot variant="big">
							<ListDashes size={16} className="min-w-6" />
							<NavLinkText>Lista de notas</NavLinkText>
							<CaretRight size={14} />
						</NavLinkRoot>
						<NavLinkRoot variant="big">
							<ClockCounterClockwise
								size={16}
								className="min-w-6"
							/>
							<NavLinkText>Histórico de alterações</NavLinkText>
							<CaretRight size={14} />
						</NavLinkRoot>
						<NavLinkRoot variant="big">
							<UserCircleDashed size={16} className="min-w-6" />
							<NavLinkText>Editar perfil</NavLinkText>
							<CaretRight size={14} />
						</NavLinkRoot>
					</div>
				</div>
			</div>
		</div>
	);
}
