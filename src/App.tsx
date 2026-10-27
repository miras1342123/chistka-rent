import { MotionConfig } from 'motion/react'
import Hero from './sections/Hero'; import Mission from './sections/Mission'; import Results from './sections/Results'
import Savings from './sections/Savings'; import Pricing from './sections/Pricing'; import Equipment from './sections/Equipment'
import Process from './sections/Process'; import Videos from './sections/Videos'; import Tips from './sections/Tips'
import Reviews from './sections/Reviews'; import Faq from './sections/Faq'; import Final from './sections/Final'; import StickyCta from './components/StickyCta'
export default function App(){
  return <MotionConfig reducedMotion="user"><Hero/><main><Mission/><Results/><Savings/><Pricing/><Equipment/><Process/><Videos/><Tips/><Reviews/><Faq/></main><Final/><StickyCta/></MotionConfig>
}
