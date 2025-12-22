
import Contact from '@/src/components/landingpage/Contact'
import Experience from '@/src/components/landingpage/Experience'
import FeatureCards from '@/src/components/landingpage/FeatureCards'
import HeroSection from '@/src/components/landingpage/Hero'
import TechStack from '@/src/components/landingpage/MyTechStack'
import ShowcaseSection from '@/src/components/landingpage/ShowcaseSection'
import Testimonials from '@/src/components/landingpage/Testimonials'

const Homepage = () => {
  return (
    <main  className='space-y-28'>
        <HeroSection/>
        <ShowcaseSection/>
        {/* <LogoShowcase/> */}
        <FeatureCards/>
        <TechStack/>
        <Experience/>
        <Testimonials/>
        <Contact/>
    </main>
  )
}

export default Homepage
