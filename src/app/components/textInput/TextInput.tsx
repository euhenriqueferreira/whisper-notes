import { InputHTMLAttributes } from "react";

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export default function TextInput({
  type = "text",
  id,
  placeholder,
}: TextInputProps) {
  return (
    <input
      type={type}
      id={id}
      placeholder={placeholder}
      className="rounded-md w-full h-10 bg-gray-700 border border-gray-700 px-3 text-gray-400 font-normal text-md placeholder:text-gray-500 focus:outline-none focus:border focus:border-yellow-400"
    />
  );
}
