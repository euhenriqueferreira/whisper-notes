interface TableDataProps extends React.HTMLAttributes<HTMLSpanElement> {
	children: React.ReactNode;
}

export function TableData({ children, ...props }: TableDataProps) {
	return <span {...props}>{children}</span>;
}

// className="text-sm font-semibold text-gray-400 flex-1 whitespace-nowrap text-ellipsis overflow-hidden"
