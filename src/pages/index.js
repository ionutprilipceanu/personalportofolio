import React, * as react from 'react'
import Nav_bar from "..//components/Nav_bar/Nav_bar"
import Home from "..//components/Home/Home"
import About from "..//components/About/About"


export default class index extends react.Component {

  render() {
    return (
      <div>
        <Nav_bar />
        <Home />
        <About />
      </div>
    )
  }
}

