import React from "react"
import NavBar from "..//components/Nav_bar/Nav_bar"
import Home from "..//components/Home/Home"
import About from "..//components/About/About"
import Projects from "..//components/Projects/Projects"
import FormContact from "..//components/FormContact/FormContact"
import Footer from "..//components/Footer/Footer"

const Header = () => {
  return (
    <header>
      <NavBar />
      <Home />
      <About />
      <Projects />
      <FormContact />
      <Footer />
    </header>
  )
}

export default Header
