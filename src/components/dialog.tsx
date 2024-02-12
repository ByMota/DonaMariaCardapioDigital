import { WhatsAppOutlined } from '@ant-design/icons';
import * as dialog from '@radix-ui/react-dialog';
import { ArrowRightCircle, X } from 'lucide-react';
import { cardapioData } from '../cardapioData';

interface DialogProps {
  titulo: string
}

export function Dialog ({titulo}: DialogProps) {
  return ( 
    <dialog.Root>
      <dialog.Trigger className="rounded-md  w-full shadow hover:shadow-inner p-5  mb-5 bg-white">
        <div className='flex justify-between'>
          <h1 className='text-lg font-medium leading-6'>{titulo}</h1>
          <ArrowRightCircle />
        </div>
        
      </dialog.Trigger>
      <dialog.Portal>
        <dialog.Overlay className='inset-0 fixed bg-black/60 z-20'/>
        <dialog.Content className='overflow-auto fixed inset-0 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2  md:-translate-y-1/2 md:max-w-[640px] md:h-[60vh] lg:h-[70vh] w-full bg-white md:rounded-md flex flex-col outline-none z-20 p-5'>
        <dialog.DialogClose className='absolute right-0 top-0 p-1.5  text-slate-500 hover:text-red-500'>
            <X className='size-5'/>
          </dialog.DialogClose>
          <div className='mb-5'>
            <h1 className='font-medium text-xl'>{titulo}</h1>
            <p>Confira nosso cardápio</p>
            <h2 className='font-medium'>Entrada:</h2>
            <ul className='list-disc list-inside'>
              {cardapioData.prato.entrada.map((item, index) => (
                <li key={index}>{item.item}</li>
              ))}
            </ul>
            <h2 className='font-medium'>Prato Principal:</h2>
            <ul className='list-disc list-inside'>
              {cardapioData.prato.principal?.map((item, index) => (
                  <li key={index}>{item.item}</li>
                ))}
            </ul>
            <h2 className='font-medium'>Acompanhamentos:</h2>
            <ul className='list-disc list-inside'>
              {cardapioData.prato.acompanhamentos?.map((item, index) => (
                  <li key={index}>{item.item}</li>
                ))}
            </ul>
            <h2 className='font-medium'>Sobremesa:</h2>
            <ul className='list-disc list-inside'>
              {cardapioData.prato.sobremesa?.map((item, index) => (
                  <li key={index}>{item.item}</li>
                ))}
            </ul>
          </div>
          <a 
          href={`https://wa.me/5511999628634/?text=Ol%C3%A1,%20estou%20interessado%20em:%20*${titulo}*`}
          className='bg-lime-500 py-2 rounded-md w-full block text-center font-medium text-white hover:bg-lime-600 transition-colors'
          >
          <span className='flex items-center justify-center gap-2'>
            <WhatsAppOutlined/>
            Fale conosco!
          </span>
          </a>
        </dialog.Content>
      </dialog.Portal>
    </dialog.Root>
  );
}
