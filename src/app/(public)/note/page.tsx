import ButtonText from "@/app/components/button/ButtonText";
import ButtonYellowFillRoot from "@/app/components/button/variants/ButtonYellowFillRoot";
import {
	FloppyDisk,
	HashStraight,
	TextAa,
} from "@phosphor-icons/react/dist/ssr";

export default function Note() {
	return (
		<div className="flex flex-col gap-8 h-full px-10">
			<h1 className="text-3xl text-gray-400 tracking-tight leading-tight font-semibold text-left">
				Criar nota
			</h1>
			<form className="flex-1 flex flex-col gap-4 relative">
				<div className="h-fit relative group">
					<HashStraight
						size={24}
						className="text-gray-500 absolute -left-8 top-1/2 -translate-y-1/2 group-focus-within:text-yellow-400"
					/>
					<input
						type="text"
						placeholder="Nome da nota..."
						className="w-full h-[45px] flex items-center pr-4 bg-transparent focus:outline-none text-gray-400 placeholder:text-gray-600 text-2xl font-medium tracking-tight leading-tight"
					/>
				</div>
				<div className="flex-1 relative group">
					<TextAa
						size={24}
						className="text-gray-500 absolute -left-8 top-[-2px] group-focus-within:text-yellow-400"
					/>
					<textarea
						placeholder="Escreva seus pensamentos..."
						className="resize-none w-full h-full flex items-center bg-transparent focus:outline-none text-gray-400 placeholder:text-gray-600 text-md font-normal leading-6"
					></textarea>
				</div>

				<div className="w-36 mx-auto absolute left-1/2 -translate-x-1/2 bottom-5 shadow-md shadow-black/5">
					<ButtonYellowFillRoot>
						<ButtonText text="Salvar nota" />
						<FloppyDisk size={20} />
					</ButtonYellowFillRoot>
				</div>
			</form>
		</div>
	);
}
