import React from "react"
import "./Home.css"
import favicon from "..//..//..//static/images/favicon.png"
import homeimage from "..//Home/images/home.jpg"
import { Link } from "react-scroll"
import Reveal from "..//Reveal"

const Home = () => {
  return (
    <div className="Intro" id="home">
      <div>
        <img src={homeimage} alt="background_logo" />
      </div>

      <div className="contactInfoHome">
        <Reveal>
          <div className="titluShow">
            <h1>Personal portfolio</h1>

            <div className="contactName">
              <img src={favicon} alt="logo" className="contactLogo" />
              <p>
                Ionuț Prilipceanu <br />
                (+40) 751 684 142 <br />
                prilipceanu.ionut@gmail.com
              </p>
            </div>
          </div>

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
              {" "}
              Get started{" "}
            </Link>

            <a
              className="btn-resume"
              href="https://drive.google.com/file/d/1ZBVf8yZSdpwimMclZAsb2k5iOXRwkOR_/view"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get resume
            </a>
          </div>
        </Reveal>
      </div>
    </div>
  )
}

export default Home
