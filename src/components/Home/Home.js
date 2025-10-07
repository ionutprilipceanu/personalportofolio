import React from "react"
import "./Home.css"
import favicon from "../../../static/images/favicon.png"
import homeimage from "../Home/images/home.jpg"
import { Link } from "react-scroll"
import Reveal from "../Reveal"

const ContactInfo = () => (
  <div className="contactName">
    <img src={favicon} alt="Portfolio logo" className="contactLogo" />
    <p>
      Ionuț Prilipceanu <br />
      (+40) 751 684 142 <br />
      prilipceanu.ionut@gmail.com
    </p>
  </div>
)

const HomeButtons = () => (
  <div className="btn-all">
    <Link
      to="about"
      className="btn-start"
      activeClass="activeNav"
      spy={true}
      smooth={true}
      offset={-140}
      duration={500}
    >
      Get started
    </Link>

    <a
      className="btn-resume"
      href="https://drive.google.com/file/d/1lPSlc7HO6J2eLXeSy4JepZGFb8gsXoEx/view"
      target="_blank"
      rel="noopener noreferrer"
    >
      Get resume
    </a>
  </div>
)

const Home = () => {
  return (
    <section className="Intro" id="home">
      <div className="homeBackground">
        <img src={homeimage} alt="Background" />
      </div>

      <div className="contactInfoHome">
        <Reveal>
          <header className="titluShow">
            <h1>Personal portfolio</h1>
            <ContactInfo />
          </header>
          <HomeButtons />
        </Reveal>
      </div>
    </section>
  )
}

export default Home
