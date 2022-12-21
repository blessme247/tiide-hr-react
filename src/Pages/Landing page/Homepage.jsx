import React from 'react'
import CallToAction from './CallToAction'
import Features from './Features'
import Footer from '../../Components/FooterComponent/Footer'
import NavBar from '../../Components/NavBarComponent/NavBar'
import HeroSection from './HeroSection'
// import './homepage.css'
import Services from './Services'

function Homepage() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <Features />
      <Services />
      <CallToAction />
      <Footer />
    </>
  )
}

export default Homepage