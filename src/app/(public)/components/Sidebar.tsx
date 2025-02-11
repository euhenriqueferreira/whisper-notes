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
  const [toggleSidebar, setToggleSidebar] = useState(true);

  function handleToggleSidebar() {
    setToggleSidebar(false);
    setIsSidebarCollapsed((prev) => !prev);
    setTimeout(() => {
      setToggleSidebar(true);
    }, 300);
  }

  return (
    <aside className="h-full flex items-center gap-2.5">
      <motion.div
        initial={{ width: isSidebarCollapsed ? 50 : 260 }}
        animate={{ width: isSidebarCollapsed ? 50 : 260 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="bg-gray-700 rounded-md w-[260px] h-full py-[30px]"
      >
        <motion.div
          key={isSidebarCollapsed ? "small-logo" : "big-logo"}
          initial={{ opacity: 0 }}
          animate={{ opacity: toggleSidebar ? 1 : 0 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="flex flex-col items-center gap-6"
        >
          <Image
            src={isSidebarCollapsed ? logoWhiteSmall : logoWhiteBig}
            alt=""
          />

          <nav className="w-full flex flex-col gap-2.5">
            <div
              className={`w-full flex flex-col gap-2.5 ${
                isSidebarCollapsed ? "px-3" : "px-5"
              }`}
            >
              <NavLinkRoot>
                <House size={16} />
                {!isSidebarCollapsed && <NavLinkText>Home</NavLinkText>}
                {!isSidebarCollapsed && <CaretRight size={14} />}
              </NavLinkRoot>

              <NavLinkRoot>
                <Note size={16} />
                {!isSidebarCollapsed && <NavLinkText>Criar nota</NavLinkText>}
                {!isSidebarCollapsed && <CaretRight size={14} />}
              </NavLinkRoot>

              <NavLinkRoot>
                <Folder size={16} />
                {!isSidebarCollapsed && <NavLinkText>Criar pasta</NavLinkText>}
                {!isSidebarCollapsed && <CaretRight size={14} />}
              </NavLinkRoot>

              <NavLinkRoot>
                <ListDashes size={16} />
                {!isSidebarCollapsed && (
                  <NavLinkText>Lista de notas</NavLinkText>
                )}
                {!isSidebarCollapsed && <CaretRight size={14} />}
              </NavLinkRoot>

              <NavLinkRoot>
                <ClockCounterClockwise size={16} />
                {!isSidebarCollapsed && (
                  <NavLinkText>Histórico de alterações</NavLinkText>
                )}
                {!isSidebarCollapsed && <CaretRight size={14} />}
              </NavLinkRoot>
            </div>
            <div className="w-full h-[1px] bg-gray-600"></div>
            <div
              className={`w-full flex flex-col gap-2.5 ${
                isSidebarCollapsed ? "px-3" : "px-5"
              }`}
            >
              <NavLinkRoot>
                <UserCircleDashed size={16} />
                {!isSidebarCollapsed && (
                  <NavLinkText>Editar perfil</NavLinkText>
                )}
                {!isSidebarCollapsed && <CaretRight size={14} />}
              </NavLinkRoot>

              <NavLinkRoot>
                <SignOut size={16} />
                {!isSidebarCollapsed && <NavLinkText>Fazer logout</NavLinkText>}
                {!isSidebarCollapsed && <CaretRight size={14} />}
              </NavLinkRoot>
            </div>
          </nav>
        </motion.div>
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
