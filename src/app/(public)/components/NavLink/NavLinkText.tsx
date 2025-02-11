interface NavLinkTextProps {
  children: React.ReactNode;
}

export default function NavLinkText({ children }: NavLinkTextProps) {
  return (
    <span className="flex-1 text-sm font-normal text-gray-400">{children}</span>
  );
}
