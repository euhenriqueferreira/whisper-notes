import React from "react";

interface TextInputBoxProps {
	children: React.ReactNode;
	height?: "small" | "normal";
}

export function TextInputBox({
	children,
	height = "normal",
}: TextInputBoxProps) {
	return (
		<div
			className={`bg-gray-700 rounded-md w-full flex items-center gap-3 px-3 text-gray-400 border border-transparent focus-within:border-yellow-400  ${
				height === "normal" ? "h-10" : "h-8"
			}`}
		>
			{children}
		</div>
	);
}
