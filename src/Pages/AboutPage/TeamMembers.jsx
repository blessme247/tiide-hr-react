import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay } from 'swiper';
// Import Swiper styles
import 'swiper/css';

// Component imports
import MemberCard from './MemberCard';

// image imports
import abraham from '../../Assets/images/abraham.jpg'
import emmanuel from '../../Assets/images/emmanuel.jpg'
// import ganiyat from '../../Assets/images/ganiyat.jpg'
// import jemilat from '../../Assets/images/jemilat.jpg'
// import moshood from '../../Assets/images/moshood.jpg'
import owen from '../../Assets/images/owen.jpg'
// import tiana from '../../Assets/images/tiana.jpg'
import daniel from '../../Assets/images/daniel.jpg'
// import tosin from '../../Assets/images/Tosin.jpg'
// import wilson from '../../Assets/images/wilson.jpg'


function TeamMembers() {
  const fe = "Frontend Developer"
  const be = "Backend Developer"
  return (
    <div>
      <Swiper
        spaceBetween={50}
        // slidesPerView={3}
        Autoplay={true}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <MemberCard
            imgSrc={abraham}
            memberName="Abraham Solabi"
            stack={fe}
          /></SwiperSlide>

        <SwiperSlide>
          <MemberCard
            imgSrc={owen}
            memberName="Abraham Solabi"
            stack={be}
          /></SwiperSlide>

        <SwiperSlide>
          <MemberCard
            imgSrc={daniel}
            memberName="Abraham Solabi"
            stack={fe}
          /></SwiperSlide>

        <SwiperSlide>
          <MemberCard
            imgSrc={emmanuel}
            memberName="Abraham Solabi"
            stack={be}
          /></SwiperSlide>
        <SwiperSlide>
          <MemberCard
            imgSrc={abraham}
            memberName="Abraham Solabi"
            stack={fe}
          />
        </SwiperSlide>

        <SwiperSlide>
          <MemberCard
            imgSrc={abraham}
            memberName="Abraham Solabi"
            stack={fe}
          /></SwiperSlide>

        <SwiperSlide>
          <MemberCard
            imgSrc={owen}
            memberName="Abraham Solabi"
            stack={be}
          /></SwiperSlide>

        <SwiperSlide>
          <MemberCard
            imgSrc={daniel}
            memberName="Abraham Solabi"
            stack={fe}
          /></SwiperSlide>

        <SwiperSlide>
          <MemberCard
            imgSrc={emmanuel}
            memberName="Abraham Solabi"
            stack={be}
          /></SwiperSlide>

        ...
      </Swiper>
    </div>
  )
}

export default TeamMembers