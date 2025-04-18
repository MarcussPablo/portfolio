import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import About from "./components/About/About"
import Projects from "./components/Projects/Projects"
import Contact from "./components/Contact/Contact"



const App = () =>{
  return(
    
             
      <Router>
      <Header/>
      <Routes>
          <Route path="/" element={<About/>} />
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/contact" element={<Contact/>}/>
      </Routes>
      <Footer/>
      </Router>
    
 
    
  )
}

export default App