import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import SobreNos from '@/components/SobreNos'
import Eventos from '@/components/Eventos'
import PorQueAjudar from '@/components/PorQueAjudar'
import Galeria from '@/components/Galeria'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <SobreNos />
      <Eventos />
      <PorQueAjudar />
      <Galeria />
      <Footer />
    </main>
  )
}




