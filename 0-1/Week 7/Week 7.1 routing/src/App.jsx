import './App.css'
import {BrowserRouter,Routes,Route } from "react-router-dom"

// create the components HOME,ABOUT,CARD
const Home = () =>{
  return(
    <div>
      Home component
    </div>
  )
}

const About = () =>{
  return(
    <div>
      About component
    </div>
  )
}
const Card = () =>{
  return(
    <div>
      card component
    </div>
  )
}

function App() {
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/card" element={<Card/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
