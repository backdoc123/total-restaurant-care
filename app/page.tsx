import Hero from '@/components/Hero'
import Services from '@/components/Services'
import WhyTRC from '@/components/WhyTRC'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Professional Pizza Oven & Kitchen Cleaning | Total Restaurant Care',
  description: 'Expert commercial kitchen cleaning services for restaurant chains. Pizza Hut approved. Conveyor oven cleaning, hood cleaning, and maintenance services in MD, DC, VA.',
  keywords: 'restaurant cleaning, pizza oven cleaning, commercial kitchen cleaning, hood cleaning, Maryland, DC, Virginia',
  openGraph: {
    title: 'Professional Pizza Oven & Kitchen Cleaning | Total Restaurant Care',
    description: 'Expert commercial kitchen cleaning services trusted by Pizza Hut, Dominos, Papa Johns.',
    type: 'website',
  },
}

export default function Home() {
  return (
    <main className="bg-white">
      <Hero />
      <Services />
      <WhyTRC />
      <CTA />
      <Footer />
    </main>
  )
}
