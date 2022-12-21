import React from 'react'
import { Link } from 'react-router-dom'
import FooterLogo from '../../Assets/images/footer_logo.jpeg'

import './footer.css'

function Footer() {
  return (

    <div className='footer'>
      <div className='top'>
        <img
          src={FooterLogo}
          alt="logo"
          className='footer-logo'
        />

        <ul>

          <li><Link to="/">Home</Link></li>
          <li><Link to="privacy">Privacy Policy</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>

        </ul>
      </div>
      <h6>Copyright &copy; 2022 TIIDE HR. All Rights Reserved</h6>
    </div>

    
  )
}

export default Footer