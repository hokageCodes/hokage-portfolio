import About from '../components/about/AboutMe'
import Contact from '../components/contact/Contact'
import HeroSection from '../components/hero-section/HeroSection'
import WhatIDo from '../components/what-i-do/WhatIDoSection'
// import ProjectSection from '../projects/Projects'


export default function LandingPage() {
  return (
    <>
        <HeroSection />
        <WhatIDo />
        <About />
        <Contact />
        {/* <ProjectSection /> */}

    </>
  )
}


