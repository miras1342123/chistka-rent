import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Plus } from 'lucide-react'
import { faq } from '../data/content'
import { Section, H2 } from '../components/ui'
export default function Faq(){
  const [open,setOpen]=useState<number|null>(null)
  return <Section id="faq" dark><H2>Частые вопросы</H2><div className="mt-10 max-w-3xl">
  {faq.map(([q,a],i)=><div key={q} className="border-t border-paper/20">
    <h3><button className="flex w-full items-center justify-between gap-4 py-5 text-left font-bold" aria-expanded={open===i} aria-controls={`f${i}`} onClick={()=>setOpen(open===i?null:i)}>{q}
      <motion.span animate={{rotate:open===i?45:0}}><Plus aria-hidden/></motion.span></button></h3>
    <AnimatePresence initial={false}>{open===i&&<motion.div id={`f${i}`} initial={{height:0,opacity:0}} animate={{height:'auto',opacity:1}} exit={{height:0,opacity:0}} className="overflow-hidden"><p className="pb-5 text-paper/80">{a}</p></motion.div>}</AnimatePresence></div>)}</div></Section>
}
