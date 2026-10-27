import { tips } from '../data/content'
import { Section, H2, Reveal } from '../components/ui'
export default function Tips(){
  return <Section><H2>Советы мастера: как чистить без ошибок</H2>
  <div className="mt-10 grid gap-x-12 md:grid-cols-2">{tips.map(([t,d],i)=><Reveal key={t} delay={(i%2)*.08}><div className="border-l-4 border-aqua py-3 pl-5 mb-5"><h3 className="font-bold">{t}</h3><p className="mt-1 text-ink/75">{d}</p></div></Reveal>)}</div></Section>
}
