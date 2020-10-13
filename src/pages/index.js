import React, * as react from 'react'
//import { Link } from "gatsby"
import Nav_bar from "..//components/Nav_bar/Nav_bar"
import Home from "../components/Home/Home"



export default class index extends react.Component {

  render() {
    return (
      <div>
        <Nav_bar />
        <Home/>
        
      </div>
    )
  }
}

