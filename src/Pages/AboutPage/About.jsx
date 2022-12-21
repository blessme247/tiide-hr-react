import React from 'react';
import Footer from '../../Components/FooterComponent/Footer';
import NavBar from '../../Components/NavBarComponent/NavBar';

// css import
import './About.css';


// swiper component imports
import BriefCardContainer from './BriefCardContainer';
import 'swiper/css';
import 'swiper/css/bundle'

import ImageSwiper from './ImageSwiper';


function About() {
  return (
    <>
      <NavBar />
      <div className="container">
        <div className="brief">
          <h2> Providing  Digital <br /><span className='blue-text'>Employee Management</span> Solution.</h2>
          {/* <h1>HR, <span className='blue-text'>Seemlessly...</span></h1> */}
          <p>TIIDE HR was built for employers and employees of small and medium scale enterprises to help them streamline their various administrative workflow and have a secured employee database.</p>
        </div>
      </div>
      <BriefCardContainer />
      <div className="swipersection">
   
        <ImageSwiper />
      </div>

      <Footer />



    </>
  )
}

export default About