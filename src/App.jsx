import React from "react"
import About from "./Components/About"
import Footer from "./Components/Footer"
import Hero from "./Components/Hero"
import Navbar from "./Components/Navbar"
import Skills from "./Components/Skills"
import Work from "./Components/Work"


function App() {


  return (
    <div className="App bg-[#11071F] text-white">
      <Navbar />
      <Hero />
      <About />
      <Work />
      <Skills />
      <Footer />

    </div>
  )
}

export default App
