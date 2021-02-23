import React, * as react from 'react'
import Nav_bar from "..//components/Nav_bar/Nav_bar"
import Home from "..//components/Home/Home"
import About from "..//components/About/About"
import Projects from "..//components/Projects/Projects"
import Form_contact from "..//components/Form_contact/Form_contact"
import Footer from "..//components/Footer/Footer"
import Helmet from "react-helmet"
import favicon from '..//images/gatsby-icon.png'

export default class index extends react.Component {

  render() {
    return (
      <div>

        <Helmet>
          {/* <!-- Primary Meta Tags --> */}
          <title>Ionuț Prilipceanu- Personal Portofolio | Iași  </title>
          <meta name="title" content="Ionuț Prilipceanu- Personal Portofolio | Iași  " />
          <meta name="description" content="Hello, my name is Ionut and I am very fascinated about the technology around us, check it out my portofolio." />
          <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
          <meta name="keywords" content="web developer, web design, portofolio, portofolio for web design, design, frontend developer, developer, frontend job, facebook, jobs,"></meta>
          <meta name="author" content="Ionuț Prilipceanu" />
          <meta property="og:locale" content="ro_RO" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Ionuț Prilipceanu- Personal Portofolio | Iași " />
          <meta property="og:site_name" content="Ionuț Prilipceanu- Personal Portofolio | Iași "></meta>
          <meta property="og:image" content="/images/cover.jpg" />
          <meta property="og:image:width" content="600" />
          <meta property="og:image:height" content="315" />
          <link rel="icon" href={favicon} />
          <meta property="og:image" content="/images/cover.jpg" />
          <meta property="og:image:width" content="600" />
          <meta property="og:image:height" content="315"></meta>


          {/* <!-- Open Graph / Facebook --> */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://metatags.io/" />
          <meta property="og:title" content="Ionuț Prilipceanu- Personal Portofolio | Iași " />
          <meta property="og:description" content="Hello, my name is Ionut and I am very fascinated about the technology around us, check it out my portofolio." />
          <meta property="og:image" content="/images/cover.jpg" />
          <meta property="og:image:width" content="600" />
          <meta property="og:image:height" content="315"></meta>

          {/* <!-- Twitter --> */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://metatags.io/" />
          <meta property="twitter:title" content="Ionuț Prilipceanu- Personal Portofolio | Iași " />
          <meta property="twitter:description" content="Hello, my name is Ionut and I am very fascinated about the technology around us, check it out my portofolio." />
          <meta property="twitter:image" content="/images/cover.jpg" />
        </Helmet>

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

