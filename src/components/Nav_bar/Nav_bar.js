import React, { useState } from "react"
import "./Nav_bar.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import logo from "../Nav_bar/images/logo.png"
import { Link } from "react-scroll"

const navLinks = [
  { to: "home", label: "Home", offset: -110 },
  { to: "about", label: "About", offset: -110 },
  { to: "projects", label: "Projects", offset: -110 },
  { to: "contact", label: "Contact", offset: -110 },
]

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/ionu%C5%A3-prilipceanu-20534ab0/",
    icon: faLinkedin,
    className: "logoLinkedin",
  },
  {
    href: "https://github.com/ionutprilipceanu",
    icon: faGithub,
    className: "logoGithub",
  },
  {
    href: "https://www.facebook.com/ionut.prilipceanu93/",
    icon: faFacebook,
    className: "logoFacebook",
  },
]

const NavLinks = ({ links, className }) => (
  <ul className={className}>
    {links.map(({ to, label, offset }) => (
      <li key={to}>
        <Link
          to={to}
          className="link"
          activeClass="activeNav"
          spy={true}
          smooth={true}
          offset={offset}
          duration={500}
        >
          {label}
        </Link>
      </li>
    ))}
  </ul>
)

const SocialLinks = ({ className }) => (
  <ul className={className}>
    {socialLinks.map(({ href, icon, className }) => (
      <li key={href}>
        <a href={href} target="_blank" rel="noreferrer" className={className}>
          <FontAwesomeIcon icon={icon} />
        </a>
      </li>
    ))}
  </ul>
)

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="nav_body">
      <div className="logo">
        <Link to="home" className="link">
          <img src={logo} alt="Logo" />
        </Link>
      </div>

      <div className={isOpen ? "nav-barBack" : "nav-bar"}>
        <NavLinks links={navLinks} className="nav-bar" />
        <SocialLinks className="nav-bar social-icons" />
      </div>

      <div className={isOpen ? "backgroundSide" : "backgroundSideBack"}>
        <NavLinks links={navLinks} className="navSide" />
        <ul className="navSideSecond">
          <li>Ionuț Prilipceanu</li>
          <li>(+40) 751 684 142</li>
          <li>prilipceanu.ionut@gmail.com</li>
        </ul>
        <SocialLinks className="logoItems" />

        <button
          className="burger"
          onClick={() => setIsOpen(!isOpen)}
          onKeyDown={() => setIsOpen(!isOpen)}
        >
          <div className="toggle"></div>
          <div className="toggle"></div>
          <div className="toggle"></div>
        </button>
      </div>
    </nav>
  )
}

export default NavBar
