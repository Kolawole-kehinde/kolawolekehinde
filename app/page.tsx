
import Contact from '@/components/landingpage/Contact'
import Experience from '@/components/landingpage/Experience'
import FeatureCards from '@/components/landingpage/FeatureCards'
import HeroSection from '@/components/landingpage/Hero'
import TechStack from '@/components/landingpage/MyTechStack'
import ShowcaseSection from '@/components/landingpage/ShowcaseSection'
import Testimonials from '@/components/landingpage/Testimonials'

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
