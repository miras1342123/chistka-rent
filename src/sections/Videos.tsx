import { useState } from 'react'
import { business } from '../config/business'
import { videoCards } from '../data/content'
import { Section, H2 } from '../components/ui'
export default function Videos(){
  const [missing,setMissing]=useState<number[]>([])
  return <Section id="videos" dark><div className="flex flex-wrap items-end justify-between gap-4"><div><p className="mb-3 text-sm font-bold uppercase tracking-wider text-aqua">Коротко и по делу</p><H2>Видеоинструкции</H2></div><p className="max-w-sm text-sm text-paper/65">Эти три видео я присылаю каждому клиенту перед выдачей техники.</p></div>
  <div className="mt-8 grid gap-5 md:grid-cols-3">{videoCards.map((t,i)=><figure key={t}>
    {!missing.includes(i)?<video controls playsInline preload="metadata" src={business.videos[i]} onError={()=>setMissing(prev=>prev.includes(i)?prev:[...prev,i])} className="aspect-video w-full rounded-2xl bg-white/10"/>
    :<div className="grid aspect-video place-items-center rounded-2xl border border-dashed border-paper/25 p-4 text-center text-sm text-paper/70"><div><p className="font-bold">Видео будет здесь</p><p className="mt-2 text-xs">Файл: {['instruction-1.mp4','instruction-2.mp4','instruction-3.mp4'][i]}</p></div></div>}
    <figcaption className="mt-3 text-sm font-bold">{t}</figcaption></figure>)}</div></Section>
}
