import React, * as react from 'react'
import Nav_bar from "..//components/Nav_bar/Nav_bar"
import Home from "..//components/Home/Home"
import About from "..//components/About/About"
import Projects from "..//components/Projects/Projects"
import Form_contact from "..//components/Form_contact/Form_contact"
import Footer from "..//components/Footer/Footer"

export default class index extends react.Component {

  render() {
    return (
      <div>
        <Nav_bar />
        <Home />
        <About />
        <Projects />
        <Form_contact />
        <Footer />
      </div>
    )
  }
}

