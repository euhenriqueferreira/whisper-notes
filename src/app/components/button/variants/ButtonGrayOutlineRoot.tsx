import React from "react";

interface ButtonGrayOutlineRootProps {
	children: React.ReactNode;
}

export default function ButtonGrayOutlineRoot({
	children,
}: ButtonGrayOutlineRootProps) {
	const childCount = React.Children.count(children);
	const alignment = childCount > 1 ? "justify-between" : "justify-center";

	return (
		<button
			type="submit"
			className="flex items-center justify-between gap-1 text-center font-semibold min-w-16 rounded-md h-10 transition duration-100 ease-in px-3 border-2 w-full bg-transparent border-gray-400 text-gray-400 shadow-md shadow-black/5 hover:bg-gray-700/50"
		>
			{children}
		</button>
	);
}
