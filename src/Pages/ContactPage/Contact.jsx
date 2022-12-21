import React from 'react'
// import './contact.css'
import ContactFormContainer from './ContactFormContainer'
import Footer from '../../Components/FooterComponent/Footer'
import NavBar from '../../Components/NavBarComponent/NavBar'


function Contact() {
  return (
    <>
      <NavBar />
      <ContactFormContainer />
      <Footer />
    </>
  )
}

export default Contact