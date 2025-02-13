import { LabelHTMLAttributes } from "react";

interface TextInputLabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode;
}

export function TextInputLabel({ children, ...props }: TextInputLabelProps) {
  return (
    <label
      className={`text-md text-gray-400 font-semibold text-left`}
      {...props}
    >
      {children}
    </label>
  );
}
