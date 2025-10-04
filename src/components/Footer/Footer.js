import React from "react"
import "./Footer.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"

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

function Footer() {
  const currentYear = new Date().getFullYear()

  const renderSocialIcons = (className) => (
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

  const renderCopyright = (className) => (
    <ul className={className}>
      <p>&copy; Iași România {currentYear}</p>
    </ul>
  )

  return (
    <div className="footer">
      {renderCopyright("componenteDesktop")}
      {renderSocialIcons("logoItemsDesktop")}

      {renderCopyright("componentePhone")}
      {renderSocialIcons("logoItemsPhone")}
    </div>
  )
}

export default Footer
