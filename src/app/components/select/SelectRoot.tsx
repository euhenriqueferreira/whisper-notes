interface SelectRootProps {
	children: React.ReactNode;
}

export function SelectRoot({ children }: SelectRootProps) {
	return <div className="relative">{children}</div>;
}
