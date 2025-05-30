import PageTransition from '../components/ui/PageTransition'
import Hero from '../components/home/Hero'
import FeaturedWork from '../components/home/FeaturedWork'
import Testimonials from '../components/home/Testimonials'
import FAQ from '../components/home/FAQ'
import CtaBanner from '../components/home/CtaBanner'

const Home = () => {
  return (
    <PageTransition>
      <Hero />
      <FeaturedWork />
      <Testimonials />
      <FAQ />
      <CtaBanner />
    </PageTransition>
  )
}

export default Home