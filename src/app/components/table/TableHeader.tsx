interface TableHeaderProps {
	children: React.ReactNode;
	className?: string;
}

export function TableHeader({ children, className }: TableHeaderProps) {
	return (
		<div className="w-full bg-gray-700">
			<div className={`w-full h-10 px-3 ${className}`}>{children}</div>
		</div>
	);
}
