import { business } from '../config/business'
import { Cta } from './ui'
export default function StickyCta(){
  return <div className="fixed inset-x-0 bottom-0 z-40 flex items-center justify-between gap-3 bg-ink/95 px-4 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] md:hidden"><span className="text-sm text-paper">от {business.prices.wash} ₽</span><Cta>Написать Эрнесту</Cta></div>
}
