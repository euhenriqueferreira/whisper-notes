import { ButtonRoot } from "@/app/components/button/ButtonRoot";
import { ButtonText } from "@/app/components/button/ButtonText";
import { TextInput } from "@/app/components/textInput/TextInput";
import { TextInputBox } from "@/app/components/textInput/TextInputBox";
import { TextInputRoot } from "@/app/components/textInput/TextInputRoot";
import {
	Funnel,
	MagnifyingGlass,
	NoteBlank,
	Star,
	Trash,
} from "@phosphor-icons/react/dist/ssr";

export default function Note() {
	return (
		<div className="flex flex-col gap-8 h-full px-10">
			<h1 className="text-3xl text-gray-400 tracking-tight leading-tight font-semibold text-left">
				Lista de notas
			</h1>

			<section>
				<div className="flex items-center justify-between">
					<div></div>
					<div>
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
						<ButtonRoot
							variant="outline"
							size="normal"
							color="secondary"
						>
							<ButtonText>Filtrar</ButtonText>
							<Funnel size={16} className="ml-2" />
						</ButtonRoot>
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
			</section>
		</div>
	);
}
