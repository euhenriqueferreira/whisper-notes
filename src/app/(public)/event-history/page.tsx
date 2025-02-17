import { ButtonRoot } from "@/app/components/button/ButtonRoot";
import { ButtonText } from "@/app/components/button/ButtonText";
import { Pagination } from "@/app/components/pagination/Pagination";
import { TableBody } from "@/app/components/table/TableBody";
import { TableData } from "@/app/components/table/TableData";
import { TableHead } from "@/app/components/table/TableHead";
import { TableHeader } from "@/app/components/table/TableHeader";
import { TableRoot } from "@/app/components/table/TableRoot";
import { TableRow } from "@/app/components/table/TableRow";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import {
	ArrowDown,
	Funnel,
	NoteBlank,
	XCircle,
} from "@phosphor-icons/react/dist/ssr";

export default function NoteList() {
	return (
		<div className="flex flex-col gap-8 h-full px-10">
			<h1 className="text-3xl text-gray-400 tracking-tight leading-tight font-semibold text-left">
				Histórico de Eventos
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
							<Select>
								<SelectTrigger className="w-full">
									<SelectValue placeholder="Tipo de evento" />
								</SelectTrigger>
								<SelectContent>
									<SelectGroup>
										<SelectItem value="created">
											Criação
										</SelectItem>
										<SelectItem value="deleted">
											Exclusão
										</SelectItem>
									</SelectGroup>
								</SelectContent>
							</Select>
						</div>
						<div className="w-32">
							<ButtonRoot
								variant="fill"
								size="normal"
								color="primary"
							>
								<ButtonText>Filtrar</ButtonText>
								<Funnel size={16} className="ml-2" />
							</ButtonRoot>
						</div>
					</div>
				</div>

				<TableRoot>
					<TableHeader className="flex justify-between px-3 gap-1.5 items-center">
						<TableHead>Descrição da alteração</TableHead>
						<TableHead>
							Última modificação
							{/* <ArrowUp /> */}
							<ArrowDown />
						</TableHead>
					</TableHeader>
					<TableBody>
						{Array.from({ length: 10 }).map((_, index) => {
							return (
								<TableRow key={index}>
									<TableData className="text-sm font-normal text-gray-400 flex-1 whitespace-nowrap text-ellipsis overflow-hidden">
										<span className="text-sm text-gray-400 font-bold">
											Henrique
										</span>
										<span className="text-red-400">
											{" "}
											excluiu
										</span>{" "}
										a pasta
										<span className="text-sm text-gray-400 font-bold">
											{" "}
											Receitas de Culinária
										</span>
									</TableData>
									<TableData className="text-sm font-semibold text-gray-500 whitespace-nowrap">
										há 10 minutos
									</TableData>
								</TableRow>
							);
						})}
					</TableBody>
				</TableRoot>

				<Pagination />
			</section>
		</div>
	);
}
