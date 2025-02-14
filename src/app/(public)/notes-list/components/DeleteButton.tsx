"use client";
import { ButtonRoot } from "@/app/components/button/ButtonRoot";
import { ButtonText } from "@/app/components/button/ButtonText";
import { DialogRoot } from "@/app/components/dialog/DialogRoot";
import { TableData } from "@/app/components/table/TableData";
import { Trash } from "@phosphor-icons/react/dist/ssr";
import { useState } from "react";

export function DeleteButton() {
	const [isDialogOpen, setIsDialogOpen] = useState(false);

	function handleOpenDeleteModal() {
		setIsDialogOpen(true);
	}

	function handleCloseDeleteModal() {
		setIsDialogOpen(false);
	}

	function handleDeleteNote() {
		setIsDialogOpen(false);
	}

	return (
		<>
			<TableData>
				<ButtonRoot
					color="danger"
					size="icon"
					variant="ghost"
					onClick={handleOpenDeleteModal}
				>
					<Trash size={14} color="#FF6467" />
				</ButtonRoot>
			</TableData>
			<DialogRoot
				isModalOpen={isDialogOpen}
				onClose={handleCloseDeleteModal}
				title="Excluir nota"
			>
				<p className="font-semibold text-gray-400 tracking-tight leading-tight">
					Nome da nota
				</p>
				<p className="text-gray-400 font-normal leading-tight">
					Receita de bolo de laranja
				</p>

				<ButtonRoot
					variant="fill"
					color="danger"
					size="big"
					onClick={handleDeleteNote}
				>
					<ButtonText>Excluir nota</ButtonText>
					<Trash size={20} />
				</ButtonRoot>
			</DialogRoot>
		</>
	);
}
