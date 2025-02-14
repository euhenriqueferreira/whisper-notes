interface TableHeaderProps {
	children: React.ReactNode;
}

export function TableHeader({ children }: TableHeaderProps) {
	return (
		<div className="w-full bg-gray-700">
			<div className="w-full h-10 flex items-center justify-between px-3">
				{children}
			</div>
		</div>
	);
}
