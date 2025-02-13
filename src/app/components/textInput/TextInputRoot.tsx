interface TextInputRootProps {
	children: React.ReactNode;
}

export function TextInputRoot({ children }: TextInputRootProps) {
	return <div className={`flex flex-col gap-1 w-full group`}>{children}</div>;
}
