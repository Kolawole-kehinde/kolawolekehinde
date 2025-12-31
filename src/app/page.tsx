
import Contact from '@/src/components/landingpage/Contact'
import Experience from '@/src/components/landingpage/Experience'
import HeroSection from '@/src/components/landingpage/Hero'
import ShowcaseSection from '@/src/components/landingpage/ShowcaseSection'
import Testimonials from '@/src/components/landingpage/Testimonials'
import TechStack from '../components/landingpage/MyTechStack'
import HowIWork from '../components/landingpage/HowIWork'

const Homepage = () => {
  return (
    <main  className='space-y-28'>
        <HeroSection/>
        <ShowcaseSection/>
        {/* <LogoShowcase/> */}
        <TechStack/>
        <HowIWork/>
        <Experience/>
        <Testimonials/>
        <Contact/>
    </main>
  )
}

export default Homepage
