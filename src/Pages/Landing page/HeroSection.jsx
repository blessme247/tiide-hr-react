import React from "react";
import 'swiper/css';
import SwiperSlides from "./SwiperSlides";
import styles from "./homepage.module.css";
import { Link } from 'react-router-dom'


const HeroSection = () => {
  return (
    <>
      <div className={styles.heroWrapper}>
        <section className= {`${styles.heroSection} ${styles.container} `}>
          <div className={styles.heroTextWrapper}>
            <h2>A complete HR platform that saves you time.</h2>
            <br />
            <p>
              TIIDE HR streamlines your workflow by digitally connecting your
              employees, leave, level, role and notifications management, all in
              one platfrom.
            </p>
            <br />
            <br />
            <Link
              to="/signup"
              className={styles.callToAction}
            >
              Get Started
            </Link>
          </div>
          <SwiperSlides />
        </section>
      </div>
    </>
  );
};

export default HeroSection;
