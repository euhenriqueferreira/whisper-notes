import { ButtonRoot } from "../button/ButtonRoot";
import { ButtonText } from "../button/ButtonText";

export function ThemeSelector() {
	return (
		<div className="flex w-64 rounded-md overflow-hidden">
			<ButtonRoot
				color="secondary"
				size="normal"
				variant="fill"
				rounded={false}
			>
				<ButtonText align="center">Claro</ButtonText>
			</ButtonRoot>
			<ButtonRoot
				color="primary"
				size="normal"
				variant="fill"
				rounded={false}
			>
				<ButtonText align="center">Escuro</ButtonText>
			</ButtonRoot>
		</div>
	);
}
