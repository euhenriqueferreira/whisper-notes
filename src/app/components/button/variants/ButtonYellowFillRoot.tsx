import React from "react";

interface ButtonYellowFillRootProps {
	children: React.ReactNode;
}

export default function ButtonYellowFillRoot({
	children,
}: ButtonYellowFillRootProps) {
	const childCount = React.Children.count(children);
	const alignment = childCount > 1 ? "justify-between" : "justify-center";

	return (
		<button
			type="submit"
			className="flex items-center justify-between gap-1 text-center font-bold min-w-16 rounded-md h-10 transition duration-200 ease-in px-3 border-2 w-full bg-yellow-400 border-yellow-400 text-gray-900 hover:bg-yellow-500 hover:border-yellow-500"
		>
			{children}
		</button>
	);
}
