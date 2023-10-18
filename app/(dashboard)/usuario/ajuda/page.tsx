import Heading from '@/components/heading';
import {
  FacebookIcon,
  InstagramIcon,
  MailIcon,
  Map,
  PhoneCall,
  YoutubeIcon,
} from 'lucide-react';
import Link from 'next/link';

const HelpPage = () => {
  const helps = [
    {
      title: 'Primeira pergunta?',
      text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, tempora? Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora sequi dignissimos fuga unde odit sint fugiat aspernatur eiusad cum.',
    },
    {
      title: 'Segunda pergunta?',
      text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, tempora? Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora sequi dignissimos fuga unde odit sint fugiat aspernatur eiusad cum.',
    },
    {
      title: 'Terceira pergunta?.',
      text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, tempora? Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora sequi dignissimos fuga unde odit sint fugiat aspernatur eiusad cum.',
    },
    {
      title: 'Quarta pergunta?.',
      text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, tempora? Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora sequi dignissimos fuga unde odit sint fugiat aspernatur eiusad cum.',
    },
  ];

  return (
    <section className='max-w-[80%] mx-auto'>
      <Heading title='Encontre aqui alguma ajuda' />

      {helps.map((help) => (
        <div key={help.title} className='mb-5'>
          <h3 className='font-bold text-textTitle mb-2'>{help.title}</h3>
          <p className='text-textBody'>{help.text}</p>
        </div>
      ))}
      <div className='bg-primary px-5 py-8 rounded flex justify-between mt-10'>
        <div className='flex gap-x-3 items-center'>
          <div className='flex gap-x-2 items-center'>
            <PhoneCall size={20} color='#fff' />
            <h3 className='font-bold text-neutralGray text-[18px]'>
              9xx xxx xxx
            </h3>
          </div>
          <div className='flex gap-x-2 items-center'>
            <MailIcon size={20} color='#fff' />
            <h3 className='font-bold text-neutralGray text-[18px]'>
              geral@bvolunt.com
            </h3>
          </div>
          <div className='flex gap-x-2 items-center'>
            <Map size={20} color='#fff' />
            <h3 className='font-bold text-neutralGray text-[18px]'>
              Luanda, Angola
            </h3>
          </div>
        </div>
        <div className='flex gap-x-3 items-center'>
          <Link href='#'>
            <FacebookIcon size={20} color='#fff' />
          </Link>
          <Link href='#'>
            <InstagramIcon size={20} color='#fff' />
          </Link>
          <Link href='#'>
            <YoutubeIcon size={20} color='#fff' />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HelpPage;
