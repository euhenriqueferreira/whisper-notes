import { ButtonRoot } from "@/app/components/button/ButtonRoot";
import { ButtonText } from "@/app/components/button/ButtonText";
import { TextInput } from "@/app/components/textInput/TextInput";
import { TextInputBox } from "@/app/components/textInput/TextInputBox";
import { TextInputRoot } from "@/app/components/textInput/TextInputRoot";
import {
	CaretDoubleLeft,
	CaretDoubleRight,
	CaretLeft,
	CaretRight,
	Funnel,
	MagnifyingGlass,
	NoteBlank,
	Star,
	Trash,
	XCircle,
} from "@phosphor-icons/react/dist/ssr";

export default function Note() {
	return (
		<div className="flex flex-col gap-8 h-full px-10">
			<h1 className="text-3xl text-gray-400 tracking-tight leading-tight font-semibold text-left">
				Lista de notas
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
							<TextInputRoot>
								<TextInputBox height="small">
									<TextInput
										font="small"
										placeholder="Pesquise por notas..."
										height="small"
									/>
									<MagnifyingGlass size={14} />
								</TextInputBox>
							</TextInputRoot>
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
						<div className="w-32">
							<ButtonRoot
								variant="fill"
								color="primary"
								size="normal"
							>
								<ButtonText>Nova nota</ButtonText>
								<NoteBlank size={16} className="ml-2" />
							</ButtonRoot>
						</div>
					</div>
				</div>
				<div className="w-full rounded-md overflow-hidden border border-gray-700 shadow-md shadow-black/5">
					<div className="w-full bg-gray-700">
						<div className="w-full h-10 flex items-center justify-between px-3">
							<span className="text-sm font-semibold text-gray-400">
								Nome da nota
							</span>
						</div>
					</div>
					<div className="w-full">
						<div className="w-full h-10 flex items-center justify-between gap-2 px-3 border-b border-gray-700 hover:bg-gray-700/50 transition duration-100 cursor-pointer">
							<span className="text-sm font-semibold text-gray-400 flex-1 whitespace-nowrap text-ellipsis overflow-hidden">
								Lista de compras do mercado
							</span>
							<span className="text-sm font-semibold text-gray-500 whitespace-nowrap">
								há 10 minutos
							</span>
							<ButtonRoot
								color="secondary"
								size="icon"
								variant="ghost"
							>
								<Star size={14} weight="fill" color="#CCB900" />
							</ButtonRoot>
							<ButtonRoot
								color="danger"
								size="icon"
								variant="ghost"
							>
								<Trash size={14} color="#FF6467" />
							</ButtonRoot>
						</div>
						<div className="w-full h-10 flex items-center justify-between gap-2 px-3 border-b border-gray-700 hover:bg-gray-700/50 transition duration-100 cursor-pointer">
							<span className="text-sm font-semibold text-gray-400 flex-1 whitespace-nowrap text-ellipsis overflow-hidden">
								Receita de bolo de laranja
							</span>
							<span className="text-sm font-semibold text-gray-500 whitespace-nowrap">
								há 2 horas
							</span>
							<ButtonRoot
								color="secondary"
								size="icon"
								variant="ghost"
							>
								<Star size={14} />
							</ButtonRoot>
							<ButtonRoot
								color="danger"
								size="icon"
								variant="ghost"
							>
								<Trash size={14} color="#FF6467" />
							</ButtonRoot>
						</div>
						<div className="w-full h-10 flex items-center justify-between gap-2 px-3 border-b border-gray-700 hover:bg-gray-700/50 transition duration-100 cursor-pointer">
							<span className="text-sm font-semibold text-gray-400 flex-1 whitespace-nowrap text-ellipsis overflow-hidden">
								Anotações para entrevista de emprego
							</span>
							<span className="text-sm font-semibold text-gray-500 whitespace-nowrap">
								há 13 horas
							</span>
							<ButtonRoot
								color="secondary"
								size="icon"
								variant="ghost"
							>
								<Star size={14} weight="fill" color="#CCB900" />
							</ButtonRoot>
							<ButtonRoot
								color="danger"
								size="icon"
								variant="ghost"
							>
								<Trash size={14} color="#FF6467" />
							</ButtonRoot>
						</div>
						<div className="w-full h-10 flex items-center justify-between gap-2 px-3 border-b border-gray-700 hover:bg-gray-700/50 transition duration-100 cursor-pointer">
							<span className="text-sm font-semibold text-gray-400 flex-1 whitespace-nowrap text-ellipsis overflow-hidden">
								Horários aulas faculdade
							</span>
							<span className="text-sm font-semibold text-gray-500 whitespace-nowrap">
								há 3 dias
							</span>
							<ButtonRoot
								color="secondary"
								size="icon"
								variant="ghost"
							>
								<Star size={14} />
							</ButtonRoot>
							<ButtonRoot
								color="danger"
								size="icon"
								variant="ghost"
							>
								<Trash size={14} color="#FF6467" />
							</ButtonRoot>
						</div>
						<div className="w-full h-10 flex items-center justify-between gap-2 px-3 border-b border-gray-700 hover:bg-gray-700/50 transition duration-100 cursor-pointer">
							<span className="text-sm font-semibold text-gray-400 flex-1 whitespace-nowrap text-ellipsis overflow-hidden">
								Lembrar de comprar isso
							</span>
							<span className="text-sm font-semibold text-gray-500 whitespace-nowrap">
								há 1 mês
							</span>
							<ButtonRoot
								color="secondary"
								size="icon"
								variant="ghost"
							>
								<Star size={14} weight="fill" color="#CCB900" />
							</ButtonRoot>
							<ButtonRoot
								color="danger"
								size="icon"
								variant="ghost"
							>
								<Trash size={14} color="#FF6467" />
							</ButtonRoot>
						</div>
						<div className="w-full h-10 flex items-center justify-between gap-2 px-3 border-b border-gray-700 hover:bg-gray-700/50 transition duration-100 cursor-pointer">
							<span className="text-sm font-semibold text-gray-400 flex-1 whitespace-nowrap text-ellipsis overflow-hidden">
								Lista de compras do mercado
							</span>
							<span className="text-sm font-semibold text-gray-500 whitespace-nowrap">
								há 10 minutos
							</span>
							<ButtonRoot
								color="secondary"
								size="icon"
								variant="ghost"
							>
								<Star size={14} weight="fill" color="#CCB900" />
							</ButtonRoot>
							<ButtonRoot
								color="danger"
								size="icon"
								variant="ghost"
							>
								<Trash size={14} color="#FF6467" />
							</ButtonRoot>
						</div>
						<div className="w-full h-10 flex items-center justify-between gap-2 px-3 border-b border-gray-700 hover:bg-gray-700/50 transition duration-100 cursor-pointer">
							<span className="text-sm font-semibold text-gray-400 flex-1 whitespace-nowrap text-ellipsis overflow-hidden">
								Receita de bolo de laranja
							</span>
							<span className="text-sm font-semibold text-gray-500 whitespace-nowrap">
								há 2 horas
							</span>
							<ButtonRoot
								color="secondary"
								size="icon"
								variant="ghost"
							>
								<Star size={14} />
							</ButtonRoot>
							<ButtonRoot
								color="danger"
								size="icon"
								variant="ghost"
							>
								<Trash size={14} color="#FF6467" />
							</ButtonRoot>
						</div>
						<div className="w-full h-10 flex items-center justify-between gap-2 px-3 border-b border-gray-700 hover:bg-gray-700/50 transition duration-100 cursor-pointer">
							<span className="text-sm font-semibold text-gray-400 flex-1 whitespace-nowrap text-ellipsis overflow-hidden">
								Anotações para entrevista de emprego
							</span>
							<span className="text-sm font-semibold text-gray-500 whitespace-nowrap">
								há 13 horas
							</span>
							<ButtonRoot
								color="secondary"
								size="icon"
								variant="ghost"
							>
								<Star size={14} weight="fill" color="#CCB900" />
							</ButtonRoot>
							<ButtonRoot
								color="danger"
								size="icon"
								variant="ghost"
							>
								<Trash size={14} color="#FF6467" />
							</ButtonRoot>
						</div>
						<div className="w-full h-10 flex items-center justify-between gap-2 px-3 border-b border-gray-700 hover:bg-gray-700/50 transition duration-100 cursor-pointer">
							<span className="text-sm font-semibold text-gray-400 flex-1 whitespace-nowrap text-ellipsis overflow-hidden">
								Horários aulas faculdade
							</span>
							<span className="text-sm font-semibold text-gray-500 whitespace-nowrap">
								há 3 dias
							</span>
							<ButtonRoot
								color="secondary"
								size="icon"
								variant="ghost"
							>
								<Star size={14} />
							</ButtonRoot>
							<ButtonRoot
								color="danger"
								size="icon"
								variant="ghost"
							>
								<Trash size={14} color="#FF6467" />
							</ButtonRoot>
						</div>
						<div className="w-full h-10 flex items-center justify-between gap-2 px-3 border-b border-gray-700 hover:bg-gray-700/50 transition duration-100 cursor-pointer">
							<span className="text-sm font-semibold text-gray-400 flex-1 whitespace-nowrap text-ellipsis overflow-hidden">
								Lembrar de comprar isso
							</span>
							<span className="text-sm font-semibold text-gray-500 whitespace-nowrap">
								há 1 mês
							</span>
							<ButtonRoot
								color="secondary"
								size="icon"
								variant="ghost"
							>
								<Star size={14} weight="fill" color="#CCB900" />
							</ButtonRoot>
							<ButtonRoot
								color="danger"
								size="icon"
								variant="ghost"
							>
								<Trash size={14} color="#FF6467" />
							</ButtonRoot>
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
