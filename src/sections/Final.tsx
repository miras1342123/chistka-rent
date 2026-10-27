import { business } from '../config/business'
import { Cta, Img } from '../components/ui'
export default function Final(){
  return <footer id="final" className="bg-sun pb-32 pt-20 md:py-28"><div className="mx-auto max-w-4xl px-5 text-center">
  <Img src={business.images.ernest} label="Эрнест" className="mx-auto mb-6 h-24 w-24 rounded-full ring-4 ring-ink"/>
  <h2 className="font-display text-3xl md:text-5xl">Напишите сейчас и узнайте стоимость аренды</h2>
  <p className="mx-auto mt-4 max-w-xl text-lg">Расскажите, что за загрязнения и сколько мебели нужно почистить. Я отвечу лично и сразу назову цену.</p>
  <div className="mt-8 flex flex-wrap justify-center gap-3"><Cta variant="ink">Написать Эрнесту</Cta><Cta variant="line" href={business.avitoUrl}>Объявление на Авито</Cta></div>
  <a href={business.phoneHref} className="mt-6 inline-block text-lg font-bold underline underline-offset-4">{business.phone}</a>
  <p className="mt-10 text-sm">© {new Date().getFullYear()} {business.name}, {business.city}</p></div></footer>
}
