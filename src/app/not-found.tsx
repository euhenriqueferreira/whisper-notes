import { House } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import lightBlur from "../assets/light-blur.png";
import illustrationSvg from "../assets/not-found.svg";
import { ButtonRoot } from "./components/button/ButtonRoot";
import { ButtonText } from "./components/button/ButtonText";

export default function NotFound() {
	return (
		<div className="w-screen h-screen flex flex-col items-center justify-center gap-10 relative">
			<Image
				src={lightBlur}
				alt=""
				className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[50%] h-[50%] object-contain"
			/>
			<Image src={illustrationSvg} alt="" />
			<div className="flex flex-col items-center text-center gap-5 relative">
				<div className="flex flex-col gap-3">
					<p className="text-4xl font-bold tracking-tight text-gray-400">
						Oops! Parece que você se perdeu!
					</p>
					<p className="text-xl font-medium text-gray-400">
						Lamentamos, mas esta página não existe em nosso site!
					</p>
				</div>
				<div className="w-44">
					<ButtonRoot variant="fill" color="primary" size="big">
						<ButtonText>Ir para a Home</ButtonText>
						<House size={16} />
					</ButtonRoot>
				</div>
			</div>
		</div>
	);
}
