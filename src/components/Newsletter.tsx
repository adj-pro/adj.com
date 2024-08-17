import { FormEvent } from "react";
import { newsletter } from "../assets";
import Button from "./Button";

export default function Newsletter() {
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const data = new FormData(event.currentTarget)

    let email = data.get('email')

    if(!email) {
      return alert('Por favor, preencha o campos abaixo.')
    }

    console.log({
      email,
    });

    

    // window.document.location.reload()
  }
  return (
    <div className="max-w-[1613px] mx-auto px-6 w-full flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-14 mt-56">
        <div className="max-w-[680px] w-full flex flex-col space-y-4 justify-center items-center px-6">
        <h2 className="text-orange-950 lg:hidden mb-8 font-semibold text-4xl text-center lg:text-start tracking-wide leading-tight">Nossa Newsletter</h2>
          <img src={newsletter} alt="MacBook Pro" />
        </div>
        <div className="max-w-[433px] w-full  flex flex-col space-y-4 justify-center items-center lg:items-start">
          <h2 className="text-orange-950 hidden lg:flex font-semibold text-4xl text-center lg:text-start tracking-wide leading-tight">Nossa Newsletter</h2>
          <div className="flex flex-col items-center lg:items-start">
          <p className="text-orange-950 text-center lg:text-justify font-bold px-4 md:px-0">Assine a nossa newsletter</p>
          <p className="text-orange-950 text-center lg:text-justify px-4 md:px-0">Para ficar atualizado sobre nossas promoções e muito mais.</p>
          </div>
          <form onSubmit={onSubmit} className="w-full flex justify-between gap-4">
            <input type="email" name="email" required id="" placeholder="Seu Email" className="flex-1 bg-orange-200 text-orange-950 placeholder-orange-600 px-4 outline-none rounded-xl" />
            <Button title="Assinar" buttonType="primary" size="small" />
          </form>
        </div>
      </div>
  )
}
