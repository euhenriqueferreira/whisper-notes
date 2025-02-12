import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

interface NavLinkRootProps {
  children: React.ReactNode;
  collapseItem: boolean
}

export default function NavLinkRoot({ children, collapseItem }: NavLinkRootProps) {

  
  return (
    <motion.div>
      <Link
        href=""
        className="p-1 rounded-md text-sm text-gray-400 font-normal flex items-center gap-2 w-full hover:bg-gray-600 transition duration-200 overflow-hidden"
      >
        {children}
      </Link>
    </motion.div>
  );
}
