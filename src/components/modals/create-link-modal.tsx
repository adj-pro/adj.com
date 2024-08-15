
import { Link2, Tag, X } from 'lucide-react';
import { FormEvent } from "react";
import { api } from '../../lib/axios';
import { useParams } from 'react-router-dom';


interface CreateLinkModalProps {
  closeCreateLinkModal: () => void
}

export default function CreateLinkModal({ closeCreateLinkModal, }: CreateLinkModalProps) {

  const { tripId } = useParams()

  async function createLink(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const data = new FormData(event.currentTarget)

    const title = data.get('title')
    const url = data.get('url')

    await api.post(`/trips/${tripId}/links`, {
      title,
      url,
    })

    console.log({
      title,
      url,
    });
    

    // window.document.location.reload()
    closeCreateLinkModal()
  }

  return (
    <div className="fixed inset-0 bg-black/60 flex justify-center items-center">
      <div className="w-[620px] rounded-xl px-5 py-6 shadow-shape bg-zinc-900 space-y-5">
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <h2>Cadastrar link</h2>
              <button 
                type="button" 
                onClick={closeCreateLinkModal}
                className="active:scale-90 transition-all"
                >
                <X className="size-5 text-zinc-400"/>
              </button>
            </div>
            <p className="text-base text-zinc-400 mt-2">
            Todos convidados podem visualizar os links importantes.
            </p>
          </div>

          <form onSubmit={createLink} className="space-y-3">
            <div className="bg-zinc-950 h-14 py-2.5 px-4 rounded-lg flex items-center justify-between gap-2.5">
              <label htmlFor="title">
                <Tag className='size-5 text-zinc-400'/>
              </label>
              <input 
                type="text" 
                id='title'
                name="title" 
                placeholder="Título do link" 
                className="bg-transparent placeholder-zinc-600 text-lg outline-none flex-1 h-14 px-4" 
              />
            </div>

            <div className="bg-zinc-950 h-14 py-2.5 px-4 rounded-lg flex items-center justify-between gap-2.5">
              <label htmlFor="url">
              <Link2 className='size-5 text-zinc-400' />
              </label>
              <input 
                type="url" 
                id='url'
                name="url"
                placeholder="URL" 
                className="bg-transparent placeholder-zinc-600 text-lg outline-none flex-1 h-14 px-4 " 
              />
            </div>

            <button 
              className="bg-lime-300 w-full hover:bg-lime-400 transition-all active:scale-95 h-11 px-5 rounded-xl text-lime-950 font-medium text-base flex justify-center items-center gap-2"
            >
              Salvar link
            </button>
          </form>
      </div>
    </div>
  )
}
