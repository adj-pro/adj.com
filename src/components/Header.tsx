import { useState } from "react";
import { facebook } from "../assets";
import Logo from "./Logo";
import { Menu, X } from "lucide-react";


export default function Header() {
  const [showMenu, setShowMenu] = useState(false)
  function onShowMenu() {
    setShowMenu(!showMenu)
  }
  return (
    <header className="max-w-[1613px] mx-auto w-full flex justify-between items-center py-14 px-10">
      <Logo />
      <button onClick={onShowMenu} className="md:hidden active:scale-95 transition-all">
        {showMenu ? <X className="size-8"/> : <Menu className="size-8"/>}
      </button>
      <nav className="hidden md:flex items-center gap-6">
        <a href="/" className="hover:text-orange-400 active:scale-[.98] transition-all scroll-smooth">Página Inicial</a>
        <a href="/" className="hover:text-orange-400 active:scale-[.98] transition-all scroll-smooth">Sobre Nós</a>
        <a href="/" className="hover:text-orange-400 active:scale-[.98] transition-all scroll-smooth">Serviços</a>
        <a href="/" className="hover:text-orange-400 active:scale-[.98] transition-all scroll-smooth">Projetos</a>
        <a href="/" className="hover:text-orange-400 active:scale-[.98] transition-all scroll-smooth">Contacte-nos</a>
      </nav>

      {/* MENU SUSPENSE */}
      {showMenu && (
        <nav className="absolute scale-95 rounded-xl top-0 left-0 max-w-80 w-full bg-orange-600 min-h-screen p-4 flex flex-col pt-20 md:hidden items-center gap-6">
        <a href="/" className="hover:text-orange-200 active:scale-[.98] transition-all scroll-smooth">Página Inicial</a>
        <div className="bg-orange-200 w-full h-px" />
        <a href="/" className="hover:text-orange-200 active:scale-[.98] transition-all scroll-smooth">Sobre Nós</a>
        <div className="bg-orange-200 w-full h-px" />
        <a href="/" className="hover:text-orange-200 active:scale-[.98] transition-all scroll-smooth">Serviços</a>
        <div className="bg-orange-200 w-full h-px" />
        <a href="/" className="hover:text-orange-200 active:scale-[.98] transition-all scroll-smooth">Projetos</a>
        <div className="bg-orange-200 w-full h-px" />
        <a href="/" className="hover:text-orange-200 active:scale-[.98] transition-all scroll-smooth">Contacte-nos</a>
      </nav>
      )}
      <div className="hidden lg:flex items-center gap-6">
        <a href="/" target="_blank" className="hover:text-orange-400 active:scale-[.98] transition-all scroll-smooth">
          <img src={facebook} alt="Facebook icon" />
        </a>
        <a href="/" target="_blank" className="hover:text-orange-400 active:scale-[.98] transition-all scroll-smooth">
          <img src={facebook} alt="Facebook icon" />
        </a>

      </div>
    </header>
  )
}
