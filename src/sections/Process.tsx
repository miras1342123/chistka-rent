import { steps } from '../data/content'
import { Section, H2, Reveal } from '../components/ui'
export default function Process(){
  return <Section id="process"><H2>Как проходит аренда: 6 простых шагов</H2>
  <ol className="mt-10 grid gap-5 md:grid-cols-3">{steps.map(([t,d],i)=><Reveal key={t} delay={(i%3)*.08}><li className="h-full list-none rounded-[2rem] bg-mist p-6"><span className="grid h-10 w-10 place-items-center rounded-full bg-ink font-display text-sun">{i+1}</span><h3 className="mt-4 font-display text-xl">{t}</h3><p className="mt-2 text-ink/75">{d}</p></li></Reveal>)}</ol></Section>
}
