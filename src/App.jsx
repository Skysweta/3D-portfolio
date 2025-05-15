
import NavBar from './components/NavBar.jsx'
import Experience from './sections/Experience.jsx'

import FeatureCards from './sections/FeatureCards.jsx'
import Hero from './sections/Hero.jsx'
import ShowcaseSection from './sections/ShowcaseSection.jsx'
import TechStack from './sections/TechStack.jsx'
const App = () => {
  return (
    <>
    <NavBar></NavBar>
     <Hero></Hero>
     <ShowcaseSection></ShowcaseSection>
     <FeatureCards
     ></FeatureCards>
    <Experience></Experience>
    <TechStack></TechStack>
    </>
    
  )
}

export default App