import * as Tab from '@radix-ui/react-tabs';
import { FacebookOutlined, InstagramOutlined,WhatsAppOutlined } from '@ant-design/icons';
import {Smartphone, CookingPot, Star} from 'lucide-react'
import { Dialog } from './dialog';
import { cardapioData } from '../cardapioData';
import GoogleReviews from './googleReviews';
export function Tabs() {
  return ( 
      <Tab.Root
        className="flex flex-col min-w-96 max-w-3xl md:w-full shadow-[0_2px_10px]"
        defaultValue="tab1"
      >
        <Tab.List className="shrink-0 flex border-b border-mauve6" aria-label="Manage your account">
          <Tab.Trigger
            className="bg-white px-5 h-[45px] flex-1 flex items-center justify-center gap-1 leading-none select-none first:rounded-tl-md last:rounded-tr-md data-[state=active]:text-red-500 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative  outline-none cursor-default"
            value="tab1"
          >
            <CookingPot />
            Cardápio
          </Tab.Trigger>
          <Tab.Trigger
            className="bg-white px-5 h-[45px] flex-1 flex items-center justify-center gap-1 leading-none select-none first:rounded-tl-md last:rounded-tr-md data-[state=active]:text-red-500 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative  outline-none cursor-default"
            value="tab2"
          >
            <Smartphone />
            Contatos
          </Tab.Trigger>
          <Tab.Trigger
            className="bg-white px-5 h-[45px] flex-1 flex items-center justify-center gap-1 leading-none select-none first:rounded-tl-md last:rounded-tr-md data-[state=active]:text-red-500 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative  outline-none cursor-default"
            value="tab3"
          >
            <Star />
            Avaliações
          </Tab.Trigger>
        </Tab.List>
        <Tab.Content
          className="grow p-5 bg-gray-50 rounded-b-md outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
          value="tab1"
        >
          {cardapioData.pratos.map((prato) => (
            <Dialog key={prato.id} pratos={[prato]} />
          ))}
          {/* <Dialog titulo='Churrasco'/>
          <Dialog titulo='Arroz'/>
          <Dialog titulo='Frango'/> */}
        </Tab.Content>
        <Tab.Content
          className="grow p-5 bg-gray-50 rounded-b-md outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
          value="tab2"
        >
          <div className='space-y-3'>
            <a href="https://wa.me/5511999628634" 
              className='flex items-center gap-4 p-2 rounded-md shadow group bg-white'>
              <WhatsAppOutlined className='' />
              <span className='font-medium group-hover:underline'>Whatsapp</span>
            </a>
            <a href="https://www.instagram.com/d.maria_cozinha_artesanal?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              className='flex items-center gap-4 p-2 rounded-md shadow group bg-white'>
              <InstagramOutlined />
              <span className='font-medium group-hover:underline'>Instagram</span>
            </a>
            <a href="https://www.facebook.com/D.MariaPersonalChef/"
              className='flex items-center gap-4 p-2 rounded-md shadow group bg-white'>
              <FacebookOutlined />
              <span className='font-medium group-hover:underline'>Facebook</span>
            </a>
          </div>
        </Tab.Content>
        <Tab.Content
          className="grow p-5 bg-gray-50 rounded-b-md outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
          value="tab3"
        >
          <div className='flex justify-center'>
            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d139659.12286090016!2d-46.7633780908815!3d-23.525087843845213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8bf9b5f8d0d14d5d%3A0x7bbb40745797029d!2sDona%20Maria%20Cozinha%20Artesanal%20-%20Personal%20Chef!5e0!3m2!1spt-BR!2sbr!4v1707594053171!5m2!1spt-BR!2sbr"  height="300" loading="lazy"/> */}
            <GoogleReviews/>
          </div>
        </Tab.Content>
      </Tab.Root>
  );
}
