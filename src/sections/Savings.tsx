import { motion } from 'motion/react'
import { business } from "../config/business"
import { Section, H2, CountUp } from '../components/ui'
export default function Savings(){
  const {example,selfExample}=business.pro, w=Math.round(selfExample/example*100)
  return <Section><H2>Экономия в 6 раз на одной чистке</H2>
  <p className="mt-4 max-w-2xl text-lg text-ink/75">Пример Эрнеста: два дивана и матрас. Вы тратите немного больше сил и времени, но оставляете деньги себе.</p>
  <div className="mt-10 space-y-6">
    <div><div className="mb-2 flex justify-between font-bold"><span>Профессиональная химчистка</span><span>от <CountUp to={example} suffix=" ₽"/></span></div><div className="h-12 rounded-full bg-mist"><motion.div initial={{width:0}} whileInView={{width:'100%'}} viewport={{once:true}} transition={{duration:1.2}} className="h-full rounded-full bg-ink/80"/></div></div>
    <div><div className="mb-2 flex justify-between font-bold"><span>Аренда у Эрнеста: пылесос + 3 порции химии</span><span className="text-aqua"><CountUp to={selfExample} suffix=" ₽"/></span></div><div className="h-12 rounded-full bg-mist"><motion.div initial={{width:0}} whileInView={{width:`${w}%`}} viewport={{once:true}} transition={{duration:1.2,delay:.3}} className="h-full rounded-full bg-aqua"/></div></div></div>
  <p className="mt-6 max-w-2xl text-sm text-ink/60">Это пример, а не цены всех компаний. Самостоятельная чистка требует времени и усилий.</p></Section>
}
