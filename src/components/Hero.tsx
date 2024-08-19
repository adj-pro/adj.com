import Button from "./Button"
import Header from "./Header"

export default function Hero() {
  return (
    <div className="bg-hero-pattern bg-center min-h-screen bg-no-repeat bg-cover">
      <div className="absolute z-10 left-0 top-0 min-h-screen bottom-0 right-0 bg-orange-950/20"></div>
      <Header />
      <div className="relative z-40 mt-48 max-w-[1613px] mx-auto w-full flex justify-center items-center space-y-4 md:space-y-8 flex-col">
        <h1 className="font-bold text-white text-4xl md:text-7xl max-w-[840px] leading-tight w-full text-center tracking-wide">Faça parte da nossa jornada extraordinária.</h1>
        <p className="text-center text-base px-4 md:text-2xl max-w-[858px] w-full">Tecnologia e excelência trabalhando em perfeita sintonia, dedicadas a impulsionar o seu sucesso no dinâmico mundo digital</p>
        <div className=""/>
        <div className=""/>
        <Button title="Saiba Mais" size="medium" buttonType="primary" />
      </div>
    </div>
  )
}
