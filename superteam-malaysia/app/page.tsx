import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Mission from '@/components/Mission'
import Stats from '@/components/Stats'
import Events from '@/components/Events'
import Gallery from '@/components/Gallery'
import MembersSection from '@/components/MembersSection'
import Partners from '@/components/Partners'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default async function Home() {
  return (
    <main className="bg-[#000E08] min-h-screen">
      <Navbar />
      <Hero />
      <Mission />
      <Stats />
      <Events />
      <Gallery />
      <MembersSection />
      <Partners />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  )
}
