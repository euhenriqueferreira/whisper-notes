import ButtonIconRoot from "@/app/components/button/variants/ButtonIconRoot";
import { Star, Trash } from "@phosphor-icons/react/dist/ssr";

export default function Note() {
	return (
		<div className="flex flex-col gap-8 h-full px-10">
			<h1 className="text-3xl text-gray-400 tracking-tight leading-tight font-semibold text-left">
				Lista de notas
			</h1>

			<section>
				<div className="filters"></div>
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
							<ButtonIconRoot>
								<Star size={14} weight="fill" color="#CCB900" />
							</ButtonIconRoot>
							<ButtonIconRoot>
								<Trash size={14} color="#FF6467" />
							</ButtonIconRoot>
						</div>
						<div className="w-full h-10 flex items-center justify-between gap-2 px-3 border-b border-gray-700 hover:bg-gray-700/50 transition duration-100 cursor-pointer">
							<span className="text-sm font-semibold text-gray-400 flex-1 whitespace-nowrap text-ellipsis overflow-hidden">
								Receita de bolo de laranja
							</span>
							<span className="text-sm font-semibold text-gray-500 whitespace-nowrap">
								há 2 horas
							</span>
							<ButtonIconRoot>
								<Star size={14} />
							</ButtonIconRoot>
							<ButtonIconRoot>
								<Trash size={14} color="#FF6467" />
							</ButtonIconRoot>
						</div>
						<div className="w-full h-10 flex items-center justify-between gap-2 px-3 border-b border-gray-700 hover:bg-gray-700/50 transition duration-100 cursor-pointer">
							<span className="text-sm font-semibold text-gray-400 flex-1 whitespace-nowrap text-ellipsis overflow-hidden">
								Anotações para entrevista de emprego
							</span>
							<span className="text-sm font-semibold text-gray-500 whitespace-nowrap">
								há 13 horas
							</span>
							<ButtonIconRoot>
								<Star size={14} weight="fill" color="#CCB900" />
							</ButtonIconRoot>
							<ButtonIconRoot>
								<Trash size={14} color="#FF6467" />
							</ButtonIconRoot>
						</div>
						<div className="w-full h-10 flex items-center justify-between gap-2 px-3 border-b border-gray-700 hover:bg-gray-700/50 transition duration-100 cursor-pointer">
							<span className="text-sm font-semibold text-gray-400 flex-1 whitespace-nowrap text-ellipsis overflow-hidden">
								Horários aulas faculdade
							</span>
							<span className="text-sm font-semibold text-gray-500 whitespace-nowrap">
								há 3 dias
							</span>
							<ButtonIconRoot>
								<Star size={14} />
							</ButtonIconRoot>
							<ButtonIconRoot>
								<Trash size={14} color="#FF6467" />
							</ButtonIconRoot>
						</div>
						<div className="w-full h-10 flex items-center justify-between gap-2 px-3 border-b border-gray-700 hover:bg-gray-700/50 transition duration-100 cursor-pointer">
							<span className="text-sm font-semibold text-gray-400 flex-1 whitespace-nowrap text-ellipsis overflow-hidden">
								Lembrar de comprar isso
							</span>
							<span className="text-sm font-semibold text-gray-500 whitespace-nowrap">
								há 1 mês
							</span>
							<ButtonIconRoot>
								<Star size={14} weight="fill" color="#CCB900" />
							</ButtonIconRoot>
							<ButtonIconRoot>
								<Trash size={14} color="#FF6467" />
							</ButtonIconRoot>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
