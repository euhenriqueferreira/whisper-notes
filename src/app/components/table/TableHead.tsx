interface TableHeadProps {
	children: React.ReactNode;
}

export function TableHead({ children }: TableHeadProps) {
	return (
		<span className="text-sm font-semibold text-gray-400">{children}</span>
	);
}
