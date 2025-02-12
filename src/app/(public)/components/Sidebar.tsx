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
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import logoWhiteSmall from "../../../assets/logo-small.svg";
import logoWhiteBig from "../../../assets/logo-white.svg";
import NavLinkRoot from "./NavLink/NavLinkRoot";
import NavLinkText from "./NavLink/NavLinkText";

export default function Sidebar() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  function handleToggleSidebar() {
    setIsSidebarCollapsed((prev) => !prev);
  }

  return (
    <aside className="h-full flex items-center gap-2.5">
      <motion.div
        initial={false}
        animate={{ width: isSidebarCollapsed ? 50 : 260 }}
        transition={{ duration: 0.3, ease: "easeInOut"}}
        className="bg-gray-700 rounded-md w-[260px] h-full py-[30px] overflow-hidden"
      >
        <div className="flex flex-col items-center gap-4">
          <motion.div
              key={isSidebarCollapsed ? "small-logo" : "big-logo"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, ease: "easeInOut", delay: 0.3 }}
              className="w-fit h-fit"
          >
            <Image
              src={isSidebarCollapsed ? logoWhiteSmall : logoWhiteBig}
              alt=""
              className="h-8"
            />
          </motion.div>

          <nav className="w-full flex flex-col gap-2.5">
            <motion.div
              animate={{ padding: isSidebarCollapsed ? '0 0.5rem' : '0 1.25rem' }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className={`w-full flex flex-col gap-2.5 ${
                isSidebarCollapsed ? "px-3" : "px-5"
              }`}
            >
              <NavLinkRoot collapseItem={isSidebarCollapsed}>
                  <House size={16} className="min-w-6"/>
                 <NavLinkText>Home</NavLinkText>
                 <CaretRight size={14} />
              </NavLinkRoot>

              <NavLinkRoot collapseItem={isSidebarCollapsed}>
                <Note size={16} className="min-w-6" />
                 <NavLinkText>Criar nota</NavLinkText>
                 <CaretRight size={14} />
              </NavLinkRoot>

              <NavLinkRoot collapseItem={isSidebarCollapsed}>
                <Folder size={16} className="min-w-6" />
                <NavLinkText>Criar pasta</NavLinkText>
                <CaretRight size={14} />
              </NavLinkRoot>

              <NavLinkRoot collapseItem={isSidebarCollapsed}>
                <ListDashes size={16} className="min-w-6" />
                <NavLinkText>Lista de notas</NavLinkText>
                <CaretRight size={14} />
              </NavLinkRoot>

              <NavLinkRoot collapseItem={isSidebarCollapsed}>
                <ClockCounterClockwise size={16} className="min-w-6" />
                <NavLinkText>Histórico de alterações</NavLinkText>
                <CaretRight size={14} />
              </NavLinkRoot>

            </motion.div>
            <div className="w-full h-[1px] bg-gray-600"></div>
            <motion.div
              animate={{ padding: isSidebarCollapsed ? '0 0.5rem' : '0 1.25rem' }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className={`w-full flex flex-col gap-2.5 ${
                isSidebarCollapsed ? "px-3" : "px-5"
              }`}
            >
              <NavLinkRoot collapseItem={isSidebarCollapsed}>
                <UserCircleDashed size={16} className="min-w-6" />
                <NavLinkText>Editar perfil</NavLinkText>
                <CaretRight size={14} />
              </NavLinkRoot>

              <NavLinkRoot collapseItem={isSidebarCollapsed}>
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
