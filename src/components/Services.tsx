import Button from "./Button";

export default function Services() {
  return (
    <section id="services" className="bg-slate-800 p-20 flex flex-col justify-center items-center">
      <h2 className="text-4xl font-bold text-white">Sistema de Faturação</h2>
      <p className="text-center text-slate-400 mt-2">Facíl, rapído e modernos</p>
      <div className="w-full mt-20 flex gap-10 flex-wrap justify-center items-center">
        <div className="bg-white p-10 rounded-xl max-w-80 flex flex-col items-center justify-center w-full space-y-8">
          <div className="flex flex-col gap-1 justify-center items-center">
            <span className="text-slate-800 text-xl font-bold tracking-normal">Plano Gratuito</span>
            <span className="text-slate-800 text-center">Experimente o nosso 
            Plano Gratuito</span>
          </div>

          <div className="flex gap-2 items-center justify-center">
            <span className="text-6xl font-bold text-slate-900">0</span>
            <div className="flex flex-col">
              <span className="font-bold text-slate-900">Akz</span>
              <span className="text-slate-900">Por 30 dias</span>
            </div>
          </div>

          <div className="flex flex-col gap-6 items-center justify-center">
            <span className="text-slate-900 text-center">Apenas por 30 dias</span>
            <span className="text-slate-900 text-center">Pricing Feature</span>
            <span className="text-slate-900 text-center">Apenas por 30 dias</span>
            <span className="text-slate-900 text-center">Pricing Feature</span>
          </div>

          <Button title="Experimentar" size="medium" buttonType="primary" />
        </div>

        <div className="bg-orange-800 px-10 py-20 flex flex-col items-center justify-center rounded-xl max-w-80 w-full space-y-8">
          <div className="flex flex-col gap-1 justify-center items-center">
            <span className="text-orange-100 text-xl font-bold tracking-normal">Plano Mensal</span>
            <span className="text-orange-200 text-center">Experimente o nosso 
            Plano Mensal</span>
          </div>

          <div className="flex gap-2 items-center justify-center">
            <span className="text-6xl font-bold text-orange-100">10</span>
            <div className="flex flex-col">
              <span className="font-bold text-orange-200">Akz</span>
              <span className="text-orange-200">Por mês</span>
            </div>
          </div>

          <div className="flex flex-col gap-6 items-center justify-center">
            <span className="text-orange-200 text-center">Pricing Feature</span>
            <span className="text-orange-200 text-center">Manutenção</span>
            <span className="text-orange-200 text-center">Atendimento 24/5</span>
            <span className="text-orange-200 text-center">Pricing Feature</span>
            <span className="text-orange-200 text-center">Pricing Feature</span>
          </div>
          <Button title="Experimentar" size="medium" buttonType="secondary" />

        </div>

        <div className="bg-white p-10 rounded-xl max-w-80 flex flex-col items-center justify-center w-full space-y-8">
          <div className="flex flex-col gap-1 justify-center items-center">
            <span className="text-slate-800 text-xl font-bold tracking-normal">Plano Anual</span>
            <span className="text-slate-800 text-center">Experimente o nosso 
            Plano Anual</span>
          </div>

          <div className="flex gap-2 items-center justify-center">
            <span className="text-6xl font-bold text-slate-900">99</span>
            <div className="flex flex-col">
              <span className="font-bold text-slate-900">Akz</span>
              <span className="text-slate-900">Por ano</span>
            </div>
          </div>

          <div className="flex flex-col gap-6 items-center justify-center">
            <span className="text-slate-900 text-center">Apenas por 30 dias</span>
            <span className="text-slate-900 text-center">Pricing Feature</span>
            <span className="text-slate-900 text-center">Apenas por 30 dias</span>
            <span className="text-slate-900 text-center">Pricing Feature</span>
          </div>

          <Button title="Experimentar" size="medium" buttonType="primary" />
        </div>
      </div>
    </section>
  )
}
