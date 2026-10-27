import { useState } from 'react'
import { motion } from 'motion/react'
import { business } from '../config/business'
import { Section, H2 } from '../components/ui'
// Исходная картинка — две половины: «до» слева, «после» справа. Слайдер накладывает их друг на друга.
export default function Results(){
  const [i,setI]=useState(0),[p,setP]=useState(50)
  const r=business.results[i]
  const half=(side:'left'|'right')=>({backgroundImage:`url(${r.src})`,backgroundSize:'200% 100%',backgroundPosition:side==='left'?'0 0':'100% 0'})
  return <Section id="results" dark><div className="grid gap-10 md:grid-cols-[1fr_1.1fr] md:items-center">
    <div><H2>Вот что получается после чистки</H2><p className="mt-5 text-lg text-paper/80">Реальные работы на моей технике. Потяните ползунок, чтобы сравнить «до» и «после».</p>
      <div className="mt-6 flex flex-wrap gap-2" role="tablist" aria-label="Примеры работ">{business.results.map((x,k)=><button key={x.title} role="tab" aria-selected={k===i} onClick={()=>{setI(k);setP(50)}} className={`rounded-full px-4 py-2 text-sm font-bold transition-colors ${k===i?'bg-sun text-ink':'bg-paper/10 hover:bg-paper/20'}`}>{x.title}</button>)}</div></div>
    <motion.div key={i} initial={{opacity:0}} animate={{opacity:1}} className="relative mx-auto w-full max-w-md select-none overflow-hidden rounded-[2rem]" style={{aspectRatio:r.ratio}}>
      <div className="absolute inset-0" style={half('left')} role="img" aria-label={`${r.title}: до`}/>
      <div className="absolute inset-0" style={{...half('right'),clipPath:`inset(0 0 0 ${p}%)`}} role="img" aria-label={`${r.title}: после`}/>
      <div aria-hidden className="pointer-events-none absolute inset-y-0 w-1 -translate-x-1/2 bg-white" style={{left:`${p}%`}}><span className="absolute left-1/2 top-1/2 grid h-11 w-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-sun font-bold text-ink shadow-lg">↔</span></div>
      <input type="range" min={0} max={100} value={p} onChange={e=>setP(+e.target.value)} aria-label="Сравнить до и после" className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"/>
    </motion.div></div></Section>
}
