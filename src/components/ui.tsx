import { ReactNode, useEffect, useRef, useState } from 'react'
import { animate, motion, useInView } from 'motion/react'
import { business } from '../config/business'
export const maxHref = business.maxUrl || business.telegramUrl || '#final'
export function Cta({children,variant='sun',href=maxHref}:{children:ReactNode;variant?:'sun'|'ink'|'line';href?:string}){
  const v={sun:'bg-sun text-ink shadow-[0_8px_30px_-8px_rgba(255,210,63,.7)] hover:bg-white',ink:'bg-ink text-white hover:bg-aqua hover:text-ink',line:'border-2 border-current hover:bg-white/10'}[variant]
  const ext=href.startsWith('http')
  return <motion.a href={href} whileHover={{y:-2}} whileTap={{scale:.97}} {...(ext?{target:'_blank',rel:'noopener noreferrer'}:{})} className={`inline-flex items-center justify-center rounded-full px-7 py-4 font-bold transition-colors ${v}`}>{children}</motion.a>
}
export function Reveal({children,className='',delay=0}:{children:ReactNode;className?:string;delay?:number}){
  return <motion.div className={className} initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:'-60px'}} transition={{duration:.6,delay,ease:'easeOut'}}>{children}</motion.div>
}
// Картинка с запасным вариантом: если файла нет — показывается заглушка, а не «битая» иконка
export function Img({src,label,className=''}:{src?:string;label:string;className?:string}){
  const [bad,setBad]=useState(false)
  return src&&!bad?<img src={src} alt={label} loading="lazy" decoding="async" onError={()=>setBad(true)} className={`object-cover ${className}`}/>
  :<div role="img" aria-label={label} className={`grid place-items-center bg-mist p-4 text-center text-sm text-ink/60 ${className}`}><span>Фото: {label}</span></div>
}
export function CountUp({to,suffix='',className=''}:{to:number;suffix?:string;className?:string}){
  const ref=useRef<HTMLSpanElement>(null),inView=useInView(ref,{once:true}),[v,setV]=useState(0)
  useEffect(()=>{if(!inView)return;const c=animate(0,to,{duration:1.4,ease:'easeOut',onUpdate:x=>setV(Math.round(x))});return()=>c.stop()},[inView,to])
  return <span ref={ref} className={className}>{v.toLocaleString('ru-RU')}{suffix}</span>
}
export const H2=({children,light}:{children:ReactNode;light?:boolean}) =><h2 className={`max-w-3xl font-display text-3xl leading-tight md:text-5xl ${light?'':''}`}>{children}</h2>
export const Section=({id,dark,children}:{id?:string;dark?:boolean;children:ReactNode})=>
  <section id={id} className={`${dark?'bg-ink text-paper':''} py-20 md:py-28`}><div className="mx-auto max-w-6xl px-5">{children}</div></section>
