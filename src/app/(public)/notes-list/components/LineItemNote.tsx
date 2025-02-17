"use client";

import { ButtonRoot } from "@/app/components/button/ButtonRoot";
import { TableData } from "@/app/components/table/TableData";
import { TableRow } from "@/app/components/table/TableRow";
import { Star } from "@phosphor-icons/react/dist/ssr";
import { useState } from "react";
import { DeleteButton } from "./DeleteButton";

export function LineItemNote() {
	const [isFavorite, setIsFavorite] = useState(false);

	return (
		<TableRow>
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
					onClick={() => setIsFavorite(!isFavorite)}
				>
					{isFavorite ? (
						<Star size={14} weight="fill" color="#CCB900" />
					) : (
						<Star size={14} color="#DDDDDD" />
					)}
				</ButtonRoot>
			</TableData>
			<DeleteButton />
		</TableRow>
	);
}
