interface TableBodyProps {
	children: React.ReactNode;
}

export function TableBody({ children }: TableBodyProps) {
	return <div className="w-full">{children}</div>;
}
