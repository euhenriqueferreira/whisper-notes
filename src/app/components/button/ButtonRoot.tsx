import React, { ButtonHTMLAttributes } from "react";

interface ButtonRootProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode;
	variant?: "fill" | "outline" | "ghost";
	color?: "primary" | "secondary" | "danger";
	size?: "small" | "normal" | "big" | "icon";
	rounded?: boolean;
}

export function ButtonRoot({
	children,
	variant = "fill",
	color = "primary",
	size = "normal",
	rounded = true,
	...props
}: ButtonRootProps) {
	const countChildren = React.Children.count(children);

	return (
		<button
			{...props}
			className={`flex items-center transition duration-100 cursor-pointer font-semibold

		${countChildren > 1 ? "gap-2" : "justify-center"}
		${rounded ? "rounded-md" : ""}

        ${size === "icon" && "p-1 w-fit"}
        ${size === "small" && "h-6 text-sm px-1.5 w-full"}
        ${size === "normal" && "h-8 text-sm px-3 w-full"}
        ${size === "big" && "h-10 text-md px-3 w-full"}

        ${
			variant === "fill" &&
			color === "primary" &&
			"text-gray-900 bg-yellow-400 hover:brightness-90"
		}
        ${
			variant === "fill" &&
			color === "secondary" &&
			"text-gray-400 bg-gray-600 hover:brightness-90"
		}
        ${
			variant === "fill" &&
			color === "danger" &&
			"text-gray-400 bg-red-400 hover:brightness-90"
		}
        ${
			variant === "outline" &&
			color === "primary" &&
			"text-yellow-400 bg-transparent border border-yellow-400 hover:brightness-75"
		}
        ${
			variant === "outline" &&
			color === "secondary" &&
			"text-gray-400 bg-transparent border border-gray-400 hover:brightness-75"
		}
        ${
			variant === "outline" &&
			color === "danger" &&
			"text-red-400 bg-transparent border border-red-400 hover:brightness-75"
		}
        ${
			variant === "ghost" &&
			color === "primary" &&
			"text-yellow-400 bg-transparent hover:bg-gray-700 hover:text-gray-400"
		}
        ${
			variant === "ghost" &&
			color === "secondary" &&
			"text-gray-400 bg-transparent hover:bg-gray-600 hover:text-gray-400"
		}
        ${
			variant === "ghost" &&
			color === "danger" &&
			"text-red-400 bg-transparent hover:bg-gray-700 hover:text-gray-400"
		}
    `}
		>
			{children}
		</button>
	);
}
