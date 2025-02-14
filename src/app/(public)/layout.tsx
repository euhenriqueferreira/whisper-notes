import Sidebar from "./components/Sidebar";

export default function AuthLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="w-screen h-screen flex items-center justify-center relative">
			<main className="bg-gray-800 border border-gray-700 rounded-md relative w-full max-w-[1180px] h-full max-h-[750px] py-[30px] px-8 flex gap-2.5 shadow-xl shadow-yellow-300/5">
				<Sidebar />

				<div className="flex-1 h-full py-[30px]">{children}</div>

				<p className="absolute bottom-0 -mb-11 left-1/2 -translate-x-1/2 text-sm text-gray-400 font-normal text-center">
					Desenvolvido por Quinho Pereira &copy;
				</p>
			</main>
		</div>
	);
}
