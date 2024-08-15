import { useRouteError, Link } from "react-router-dom"
import { Info } from 'lucide-react'
import Colors from 'tailwindcss/colors'

export  function ErrorPage() {

  const error: unknown = useRouteError()

  return (
    <div id="error-page" className="flex justify-center items-center w-full h-screen bg-hero-pattern bg-no-repeat bg-center">
      <div className="max-w-3xl w-full px-6 text-center space-y-10">

        <div className="flex flex-col items-center gap-3">
            <Info size={82} color={Colors.lime[400]} />
          <h1 className="text-2xl font-bold mt-4">Opss!</h1>
          <p className="text-lg text-zinc-300">Página não encontrada, resultado: <span className="text-lg text-red-300">
            {error.statusText || error.message}
          </span></p>
          
          <Link to={'/'} className="text-zinc-800 mt-4 font-medium active:scale-95 transition-all hover:bg-lime-800 bg-lime-400 p-4 rounded-md flex justify-center items-center w-28">Voltar</Link>
        </div>

       
      </div>
    </div>
  )
}
