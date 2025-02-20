import Image from "next/image";
import lightBlur from "../../assets/light-blur.png";

export default function AuthLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="w-screen h-screen flex items-center justify-center relative">
			<Image
				src={lightBlur}
				alt=""
				className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[75%] h-[75%] object-contain"
			/>
			<main className="flex flex-col gap-10 relative">{children}</main>
		</div>
	);
}
