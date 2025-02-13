import { InputHTMLAttributes } from "react";

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  font?: "small" | "normal";
}

export function TextInput({
  font = "normal",
  type = "text",
  ...props
}: TextInputProps) {
  return (
    <input
      type={type}
      className={`w-full rounded-md  bg-transparent focus:outline-none text-inherit ${
        font === "normal" ? "text-md" : "text-sm"
      }`}
      {...props}
    />
  );
}
