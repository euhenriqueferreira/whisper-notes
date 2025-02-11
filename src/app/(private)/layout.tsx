import Image from "next/image";
import lightBlur from "../../assets/light-blur.png";
import logoSvg from "../../assets/logo.svg";

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
      <main className="flex flex-col gap-10 relative">
        <div className="flex flex-col items-center relative">
          <h1 className="mb-2.5 text-gray-400 tracking-tight text-5xl font-bold">
            Bem vindo ao
          </h1>
          <Image src={logoSvg} alt="" />
        </div>
        {children}
      </main>
    </div>
  );
}
