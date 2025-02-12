import { ElementType } from "react";

interface ButtonIconProps {
	icon: ElementType;
	size?: number;
}

export default function ButtonIcon({ icon: Icon, size = 16 }: ButtonIconProps) {
	return <Icon size={size} />;
}
