import { X } from "@phosphor-icons/react/dist/ssr";
import React, { FormEvent, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { ButtonRoot } from "../button/ButtonRoot";

interface DialogRootProps {
	children: React.ReactNode;
	title: string;
	isModalOpen: boolean;
	onClose: () => void;
}

export function DialogRoot({
	children,
	isModalOpen,
	onClose,
	title,
}: DialogRootProps) {
	const [isComponentLoaded, setIsComponentLoaded] = useState(false);

	useEffect(() => {
		setIsComponentLoaded(true);
	}, []);

	if (!isComponentLoaded || !isModalOpen) return null;

	const portalRootElement = document.querySelector("main");

	if (!portalRootElement) return null;

	function handleBackgroundClick(event: FormEvent) {
		const target = event.target as HTMLElement;
		if (target.classList.contains("background-dialog")) {
			onClose();
			return;
		}

		return false;
	}

	return ReactDOM.createPortal(
		<div
			className="background-dialog w-screen h-screen bg-gray-700/60 fixed left-0 top-0 flex items-center justify-center"
			onClick={handleBackgroundClick}
		>
			<div className="w-96 bg-gray-800 rounded-md flex flex-col gap-3 p-5">
				<header className="w-full flex items-center justify-between">
					<p className="text-xl text-gray-400 font-semibold tracking-tight leading-tight">
						{title}
					</p>
					<ButtonRoot
						variant="ghost"
						color="secondary"
						size="icon"
						onClick={onClose}
					>
						<X size={16} />
					</ButtonRoot>
				</header>
				{children}
			</div>
		</div>,
		portalRootElement
	);
}
