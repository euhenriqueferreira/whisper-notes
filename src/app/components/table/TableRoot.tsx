interface TableRootProps {
	children: React.ReactNode;
}

export function TableRoot({ children }: TableRootProps) {
	return (
		<div className="w-full rounded-md overflow-hidden border border-gray-700 shadow-md shadow-black/5">
			{children}
		</div>
	);
}
