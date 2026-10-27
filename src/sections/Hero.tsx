import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Menu, X, BadgeCheck } from 'lucide-react'
import { business } from '../config/business'
import { Cta, Img, maxHref } from '../components/ui'
const links=[['#results','Результаты'],['#prices','Цены'],['#equipment','Техника'],['#process','Как проходит'],['#reviews','Отзывы'],['#faq','Вопросы']]
export default function Hero(){
  const [open,setOpen]=useState(false)
  useEffect(()=>{const k=(e:KeyboardEvent)=>e.key==='Escape'&&setOpen(false);window.addEventListener('keydown',k);return()=>window.removeEventListener('keydown',k)},[])
  return <header className="relative overflow-hidden bg-ink text-paper">
    <div aria-hidden className="pointer-events-none absolute -right-40 -top-40 h-[34rem] w-[34rem] rounded-full bg-aqua/25 blur-3xl"/>
    <div aria-hidden className="pointer-events-none absolute -bottom-48 -left-32 h-[28rem] w-[28rem] rounded-full bg-sun/10 blur-3xl"/>
    <nav aria-label="Основная" className="relative z-20 mx-auto flex max-w-6xl items-center justify-between px-5 py-5">
      <a href="#" className="font-display text-lg">{business.name}</a>
      <div className="hidden items-center gap-6 text-sm md:flex">{links.map(([h,t])=><a key={h} href={h} className="hover:text-aqua">{t}</a>)}<a href={maxHref} target="_blank" rel="noopener noreferrer" className="rounded-full bg-sun px-4 py-2 font-bold text-ink">Написать Эрнесту</a></div>
      <button className="md:hidden" aria-label={open?'Закрыть меню':'Открыть меню'} aria-expanded={open} aria-controls="mm" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button>
    </nav>
    <AnimatePresence>{open&&<motion.div id="mm" initial={{opacity:0,y:-12}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-12}} className="absolute inset-x-0 top-16 z-20 bg-ink px-5 pb-6 md:hidden">
      {links.map(([h,t])=><a key={h} href={h} onClick={()=>setOpen(false)} className="block border-t border-paper/15 py-4 text-lg">{t}</a>)}</motion.div>}</AnimatePresence>
    <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 pb-16 pt-6 md:grid-cols-[1.15fr_1fr] md:pb-24 md:pt-10">
      <div className="order-2 md:order-1">
        <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.1}} className="mb-4 flex items-center gap-2 text-aqua"><BadgeCheck size={20} aria-hidden/>Действующий мастер по химчистке · {business.city}</motion.p>
        <motion.h1 initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:.7,delay:.15}} className="font-display text-4xl leading-[1.08] md:text-6xl">Химчистка мебели своими руками</motion.h1>
        <motion.p initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:.7,delay:.3}} className="mt-5 max-w-lg text-lg text-paper/85">Я Эрнест. Сдаю в аренду свои профессиональные пылесосы, подсказываю, сколько нужно химии, и записываю видео, как с ними работать. Результат — как у мастера, цена — в разы ниже.</motion.p>
        <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:.7,delay:.45}}>
          <p className="mt-6 font-display text-5xl text-sun">от {business.prices.wash} ₽</p>
          <div className="mt-6 flex flex-wrap gap-3"><Cta>Узнать стоимость сейчас</Cta><Cta variant="line" href="#results">Смотреть результаты</Cta></div>
        </motion.div>
      </div>
      <motion.figure initial={{opacity:0,scale:.95}} animate={{opacity:1,scale:1}} transition={{duration:.9}} className="relative order-1 mx-auto w-full max-w-sm md:order-2 md:max-w-none">
        <Img src={business.images.ernest} label="Эрнест" className="aspect-[4/5] w-full rounded-[2rem] ring-4 ring-paper/10"/>
        <figcaption className="absolute -bottom-5 left-4 right-4 rounded-2xl bg-paper p-4 text-ink shadow-xl"><b className="font-display">Эрнест</b><span className="block text-sm text-ink/70">Это моя техника, и отвечаю за неё лично</span></figcaption>
      </motion.figure>
    </div>
  </header>
}
