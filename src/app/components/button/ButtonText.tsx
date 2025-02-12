interface ButtonTextProps {
	text: string;
}

export default function ButtonText({ text }: ButtonTextProps) {
	return (
		<span className="block flex-1 overflow-hidden text-left whitespace-nowrap text-ellipsis leading-tight">
			{text}
		</span>
	);
}
