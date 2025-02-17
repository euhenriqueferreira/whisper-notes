"use client";
import { ButtonRoot } from "@/app/components/button/ButtonRoot";
import { ButtonText } from "@/app/components/button/ButtonText";
import { DialogRoot } from "@/app/components/dialog/DialogRoot";
import { TextInput } from "@/app/components/textInput/TextInput";
import { TextInputBox } from "@/app/components/textInput/TextInputBox";
import { TextInputRoot } from "@/app/components/textInput/TextInputRoot";
import { Check, Funnel, MagnifyingGlass } from "@phosphor-icons/react/dist/ssr";
import { useState } from "react";

export function NoteListFilters() {
	const [isDialogOpen, setIsDialogOpen] = useState(false);

	function handleOpenFilterModal() {
		setIsDialogOpen(true);
	}

	function handleCloseFilterModal() {
		setIsDialogOpen(false);
	}

	return (
		<>
			<ButtonRoot
				variant="outline"
				size="normal"
				color="secondary"
				onClick={handleOpenFilterModal}
			>
				<ButtonText>Filtrar</ButtonText>
				<Funnel size={16} className="ml-2" />
			</ButtonRoot>

			<DialogRoot
				isModalOpen={isDialogOpen}
				onClose={handleCloseFilterModal}
				title="Filtrar notas"
			>
				<form className="flex flex-col gap-3">
					<div className="w-full h-[1px] bg-gray-700"></div>
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
					<div className="flex items-center justify-between mt-1.5">
						<p className="text-sm font-semibold text-gray-400">
							Apenas favoritos
						</p>
						<div>
							<input
								type="checkbox"
								id="favorites-checkbox"
								className="peer hidden"
							/>
							<label
								htmlFor="favorites-checkbox"
								className="cursor-pointer block bg-gray-700 text-gray-700 p-1 rounded-md peer-checked:bg-yellow-400 transition duration-100"
							>
								<Check size={12} />
							</label>
						</div>
					</div>
					<div className="w-full h-[1px] bg-gray-700"></div>
					<ButtonRoot variant="fill" color="primary" size="big">
						<ButtonText>Filtrar</ButtonText>
						<Funnel size={20} />
					</ButtonRoot>
				</form>
			</DialogRoot>
		</>
	);
}
