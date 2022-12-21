import React from 'react'
import Footer from '../../Components/FooterComponent/Footer'
import NavBar from '../../Components/NavBarComponent/NavBar'
import SigninValidate from './SigninValidate'



const SignIn = () => {
  return (
    <React.Fragment>
        <NavBar/>
        {/* <SignInBody/> */}
        <SigninValidate />
        <Footer/>
    </React.Fragment>
  )
}

export default SignIn