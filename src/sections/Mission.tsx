import { business } from '../config/business'
import { targets } from '../data/content'
import { Section, H2, Reveal, Img } from '../components/ui'
export default function Mission(){
  return <Section id="about"><div className="grid items-center gap-10 md:grid-cols-2">
    <Reveal><Img src={business.images.hero} label="Моя техника: Puzzi, WD3, фен и химия" className="aspect-[3/2] w-full rounded-[2rem]"/></Reveal>
    <Reveal delay={.1}><H2>Дать людям жить в чистоте</H2>
      <div className="mt-6 space-y-4 text-lg"><p>Не каждый может позволить себе оборудование для химчистки: техника дорогая. И не каждый может заказать химчистку: она тоже стоит недёшево.</p>
      <p>Мой сервис — возможность воспользоваться качественной техникой за приемлемые деньги. Я сам действующий мастер, поэтому помогу подобрать оборудование, рассчитать химию и объясню, как работать.</p></div>
      <ul className="mt-6 flex flex-wrap gap-2">{targets.map(t=><li key={t} className="rounded-full bg-mist px-4 py-2 text-sm font-bold">{t}</li>)}</ul>
      <p className="mt-6 font-bold">— {business.owner}</p></Reveal></div></Section>
}
