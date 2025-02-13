import React from "react";

interface ButtonTextProps {
	children: React.ReactNode;
	align?: "center" | "left" | "right";
}

export function ButtonText({ children, align = "left" }: ButtonTextProps) {
	return (
		<span
			className={`flex-1 text-${align} overflow-hidden whitespace-nowrap text-ellipsis`}
		>
			{children}
		</span>
	);
}
