import Image from "next/image";
import lightBlur from "../../assets/light-blur.png";
import Sidebar from "./components/Sidebar";

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
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] object-cover"
      />
      <main className="bg-gray-800 border border-gray-700 rounded-md relative w-full max-w-[1180px] h-full max-h-[750px] py-[30px] px-8 flex">
        <Sidebar />

        {children}
      </main>
    </div>
  );
}
