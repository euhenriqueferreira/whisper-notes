import { LabelHTMLAttributes } from "react";

interface TextInputLabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode;
}

export default function TextInputLabel({
  children,
  htmlFor,
}: TextInputLabelProps) {
  return (
    <label
      htmlFor={htmlFor}
      className="text-md font-semibold text-gray-400 group-focus-within:text-yellow-400"
    >
      {children}
    </label>
  );
}
