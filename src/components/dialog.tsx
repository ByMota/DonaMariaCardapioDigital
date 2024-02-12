import { WhatsAppOutlined } from '@ant-design/icons';
import * as dialog from '@radix-ui/react-dialog';
import { ArrowRightCircle, X } from 'lucide-react';
import { CardapioProps } from '../cardapioData';


export function Dialog ({pratos}: CardapioProps) {
  return ( 
    <dialog.Root>
      <dialog.Trigger className="rounded-md  w-full shadow hover:shadow-inner p-5  mb-5 bg-white">
        <div className='flex justify-between'>
        {pratos.map((item) => (
            <h1 key={item.id} className='text-lg font-medium leading-6'>
              {item.titulo}
            </h1>
          ))}
          <ArrowRightCircle />
        </div>
        
      </dialog.Trigger>
      <dialog.Portal>
        <dialog.Overlay className='inset-0 fixed bg-black/60 z-20'/>
        <dialog.Content className='overflow-auto fixed inset-0 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2  md:-translate-y-1/2 md:max-w-[640px]  w-full bg-white md:rounded-md flex flex-col outline-none z-20 p-5'>
        <dialog.DialogClose className='absolute right-0 top-0 p-1.5  text-slate-500 hover:text-red-500'>
            <X className='size-5'/>
          </dialog.DialogClose>
          <div className='mb-5'>
            {pratos.map((item) => (
              <h1 key={item.id} className='font-medium text-xl'>
                {item.titulo}
              </h1>
            ))}
            <p>Confira nosso cardápio</p>
            <h2 className='font-medium'>Entrada:</h2>
            <ul className='list-disc list-inside'>
              {pratos.map((item) => (
                item.entrada?.map((entradas) => (
                  <li key={item.id}>{entradas.item}</li>
                ))
              ))}
            </ul>
            <h2 className='font-medium'>Prato Principal:</h2>
            <ul className='list-disc list-inside'>
              {pratos.map((item) => (
                item.principal?.map((principal) => (
                  <li key={item.id}>{principal.item}</li>
                ))
              ))}
            </ul>
            <h2 className='font-medium'>Acompanhamentos:</h2>
            <ul className='list-disc list-inside'>
              {pratos.map((item) => (
                item.acompanhamentos?.map((acompanhamentos) => (
                  <li key={item.id}>{acompanhamentos.item}</li>
                ))
              ))}
            </ul>
            <h2 className='font-medium'>Sobremesa:</h2>
            <ul className='list-disc list-inside'>
              {pratos.map((item) => (
                item.sobremesa?.map((sobremesa) => (
                  <li key={item.id}>{sobremesa.item}</li>
                ))
              ))}
            </ul>
          </div>
          {pratos.map((titulo) => (
              <a 
              href={`https://wa.me/5511999628634/?text=Ol%C3%A1,%20estou%20interessado%20em:%20*${titulo.titulo}*`}
              className='bg-lime-500 py-2 rounded-md w-full block text-center font-medium text-white hover:bg-lime-600 transition-colors'
              >
              <span className='flex items-center justify-center gap-2'>
                <WhatsAppOutlined/>
                Fale conosco!
              </span>
              </a>
            ))
          }
        </dialog.Content>
      </dialog.Portal>
    </dialog.Root>
  );
}
