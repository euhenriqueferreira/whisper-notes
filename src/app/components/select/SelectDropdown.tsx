interface SelectDropdownProps {
	children: React.ReactNode;
}

export function SelectDropdown({ children }: SelectDropdownProps) {
	return (
		<div className="bg-gray-800 absolute z-10 top-[105%] border border-gray-400 w-full rounded-md p-1 flex flex-col gap-1 shadow-md shadow-black/5">
			{children}
		</div>
	);
}
