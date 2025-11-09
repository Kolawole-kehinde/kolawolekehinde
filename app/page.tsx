
import Contact from '@/components/landingpage/Contact'
import Experience from '@/components/landingpage/Experience'
import FeatureCards from '@/components/landingpage/FeatureCards'
import HeroSection from '@/components/landingpage/Hero'
import TechStack from '@/components/landingpage/MyTechStack'
import ShowcaseSection from '@/components/landingpage/ShowcaseSection'

const Homepage = () => {
  return (
    <main >
        <HeroSection/>
        <ShowcaseSection/>
        {/* <LogoShowcase/> */}
        <FeatureCards/>
        <TechStack/>
        <Experience/>
        <Contact/>
    </main>
  )
}

export default Homepage
