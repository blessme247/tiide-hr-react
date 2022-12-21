import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import 'swiper/css';
import "swiper/swiper-bundle.min.css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from "./homepage.module.css";
import People1 from "../../Assets/images/people1.jpg";
import EmployeeMGT from "../../Assets/images/empMGT.png";
import leaveMGT from "../../Assets/images/leaveMGT.png";
import levelMGT from "../../Assets/images/levelMGT.png";
import roleMGT from "../../Assets/images/roleMGT.png";
import leaveAPPLICATION from "../../Assets/images/leaveAPP.png";
import businessProfile from "../../Assets/images/businessProfile.png";

const SwiperSlides = () => {
      
  return (
    <>
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      loop={true}
      navigation={true}
      autoplay={true}
      pagination={{ clickable: true }}
      className={`${styles.swiper} ${styles.heroImageContainer}`}
    >
        {/* <div className="swiper hero__image-container" > */}
  <div className={styles.swiperWrapper}>
    {/* Slide 1 */}
    <SwiperSlide className= {`${styles.slideImageWrapper} ${styles.slideImageWrapper1} ${styles.swiperSlide}`}>
      <img src={People1} alt="employees" /> </SwiperSlide>
      {/* Slide 2 */}
    <SwiperSlide className={`${styles.slideImageWrapper} ${styles.slideImageWrapper2} ${styles.swiperSlide}`}>
      <img src={EmployeeMGT} alt="Dashboard screenshot" />
    </SwiperSlide>
    {/* Slide 3 */}
    <SwiperSlide className={`${styles.slideImageWrapper} ${styles.slideImageWrapper3} ${styles.swiperSlide}`}>
      <img src={leaveMGT} alt="Dashboard screenshot" />
    </SwiperSlide>

    {/* Slide 4 */}
    <SwiperSlide className={`${styles.slideImageWrapper} ${styles.slideImageWrapper3} ${styles.swiperSlide}`}>
      <img src={leaveAPPLICATION} alt="Dashboard screenshot" />
    </SwiperSlide>

    {/* Slide 5 */}
    <SwiperSlide className={`${styles.slideImageWrapper} ${styles.slideImageWrapper4} ${styles.swiperSlide}`}>
      <img src={levelMGT} alt="Dashboard screenshot" />
    </SwiperSlide>

    {/* Slide 6 */}
    <SwiperSlide className={`${styles.slideImageWrapper} ${styles.slideImageWrapper5} ${styles.swiperSlide}`}>
      <img src={roleMGT} alt="Dashboard screenshot" />
    </SwiperSlide>

    {/* Slide 7 */}
    <SwiperSlide className={`${styles.slideImageWrapper} ${styles.slideImageWrapper3} ${styles.swiperSlide}`}>
      <img src={businessProfile} alt="Dashboard screenshot" />
    </SwiperSlide>
  </div>
 
{/* </div> */}
      ...
    </Swiper>

    </>
    ) 
}

export default SwiperSlides