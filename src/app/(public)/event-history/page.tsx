import { ButtonRoot } from "@/app/components/button/ButtonRoot";
import { ButtonText } from "@/app/components/button/ButtonText";
import { SelectRoot } from "@/app/components/select/SelectRoot";
import {
	CaretDoubleLeft,
	CaretDoubleRight,
	CaretDown,
	CaretLeft,
	CaretRight,
	Funnel,
	NoteBlank,
	XCircle,
} from "@phosphor-icons/react/dist/ssr";

export default function NoteList() {
	return (
		<div className="flex flex-col gap-8 h-full px-10">
			<h1 className="text-3xl text-gray-400 tracking-tight leading-tight font-semibold text-left">
				Histórico de Alterações
			</h1>

			<section className="flex flex-col gap-4">
				<div className="flex items-center justify-between">
					<div className="flex gap-2">
						<div className="bg-gray-700 text-gray-500 rounded-md text-xs font-normal flex items-center gap-1 p-0.5 px-2 max-w-52 cursor-pointer">
							<NoteBlank size={12} />
							<span className="flex-1 text-left whitespace-nowrap overflow-hidden text-ellipsis">
								Receitas de bolo muito legal
							</span>
							<XCircle size={12} />
						</div>
					</div>
					<div className="flex gap-3 justify-end">
						<div className="w-44">
							<SelectRoot>
								<ButtonRoot
									color="secondary"
									size="normal"
									variant="outline"
								>
									<ButtonText>Tipo de evento</ButtonText>
									<CaretDown size={14} />
								</ButtonRoot>
								{/* <SelectDropdown>
									<ButtonRoot
										color="secondary"
										size="normal"
										variant="ghost"
									>
										<ButtonText>Criação</ButtonText>
									</ButtonRoot>
									<ButtonRoot
										color="secondary"
										size="normal"
										variant="ghost"
									>
										<ButtonText>Deleção</ButtonText>
									</ButtonRoot>
								</SelectDropdown> */}
							</SelectRoot>
						</div>
						<div className="w-32">
							<ButtonRoot
								variant="outline"
								size="normal"
								color="secondary"
							>
								<ButtonText>Filtrar</ButtonText>
								<Funnel size={16} className="ml-2" />
							</ButtonRoot>
						</div>
					</div>
				</div>
				<div className="w-full rounded-md overflow-hidden border border-gray-700 shadow-md shadow-black/5">
					<div className="w-full bg-gray-700">
						<div className="w-full h-10 flex items-center justify-between px-3">
							<span className="text-sm font-semibold text-gray-400">
								Descrição da alteração
							</span>
						</div>
					</div>
					<div className="w-full">
						<div className="w-full h-10 flex items-center justify-between gap-2 px-3 border-b border-gray-700 hover:bg-gray-700/50 transition duration-100 cursor-pointer">
							<span className="text-sm font-normal text-gray-400 flex-1 whitespace-nowrap text-ellipsis overflow-hidden">
								<span className="text-sm text-gray-400 font-bold">
									Henrique
								</span>
								<span className="text-red-400"> excluiu</span> a
								pasta
								<span className="text-sm text-gray-400 font-bold">
									{" "}
									Receitas de Culinária
								</span>
							</span>
							<span className="text-sm font-semibold text-gray-500 whitespace-nowrap">
								há 10 minutos
							</span>
						</div>
						<div className="w-full h-10 flex items-center justify-between gap-2 px-3 border-b border-gray-700 hover:bg-gray-700/50 transition duration-100 cursor-pointer">
							<span className="text-sm font-semibold text-gray-400 flex-1 whitespace-nowrap text-ellipsis overflow-hidden">
								<span className="text-sm text-gray-400 font-bold">
									Henrique
								</span>
								<span className="text-green-400"> criou</span> a
								pasta
								<span className="text-sm text-gray-400 font-bold">
									{" "}
									Lista de compras do mercado
								</span>
							</span>
							<span className="text-sm font-semibold text-gray-500 whitespace-nowrap">
								há 2 horas
							</span>
						</div>
						<div className="w-full h-10 flex items-center justify-between gap-2 px-3 border-b border-gray-700 hover:bg-gray-700/50 transition duration-100 cursor-pointer">
							<span className="text-sm font-normal text-gray-400 flex-1 whitespace-nowrap text-ellipsis overflow-hidden">
								<span className="text-sm text-gray-400 font-bold">
									Henrique
								</span>
								<span className="text-red-400"> excluiu</span> a
								pasta
								<span className="text-sm text-gray-400 font-bold">
									{" "}
									Receitas de Culinária
								</span>
							</span>
							<span className="text-sm font-semibold text-gray-500 whitespace-nowrap">
								há 10 minutos
							</span>
						</div>
						<div className="w-full h-10 flex items-center justify-between gap-2 px-3 border-b border-gray-700 hover:bg-gray-700/50 transition duration-100 cursor-pointer">
							<span className="text-sm font-semibold text-gray-400 flex-1 whitespace-nowrap text-ellipsis overflow-hidden">
								<span className="text-sm text-gray-400 font-bold">
									Henrique
								</span>
								<span className="text-green-400"> criou</span> a
								pasta
								<span className="text-sm text-gray-400 font-bold">
									{" "}
									Lista de compras do mercado
								</span>
							</span>
							<span className="text-sm font-semibold text-gray-500 whitespace-nowrap">
								há 2 horas
							</span>
						</div>
						<div className="w-full h-10 flex items-center justify-between gap-2 px-3 border-b border-gray-700 hover:bg-gray-700/50 transition duration-100 cursor-pointer">
							<span className="text-sm font-normal text-gray-400 flex-1 whitespace-nowrap text-ellipsis overflow-hidden">
								<span className="text-sm text-gray-400 font-bold">
									Henrique
								</span>
								<span className="text-red-400"> excluiu</span> a
								pasta
								<span className="text-sm text-gray-400 font-bold">
									{" "}
									Receitas de Culinária
								</span>
							</span>
							<span className="text-sm font-semibold text-gray-500 whitespace-nowrap">
								há 10 minutos
							</span>
						</div>
						<div className="w-full h-10 flex items-center justify-between gap-2 px-3 border-b border-gray-700 hover:bg-gray-700/50 transition duration-100 cursor-pointer">
							<span className="text-sm font-semibold text-gray-400 flex-1 whitespace-nowrap text-ellipsis overflow-hidden">
								<span className="text-sm text-gray-400 font-bold">
									Henrique
								</span>
								<span className="text-green-400"> criou</span> a
								pasta
								<span className="text-sm text-gray-400 font-bold">
									{" "}
									Lista de compras do mercado
								</span>
							</span>
							<span className="text-sm font-semibold text-gray-500 whitespace-nowrap">
								há 2 horas
							</span>
						</div>
						<div className="w-full h-10 flex items-center justify-between gap-2 px-3 border-b border-gray-700 hover:bg-gray-700/50 transition duration-100 cursor-pointer">
							<span className="text-sm font-normal text-gray-400 flex-1 whitespace-nowrap text-ellipsis overflow-hidden">
								<span className="text-sm text-gray-400 font-bold">
									Henrique
								</span>
								<span className="text-red-400"> excluiu</span> a
								pasta
								<span className="text-sm text-gray-400 font-bold">
									{" "}
									Receitas de Culinária
								</span>
							</span>
							<span className="text-sm font-semibold text-gray-500 whitespace-nowrap">
								há 10 minutos
							</span>
						</div>
						<div className="w-full h-10 flex items-center justify-between gap-2 px-3 border-b border-gray-700 hover:bg-gray-700/50 transition duration-100 cursor-pointer">
							<span className="text-sm font-semibold text-gray-400 flex-1 whitespace-nowrap text-ellipsis overflow-hidden">
								<span className="text-sm text-gray-400 font-bold">
									Henrique
								</span>
								<span className="text-green-400"> criou</span> a
								pasta
								<span className="text-sm text-gray-400 font-bold">
									{" "}
									Lista de compras do mercado
								</span>
							</span>
							<span className="text-sm font-semibold text-gray-500 whitespace-nowrap">
								há 2 horas
							</span>
						</div>
						<div className="w-full h-10 flex items-center justify-between gap-2 px-3 border-b border-gray-700 hover:bg-gray-700/50 transition duration-100 cursor-pointer">
							<span className="text-sm font-normal text-gray-400 flex-1 whitespace-nowrap text-ellipsis overflow-hidden">
								<span className="text-sm text-gray-400 font-bold">
									Henrique
								</span>
								<span className="text-red-400"> excluiu</span> a
								pasta
								<span className="text-sm text-gray-400 font-bold">
									{" "}
									Receitas de Culinária
								</span>
							</span>
							<span className="text-sm font-semibold text-gray-500 whitespace-nowrap">
								há 10 minutos
							</span>
						</div>
						<div className="w-full h-10 flex items-center justify-between gap-2 px-3 border-b border-gray-700 hover:bg-gray-700/50 transition duration-100 cursor-pointer">
							<span className="text-sm font-semibold text-gray-400 flex-1 whitespace-nowrap text-ellipsis overflow-hidden">
								<span className="text-sm text-gray-400 font-bold">
									Henrique
								</span>
								<span className="text-green-400"> criou</span> a
								pasta
								<span className="text-sm text-gray-400 font-bold">
									{" "}
									Lista de compras do mercado
								</span>
							</span>
							<span className="text-sm font-semibold text-gray-500 whitespace-nowrap">
								há 2 horas
							</span>
						</div>
					</div>
				</div>
				<div className="flex justify-between w-full px-3">
					<div>
						<span className="text-sm font-semibold text-gray-500">
							Página 1 de 12
						</span>
					</div>
					<div className="flex gap-3">
						<ButtonRoot
							color="secondary"
							size="icon"
							variant="outline"
						>
							<CaretDoubleLeft size={16} />
						</ButtonRoot>
						<ButtonRoot
							color="secondary"
							size="icon"
							variant="outline"
						>
							<CaretLeft size={16} />
						</ButtonRoot>
						<ButtonRoot
							color="secondary"
							size="icon"
							variant="outline"
						>
							<CaretRight size={16} />
						</ButtonRoot>
						<ButtonRoot
							color="secondary"
							size="icon"
							variant="outline"
						>
							<CaretDoubleRight size={16} />
						</ButtonRoot>
					</div>
				</div>
			</section>
		</div>
	);
}
