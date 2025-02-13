import React from "react";

interface ButtonGrayOutlineRootProps {
	children: React.ReactNode;
}

export default function ButtonGrayOutlineRoot({
	children,
}: ButtonGrayOutlineRootProps) {
	return (
		<button
			type="submit"
			className="w-fit flex items-center justify-center px-1.5 py-1.5 rounded-md transition duration-100 bg-transparent text-gray-400 hover:bg-gray-600/50"
		>
			{children}
		</button>
	);
}
