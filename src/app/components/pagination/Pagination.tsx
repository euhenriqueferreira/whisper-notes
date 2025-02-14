import {
	CaretDoubleLeft,
	CaretDoubleRight,
	CaretLeft,
	CaretRight,
} from "@phosphor-icons/react/dist/ssr";
import { ButtonRoot } from "../button/ButtonRoot";

interface PaginationProps {}

export function Pagination() {
	return (
		<div className="flex justify-between w-full px-3">
			<div>
				<span className="text-sm font-semibold text-gray-500">
					Página 1 de 12
				</span>
			</div>
			<div className="flex gap-3">
				<ButtonRoot color="secondary" size="icon" variant="outline">
					<CaretDoubleLeft size={16} />
				</ButtonRoot>
				<ButtonRoot color="secondary" size="icon" variant="outline">
					<CaretLeft size={16} />
				</ButtonRoot>
				<ButtonRoot color="secondary" size="icon" variant="outline">
					<CaretRight size={16} />
				</ButtonRoot>
				<ButtonRoot color="secondary" size="icon" variant="outline">
					<CaretDoubleRight size={16} />
				</ButtonRoot>
			</div>
		</div>
	);
}
