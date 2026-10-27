import { business } from '../config/business'
import { equipment } from '../data/content'
import { Section, H2, Img, Reveal } from '../components/ui'
const tone=['bg-aqua text-ink','bg-paper text-ink','bg-sun text-ink']
export default function Equipment(){
  const imgs=business.images as Record<string,string>
  return <Section id="equipment" dark><H2>Профессиональная техника, не бытовая</H2>
  <div className="mt-10 space-y-6">{equipment.map((e,i)=><Reveal key={e.key}><article className={`grid items-center gap-6 rounded-[2rem] p-5 md:grid-cols-2 md:p-8 ${tone[i]}`}>
    <div className={i%2?'md:order-2':''}><p className="font-bold">{e.role}</p><h3 className="mt-2 font-display text-2xl md:text-4xl">{e.title}</h3><p className="mt-4 text-lg">{e.text}</p></div>
    <Img src={imgs[e.key]} label={e.title} className="aspect-[4/3] w-full rounded-2xl"/></article></Reveal>)}</div></Section>
}
