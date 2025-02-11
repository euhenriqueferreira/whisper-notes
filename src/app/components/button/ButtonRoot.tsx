import React from "react";

interface ButtonRootProps {
  children: React.ReactNode;
  variant?: "fill" | "outline";
}

export default function ButtonRoot({
  children,
  variant = "fill",
}: ButtonRootProps) {
  const childCount = React.Children.count(children);
  const alignment = childCount > 1 ? "justify-between" : "justify-center";

  return (
    <button
      type="submit"
      className={`
      flex items-center justify-between text-center font-bold min-w-16 rounded-md h-10 transition duration-200 ease-in px-3 border-2 w-full
      ${
        variant === "fill" &&
        "bg-yellow-400 border-yellow-400 text-gray-900 hover:bg-yellow-500 hover:border-yellow-500"
      }
      ${
        variant === "outline" &&
        "bg-transparent border-yellow-400 text-yellow-400 hover:border-yellow-500 hover:text-yellow-500"
      }
      `}
    >
      {children}
    </button>
  );
}
