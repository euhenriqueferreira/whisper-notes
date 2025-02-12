import Link from "next/link";
import React from "react";

interface NavLinkRootProps {
	children: React.ReactNode;
	variant?: "big" | "normal";
	active?: boolean;
}

export default function NavLinkRoot({
	children,
	variant = "normal",
	active,
}: NavLinkRootProps) {
	return (
		<Link
			href=""
			className={`
        ${
			variant === "normal" &&
			"p-1 rounded-md text-sm text-gray-400 font-normal flex items-center gap-2 w-full hover:bg-gray-600 transition duration-100 overflow-hidden"
		}
        ${
			active &&
			"p-1 rounded-md text-sm text-gray-900 bg-yellow-400 font-normal flex items-center gap-2 w-full hover:bg-yellow-500 transition duration-100 overflow-hidden"
		}
        ${
			variant === "big" &&
			"px-3 py-1 rounded-md text-sm text-gray-400 h-9 bg-gray-600 font-normal flex items-center gap-2 w-full hover:brightness-110 transition duration-100 shadow-md shadow-black/5"
		}
      `}
		>
			{children}
		</Link>
	);
}
