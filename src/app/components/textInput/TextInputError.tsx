import React from "react";

interface TextInputErrorProps {
	children: React.ReactNode;
}

export function TextInputError({ children }: TextInputErrorProps) {
	return (
		<span className={`text-xs text-red-400 font-normal text-left`}>
			{children}
		</span>
	);
}
