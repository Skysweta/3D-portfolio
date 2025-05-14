
import NavBar from './components/NavBar.jsx'
import ExperienceSection from './sections/ExperienceSection.jsx'
import FeatureCards from './sections/FeatureCards.jsx'
import Hero from './sections/Hero.jsx'
import ShowcaseSection from './sections/ShowcaseSection.jsx'
const App = () => {
  return (
    <>
    <NavBar></NavBar>
     <Hero></Hero>
     <ShowcaseSection></ShowcaseSection>
     <FeatureCards
     ></FeatureCards>
     <ExperienceSection></ExperienceSection>
    </>
  )
}

export default App