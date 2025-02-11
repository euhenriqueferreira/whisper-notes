import Link from "next/link";
import React from "react";

interface NavLinkRootProps {
  children: React.ReactNode;
}

export default function NavLinkRoot({ children }: NavLinkRootProps) {
  return (
    <Link
      href=""
      className="p-1 rounded-md text-sm text-gray-400 font-normal flex items-center gap-2 w-full hover:bg-gray-600 transition duration-200"
    >
      {children}
    </Link>
  );
}
