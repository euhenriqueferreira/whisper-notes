import { ElementType } from "react";

interface ButtonIconProps {
  icon: ElementType;
  size?: number;
}

export default function ButtonIcon({ icon: Icon }: ButtonIconProps) {
  return <Icon size={16} />;
}
