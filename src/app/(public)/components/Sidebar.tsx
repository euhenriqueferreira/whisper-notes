"use client";
import {
	CaretLeft,
	CaretRight,
	ClockCounterClockwise,
	Folder,
	House,
	ListDashes,
	Note,
	SignOut,
	UserCircleDashed,
} from "@phosphor-icons/react/dist/ssr";
import { motion, useMotionValue } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import logoWhiteSmall from "../../../assets/logo-small.svg";
import logoWhiteBig from "../../../assets/logo-white.svg";
import NavLinkRoot from "./NavLink/NavLinkRoot";
import NavLinkText from "./NavLink/NavLinkText";

export default function Sidebar() {
	const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

	const logoOpacity = useMotionValue(1);

	function handleToggleSidebar() {
		setIsSidebarCollapsed((prev) => !prev);
		logoOpacity.set(0);
		setTimeout(() => {
			logoOpacity.set(1);
		}, 250);
	}

	return (
		<aside className="h-full flex items-center gap-2.5">
			<motion.div
				className="bg-gray-700 rounded-md w-[260px] h-full py-[30px] overflow-hidden shadow-md shadow-black/5"
				initial={false}
				animate={{ width: isSidebarCollapsed ? 50 : 260 }}
				transition={{ duration: 0.25, ease: "easeInOut" }}
			>
				<div className="flex flex-col items-center gap-4">
					<motion.div
						className="w-fit h-fit"
						key={isSidebarCollapsed ? "small-logo" : "big-logo"}
						animate={{ opacity: 1 }}
						style={{ opacity: logoOpacity }}
						transition={{
							duration: 0.25,
							ease: "easeInOut",
							delay: 0.25,
						}}
					>
						<Image
							src={
								isSidebarCollapsed
									? logoWhiteSmall
									: logoWhiteBig
							}
							alt=""
							className="h-8"
						/>
					</motion.div>

					<nav className="w-full flex flex-col gap-2.5">
						<motion.div
							className={`w-full flex flex-col gap-2.5 ${
								isSidebarCollapsed ? "px-3" : "px-5"
							}`}
							initial={{
								padding: isSidebarCollapsed
									? "0 0.5rem"
									: "0 1.25rem",
							}}
							animate={{
								padding: isSidebarCollapsed
									? "0 0.5rem"
									: "0 1.25rem",
							}}
							transition={{ duration: 0.25, ease: "easeInOut" }}
						>
							<NavLinkRoot active={true}>
								<House size={16} className="min-w-6" />
								<NavLinkText active={true}>Home</NavLinkText>
								<CaretRight size={14} />
							</NavLinkRoot>

							<NavLinkRoot>
								<Note size={16} className="min-w-6" />
								<NavLinkText>Criar nota</NavLinkText>
								<CaretRight size={14} />
							</NavLinkRoot>

							<NavLinkRoot>
								<Folder size={16} className="min-w-6" />
								<NavLinkText>Criar pasta</NavLinkText>
								<CaretRight size={14} />
							</NavLinkRoot>

							<NavLinkRoot>
								<ListDashes size={16} className="min-w-6" />
								<NavLinkText>Lista de notas</NavLinkText>
								<CaretRight size={14} />
							</NavLinkRoot>

							<NavLinkRoot>
								<ClockCounterClockwise
									size={16}
									className="min-w-6"
								/>
								<NavLinkText>
									Histórico de alterações
								</NavLinkText>
								<CaretRight size={14} />
							</NavLinkRoot>
						</motion.div>
						<div className="w-full h-[1px] bg-gray-600"></div>
						<motion.div
							className={`w-full flex flex-col gap-2.5 ${
								isSidebarCollapsed ? "px-3" : "px-5"
							}`}
							initial={{
								padding: isSidebarCollapsed
									? "0 0.5rem"
									: "0 1.25rem",
							}}
							animate={{
								padding: isSidebarCollapsed
									? "0 0.5rem"
									: "0 1.25rem",
							}}
							transition={{ duration: 0.25, ease: "easeInOut" }}
						>
							<NavLinkRoot>
								<UserCircleDashed
									size={16}
									className="min-w-6"
								/>
								<NavLinkText>Editar perfil</NavLinkText>
								<CaretRight size={14} />
							</NavLinkRoot>

							<NavLinkRoot>
								<SignOut size={16} className="min-w-6" />
								<NavLinkText>Fazer logout</NavLinkText>
								<CaretRight size={14} />
							</NavLinkRoot>
						</motion.div>
					</nav>
				</div>
			</motion.div>

			<button
				onClick={handleToggleSidebar}
				className="text-gray-400 flex items-center justify-center bg-gray-700 rounded-full w-8 h-8 hover:bg-gray-600 transition duration-200"
			>
				{isSidebarCollapsed ? (
					<CaretRight size={20} />
				) : (
					<CaretLeft size={20} />
				)}
			</button>
		</aside>
	);
}
