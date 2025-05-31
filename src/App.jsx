import About from './components/About'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Projects from './components/Projects/Projects'
import Services from './components/Services/Services'
import SkillsSection from './components/SkillsSection/SkillsSection'
import WhatsAppButton from './components/WatsappButton/WatsappButton'
import './styles/custom.scss'

const App = () =>{
const handleAlert =() => {
  alert("Você já está desfrutando desta experiêcia.😁")
}
  return(
    <div className="parent">
      <Header/>
      <Hero/>
      <About/>
      <Projects handleAlert={handleAlert} />
      <Services/>
      <SkillsSection/>
      <Footer/>
      <WhatsAppButton/>
    </div>
  )
}

export default App  