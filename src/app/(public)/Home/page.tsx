import { ButtonRoot } from "@/app/components/button/ButtonRoot";
import { ButtonText } from "@/app/components/button/ButtonText";
import { TableBody } from "@/app/components/table/TableBody";
import { TableData } from "@/app/components/table/TableData";
import { TableHead } from "@/app/components/table/TableHead";
import { TableHeader } from "@/app/components/table/TableHeader";
import { TableRoot } from "@/app/components/table/TableRoot";
import { TableRow } from "@/app/components/table/TableRow";
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
					<div className="grid grid-cols-3 gap-6">
						<ButtonRoot
							color="secondary"
							size="big"
							variant="outline"
						>
							<ButtonText>Listas de compras</ButtonText>
							<Note size={20} />
						</ButtonRoot>
						<ButtonRoot
							color="secondary"
							size="big"
							variant="outline"
						>
							<ButtonText>Notas sobre o trabalho</ButtonText>
							<Note size={20} />
						</ButtonRoot>
						<ButtonRoot
							color="secondary"
							size="big"
							variant="outline"
						>
							<ButtonText>Receitas</ButtonText>
							<Note size={20} />
						</ButtonRoot>
					</div>
				</section>
				<section className="flex flex-col gap-4">
					<h2 className="tracking-tight text-xl font-medium text-gray-400 leading-tight">
						Favoritos
					</h2>
					<div className="grid grid-cols-3 gap-6">
						<ButtonRoot
							color="secondary"
							size="big"
							variant="outline"
						>
							<ButtonText>Listas de compras</ButtonText>
							<Star size={20} weight="fill" color="#CCB900" />
						</ButtonRoot>
						<ButtonRoot
							color="secondary"
							size="big"
							variant="outline"
						>
							<ButtonText>Notas sobre o trabalho</ButtonText>
							<Star size={20} weight="fill" color="#CCB900" />
						</ButtonRoot>
						<ButtonRoot
							color="secondary"
							size="big"
							variant="outline"
						>
							<ButtonText>Receitas</ButtonText>
							<Star size={20} weight="fill" color="#CCB900" />
						</ButtonRoot>
					</div>
				</section>
			</div>

			<div className="flex gap-6 px-8">
				<div className="flex flex-col gap-4 flex-1">
					<h2 className="tracking-tight text-xl font-medium text-gray-400 leading-tight">
						Notas mais recentes
					</h2>

					<TableRoot>
						<TableHeader>
							<TableHead>Nome da nota</TableHead>
							<TableHead>Última modificação</TableHead>
						</TableHeader>
						<TableBody>
							{Array.from({ length: 5 }).map((_, index) => {
								return (
									<TableRow key={index}>
										<TableData className="text-sm font-semibold text-gray-400 flex-1 whitespace-nowrap text-ellipsis overflow-hidden">
											Lista de compras do mercado
										</TableData>
										<TableData className="text-sm font-semibold text-gray-400 whitespace-nowrap">
											há 10 minutos
										</TableData>
									</TableRow>
								);
							})}
						</TableBody>
					</TableRoot>
				</div>
				<div className="flex flex-col gap-4 flex-1">
					<h2 className="tracking-tight text-xl font-medium text-gray-400 leading-tight">
						Ações
					</h2>
					<div className="w-full flex flex-col justify-between gap-1 py-4 px-3 flex-1 rounded-md border border-gray-700 shadow-md shadow-black/5">
						<NavLinkRoot href="/note" variant="big">
							<Note size={16} className="min-w-6" />
							<NavLinkText>Criar nota</NavLinkText>
							<CaretRight size={14} />
						</NavLinkRoot>
						<NavLinkRoot href="/notes-list" variant="big">
							<ListDashes size={16} className="min-w-6" />
							<NavLinkText>Lista de notas</NavLinkText>
							<CaretRight size={14} />
						</NavLinkRoot>
						<NavLinkRoot href="/event-history" variant="big">
							<ClockCounterClockwise
								size={16}
								className="min-w-6"
							/>
							<NavLinkText>Histórico de eventos</NavLinkText>
							<CaretRight size={14} />
						</NavLinkRoot>
						<NavLinkRoot href="/profile" variant="big">
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
