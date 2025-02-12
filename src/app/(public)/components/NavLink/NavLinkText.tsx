interface NavLinkTextProps {
	children: React.ReactNode;
	active?: boolean;
}

export default function NavLinkText({ children, active }: NavLinkTextProps) {
	return (
		<span
			className={`flex-1 text-sm font-normal whitespace-nowrap
        ${active ? "text-gray-900" : "text-gray-400"}`}
		>
			{children}
		</span>
	);
}
