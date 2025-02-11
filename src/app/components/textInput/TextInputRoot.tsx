import React from "react";

interface TextInputProps {
  children: React.ReactNode;
  variant?: "fill" | "outline";
}

export default function TextInputRoot({ children }: TextInputProps) {
  return (
    <div className="flex flex-col w-full items-start gap-1 relative group">
      {children}
    </div>
  );
}
