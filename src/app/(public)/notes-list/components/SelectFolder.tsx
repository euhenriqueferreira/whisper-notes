import { Folder } from "@phosphor-icons/react/dist/ssr";

interface SelectFolderProps {
	dropdown?: boolean;
}

export default function SelectFolder({ dropdown }: SelectFolderProps) {
	return (
		<div className="relative">
			<div className="flex items-center gap-1 text-gray-400  py-1.5 px-2 rounded-md w-36 hover:bg-gray-600/50">
				<Folder size={12} />
				<span className="text-xs font-normal overflow-hidden whitespace-nowrap text-ellipsis flex-1">
					Selecione uma pasta
				</span>
			</div>
			{dropdown && (
				<div className="absolute left-0 top-full w-[125%] h-fit rounded-md p-2 z-10 bg-gray-700">
					<button className="w-full text-left text-ellipsis overflow-hidden whitespace-nowrap text-xs text-gray-400 hover:bg-gray-600/50 transition duration-100 p-1 rounded-md">
						Receitas de bolo
					</button>
					<button className="w-full text-left text-ellipsis overflow-hidden whitespace-nowrap text-xs text-gray-400 hover:bg-gray-600/50 transition duration-100 p-1 rounded-md">
						Listas de compras do mercado
					</button>
					<button className="w-full text-left text-ellipsis overflow-hidden whitespace-nowrap text-xs text-gray-400 hover:bg-gray-600/50 transition duration-100 p-1 rounded-md">
						Receitas de bolo
					</button>
					<button className="w-full text-left text-ellipsis overflow-hidden whitespace-nowrap text-xs text-gray-400 hover:bg-gray-600/50 transition duration-100 p-1 rounded-md">
						Listas de compras do mercado
					</button>
					<button className="w-full text-left text-ellipsis overflow-hidden whitespace-nowrap text-xs text-gray-400 hover:bg-gray-600/50 transition duration-100 p-1 rounded-md">
						Receitas de bolo
					</button>
				</div>
			)}
		</div>
	);
}
