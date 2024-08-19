import { LogoIcon } from "../assets";



export default function Logo() {
  return (
    <a href="/" className="max-w-20 w-full active:scale-[.98] transition-all">
      <img src={LogoIcon} alt="ADJ PRO logotipo" className="max-w-20 w-full object-center" />
      </a>
  )
}
