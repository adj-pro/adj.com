import { MapPin, Phone } from "lucide-react";
import { FaFacebook  } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

export default function Footer() {
  return (
    <footer className="w-full mt-32 bg-slate-800 p-20 flex flex-col lg:flex-row justify-between lg:items-center gap-8">
      <div className="max-w-[890px] mx-auto w-full flex flex-col flex-wrap md:flex-row justify-between lg:items-start gap-8">
        <div className="flex flex-col gap-6">
          <span className="font-bold text-white">Navegação</span>
          <div className="flex flex-col gap-4">
            <a href="/" className="text-slate-400">Página Inicial</a>
            <a href="#about-us" className="text-slate-400">Sobre Nós</a>
            <a href="#services" className="text-slate-400">Serviços</a>
            <a href="#partners" className="text-slate-400">Parceiros</a>
            <a href="#contact-us" className="text-slate-400">Contacte-nos</a>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <span className="font-bold text-white">Nossos Parceiros</span>
          <div className="flex flex-col gap-4">
            <a href="/" className="text-slate-400">Habic F</a>
            <a href="/" className="text-slate-400">CPS</a>
            <a href="/" className="text-slate-400">Território do Conhecimento</a>
            <a href="/" className="text-slate-400">Pastelária Formosa</a>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <span className="font-bold text-white">Outros Links</span>
          <div className="flex flex-col gap-4">
            <a href="/" className="text-slate-400">Sistema de Faturação</a>
            <a href="/" className="text-slate-400">Kubata App</a>
            <a href="/" className="text-slate-400">Um Som</a>
          </div>
        </div>
        <div className="flex gap-8 flex-col">
          <span className="flex items-center gap-4">
            <MapPin className="text-white size-8" />
            Luanda, Angola
          </span>
          <span className="flex items-center gap-4">
            <Phone className="text-white size-8" />
            (+244) {' '}944-304-551
          </span>

          <div className="flex gap-6 items-center">
            <a href="/" target="_blank" className="hover:text-blue-600 active:scale-[.98] transition-all scroll-smooth">
              <FaFacebook size={24} />
            </a>
            <a href="https://wa.me/244935476076" target="_blank" className="hover:text-green-600 active:scale-[.98] transition-all scroll-smooth">
              <IoLogoWhatsapp size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
