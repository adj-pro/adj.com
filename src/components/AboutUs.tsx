import { Computer, HeartHandshakeIcon } from "lucide-react";
import { macbook } from "../assets";

export default function AboutUs() {
  return (
    <section className="mt-28 max-w-[1613px] mx-auto w-full flex justify-center items-center flex-col">
      <h2 className="text-2xl md:text-5xl font-bold text-orange-950">Por que nos escolher?</h2>
      <p className="max-w-[560px] text-lg w-full text-orange-950 text-center mt-4">Nossa dedicação à excelência tecnológica e ao sucesso de nossos clientes nos destaca no mercado de TI.</p>

      <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-28 mt-8">
        <div className="max-w-[420px] flex flex-col space-y-4 justify-center items-center">
          <Computer className="text-orange-800 size-16"/>
          <span className="text-orange-800 font-semibold text-lg text-center">Inovação em TI</span>
          <p className="text-orange-950 text-center">Nossa vasta experiência em diversos setores nos permite oferecer soluções personalizadas para atender às suas necessidades exclusivas.</p>
        </div>
        <div className="max-w-[420px] flex flex-col space-y-4 justify-center items-center">
          <HeartHandshakeIcon className="text-orange-800 size-16"/>
          <span className="text-orange-800 font-semibold text-lg text-center">Parceria de Confiança</span>
          <p className="text-orange-950 text-center">Construímos relacionamentos sólidos com nossos clientes, baseados em confiança, transparência e integridade. Estamos comprometidos em ser seu parceiro de confiança.</p>
        </div>
      </div>

      <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-14 mt-56">
        <div className="max-w-[633px] w-full  flex flex-col space-y-4 justify-center items-center">
          <h2 className="text-orange-950 font-semibold text-4xl text-center lg:text-start tracking-wide leading-tight">Descubra a Excelência Tecnológica com a ADJ Pro!</h2>
          <p className="text-orange-950 text-center lg:text-justify px-4 md:px-0">Na ADJ Pro, a excelência é o nosso compromisso. Nossa missão é fornecer soluções tecnológicas personalizadas, projetadas sob medida para atender às necessidades exclusivas do seu negócio.</p>
        </div>
        <div className="max-w-[661px] w-full flex flex-col space-y-4 justify-center items-center px-6">
          <img src={macbook} alt="MacBook Pro" />
        </div>
      </div>
    </section>
  )
}
