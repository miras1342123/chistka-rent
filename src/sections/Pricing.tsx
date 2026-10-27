import { Check } from 'lucide-react'
import { business, rub } from '../config/business'
import { Section, H2, Reveal, Cta } from '../components/ui'
export default function Pricing(){
  const {wash,washDryer,portion}=business.prices
  const cards=[['Моющий пылесос',wash,'за аренду','Karcher Puzzi 8/1. Если время сушки не важно.','bg-mist text-ink'],['Пылесос + фен-сушка',washDryer,'за сутки','Высыхание за 1,5–2 часа вместо суток.','bg-sun text-ink'],['Химия',portion,'за порцию','В среднем 1 порция = 1 изделие.','bg-ink text-paper']]
  return <Section id="prices"><H2>Прозрачные цены без скрытых платежей</H2>
  <div className="mt-10 grid gap-5 md:grid-cols-3">{cards.map(([t,pr,u,d,c],k)=><Reveal key={t as string} delay={k*.1}><div className={`h-full rounded-[2rem] p-7 ${c}`}><p className="font-bold">{t}</p><p className="mt-4 font-display text-5xl">{rub(pr as number)}</p><p className="text-sm opacity-70">{u}</p><p className="mt-4">{d}</p></div></Reveal>)}</div>
  <Reveal className="mt-8"><div className="grid gap-6 rounded-[2rem] border-2 border-ink/10 p-7 md:grid-cols-2"><div><h3 className="font-display text-2xl">Пример расчёта</h3><p className="mt-3">Два дивана и матрас — 3 изделия, значит нужно 3 порции химии.</p><p className="mt-3 font-display text-3xl">{rub(wash)} + 3 × {rub(portion)} = {rub(wash+3*portion)}</p></div>
    <ul className="space-y-3">{['Доставка бесплатно','Обратный забор бесплатно','Три видеоинструкции перед выдачей','Помощь в мессенджере на всех этапах'].map(x=><li key={x} className="flex gap-3"><Check className="shrink-0 text-aqua" aria-hidden/>{x}</li>)}<li className="pt-2"><Cta variant="ink">Узнать точную стоимость</Cta></li></ul></div></Reveal></Section>
}
