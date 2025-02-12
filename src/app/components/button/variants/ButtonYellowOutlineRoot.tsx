import React from "react";

interface ButtonYellowOutlineRootProps {
	children: React.ReactNode;
}

export default function ButtonYellowOutlineRoot({
	children,
}: ButtonYellowOutlineRootProps) {
	const childCount = React.Children.count(children);
	const alignment = childCount > 1 ? "justify-between" : "justify-center";

	return (
		<button
			type="submit"
			className="flex items-center justify-between gap-1 text-center font-bold min-w-16 rounded-md h-10 transition duration-200 ease-in px-3 border-2 w-full bg-trasparent border-yellow-400 text-yellow-400 hover:border-yellow-500 hover:text-yellow-500"
		>
			{children}
		</button>
	);
}
