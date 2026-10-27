import { business } from '../config/business'
import { Section, H2, Reveal } from '../components/ui'
export default function Reviews(){
  return <Section id="reviews"><H2>Клиенты о моей аренде</H2><p className="mt-4 text-ink/70">Скриншоты настоящих отзывов. Нажмите, чтобы открыть крупно.</p>
  <div className="mt-8 columns-2 gap-3 md:columns-5">{business.reviews.map((s,i)=><Reveal key={s} className="mb-3 break-inside-avoid"><a href={s} target="_blank" rel="noreferrer" aria-label={`Открыть отзыв ${i+1}`} className="block overflow-hidden rounded-2xl border border-ink/10 bg-white p-1.5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"><img src={s} alt={`Отзыв клиента ${i+1}`} loading="lazy" decoding="async" className="w-full rounded-xl"/></a></Reveal>)}</div></Section>
}
