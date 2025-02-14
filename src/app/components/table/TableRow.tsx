interface TableRowProps {
	children: React.ReactNode;
}

export function TableRow({ children }: TableRowProps) {
	return (
		<div className="w-full h-10 flex items-center justify-between gap-1.5 px-3 border-b border-gray-700 hover:bg-gray-700/50 transition duration-100 cursor-pointer">
			{children}
		</div>
	);
}
