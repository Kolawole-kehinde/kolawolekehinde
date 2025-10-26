
import Experience from '@/components/landingpage/Experience'
import FeatureCards from '@/components/landingpage/FeatureCards'
import HeroSection from '@/components/landingpage/Hero'
import ShowcaseSection from '@/components/landingpage/ShowcaseSection'

const Homepage = () => {
  return (
    <main >
        <HeroSection/>
        <ShowcaseSection/>
        {/* <LogoShowcase/> */}
        <FeatureCards/>
        <Experience/>
    </main>
  )
}

export default Homepage
