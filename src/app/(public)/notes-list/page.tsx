import { ButtonRoot } from "@/app/components/button/ButtonRoot";
import { ButtonText } from "@/app/components/button/ButtonText";
import { Pagination } from "@/app/components/pagination/Pagination";
import { TableBody } from "@/app/components/table/TableBody";
import { TableData } from "@/app/components/table/TableData";
import { TableHead } from "@/app/components/table/TableHead";
import { TableHeader } from "@/app/components/table/TableHeader";
import { TableRoot } from "@/app/components/table/TableRoot";
import { TableRow } from "@/app/components/table/TableRow";
import { TextInput } from "@/app/components/textInput/TextInput";
import { TextInputBox } from "@/app/components/textInput/TextInputBox";
import { TextInputRoot } from "@/app/components/textInput/TextInputRoot";
import {
	Funnel,
	MagnifyingGlass,
	NoteBlank,
	Star,
	XCircle,
} from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { DeleteButton } from "./components/DeleteButton";

export default function NoteList() {
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
							<Link href="/note">
								<ButtonRoot
									variant="fill"
									color="primary"
									size="normal"
								>
									<ButtonText>Nova nota</ButtonText>
									<NoteBlank size={16} className="ml-2" />
								</ButtonRoot>
							</Link>
						</div>
					</div>
				</div>

				<TableRoot>
					<TableHeader>
						<TableHead>Nome da nota</TableHead>
					</TableHeader>
					<TableBody>
						{Array.from({ length: 10 }).map((_, index) => {
							return (
								<TableRow key={index}>
									<TableData className="text-sm font-semibold text-gray-400 flex-1 whitespace-nowrap text-ellipsis overflow-hidden">
										Lista de compras do mercado
									</TableData>
									<TableData className="text-sm font-semibold text-gray-500 whitespace-nowrap">
										há 10 minutos
									</TableData>
									<TableData>
										<ButtonRoot
											color="secondary"
											size="icon"
											variant="ghost"
										>
											<Star
												size={14}
												weight="fill"
												color="#CCB900"
											/>
										</ButtonRoot>
									</TableData>
									<DeleteButton />
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
