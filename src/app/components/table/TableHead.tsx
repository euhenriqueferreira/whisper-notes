interface TableHeadProps {
	children: React.ReactNode;
}

export function TableHead({ children }: TableHeadProps) {
	return (
		<span className="text-sm font-semibold text-gray-400 flex items-center gap-1 cursor-pointer">
			{children}
		</span>
	);
}
