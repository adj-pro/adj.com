import { Mail, MapPin, MapPinnedIcon, Phone } from "lucide-react";
import Button from "./Button";
import Input from "./Input";
import { facebookOrange } from "../assets";
import { FormEvent } from "react";

export default function ContactUs() {

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const data = new FormData(event.currentTarget)

    let name = data.get('name')
    let email = data.get('email')
    let message = data.get('message')

    if(!name || !email || !message) {
      return alert('Por favor, preencha todos os campos abaixo.')
    }

    console.log({
      name,
      email,
      message
    });

    

    // window.document.location.reload()
  }

  return (
    <section id="contact-us" className="mt-36 max-w-[1040px] mx-auto w-full flex justify-center items-center flex-col px-6">
      <h2 className="text-2xl md:text-5xl font-bold text-orange-950 max-w-[650px] w-full text-center leading-tight">Conduza inovações e colabore
      conosco agora!</h2>
      <p className="max-w-[560px] text-lg w-full text-orange-950 text-center mt-4">Este é o momento de liderar projetos inovadores e se unir a uma equipe extraordinária.</p>

      <div className="w-full flex flex-col lg:flex-row items-center p-6 gap-11 mt-16">
        <div className="bg-white shadow-lg shadow-orange-100 max-w-[450px] p-14 w-full rounded-xl">
          <span className="text-orange-950 font-semibold text-2xl ">Contacte-nos</span>
          <form onSubmit={onSubmit} action="" className="space-y-4 mt-6 w-full">
            <Input type="text" placeholder="Nome completo" name="name" />
            <Input type="email" placeholder="Endereço de Email" name="email" />
            <textarea name="message" cols={30} rows={4} placeholder="Escreva uma mensagem" className="flex-1 bg-orange-100 text-orange-950 placeholder-orange-600 p-4 outline-none rounded-xl  w-full"></textarea>

            <div className="mx-auto w-full max-w-64">
              <Button type="submit" title="Enviar" buttonType="primary" size="medium" />
            </div>
          </form>
        </div>

        <div className="w-full space-y-6">
          <div className="flex justify-between gap-4 flex-wrap w-full">
            <div className="flex flex-col gap-3 justify-center items-center">
              <MapPin className="text-orange-800 size-8"/>
              <span className="text-orange-950 text-sm">Luanda, Angola, Africa</span>
            </div>
            <div className="flex flex-col gap-3 justify-center items-center">
              <Phone className="text-orange-800 size-8"/>
              <span className="text-orange-950 text-sm">(244) 944-304-551</span>
            </div>
            <div className="flex flex-col gap-3 justify-center items-center">
              <Mail className="text-orange-800 size-8"/>
              <span className="text-orange-950 text-sm">adjpro28@gmail.com </span>
            </div>
          </div>

          <div className="lg:max-w-[516px] w-full h-[280px] bg-orange-200 rounded-xl flex justify-center items-center">
            <MapPinnedIcon className="text-orange-800 size-20" />
          </div>

          <div className="flex gap-6 items-center">
            <a href="/" target="_blank">
              <img src={facebookOrange} alt="" className="rounded-md" />
            </a>
            <a href="/" target="_blank">
              <img src={facebookOrange} alt="" className="rounded-md" />
            </a>
            <a href="/" target="_blank">
              <img src={facebookOrange} alt="" className="rounded-md" />
            </a>
          </div>
        </div>
      </div>

    </section>
  )
}
