import React from 'react'
import "./App.css"
import Navbar from './Component/Navbar/Navbar'
import Hero from './Component/Navbar/Hero/Hero'
import About from './Component/About/About'
import Education from './Component/Education/Education'
import Contact from './Component/Contact/Contact'
import Footer from './Component/Footer/Footer'
import Skills from './Component/skill/Skills'

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Education/>
      < Skills/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
