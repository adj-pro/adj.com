import { Cake, Cpu, Goal, TreeDeciduous } from "lucide-react";

export default function Partners() {
  return (
    <section className="mt-28 max-w-[1613px] mx-auto w-full flex justify-center items-center flex-col">
      <h2 className="text-2xl md:text-5xl font-bold text-orange-950">Nossos Parceiros</h2>
      <p className="max-w-[560px] text-lg w-full text-orange-950 text-center mt-4">Nossos parceiros de longas datas.</p>

      <div className="w-full flex justify-center items-center gap-8 mt-14 flex-wrap">
        <div className="active:scale-x-95 flex flex-col justify-center items-center gap-4 max-w-72 w-full">
          <Goal className="text-orange-800 size-36" />
          <span className="text-orange-800 font-semibold">Habic F</span>
        </div>
        <div className="active:scale-x-95 flex flex-col justify-center items-center gap-4 max-w-72 w-full">
          <Cpu className="text-orange-800 size-36" />
          <span className="text-orange-800 font-semibold">CPS</span>
        </div>
        <div className="active:scale-x-95 flex flex-col justify-center items-center gap-4 max-w-72 w-full">
          <TreeDeciduous className="text-orange-800 size-36" />
          <span className="text-orange-800 font-semibold">Território do
          Conhecimento</span>
        </div>
        <div className="active:scale-x-95 flex flex-col justify-center items-center gap-4 max-w-72 w-full">
          <Cake className="text-orange-800 size-36" />
          <span className="text-orange-800 font-semibold">Pastelária Formosa</span>
        </div>
      </div>
    </section>
  )
}
