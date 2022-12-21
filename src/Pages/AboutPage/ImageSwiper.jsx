import React from 'react'

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

// image imports
import abraham from '../../Assets/images/abraham.jpg'
import emmanuel from '../../Assets/images/emmanuel.jpg'
import ganiyat from '../../Assets/images/ganiyat.jpg'
import jemilat from '../../Assets/images/jemilat.jpg'
import moshood from '../../Assets/images/moshood.jpg'
import owen from '../../Assets/images/owen.jpg'
import tiana from '../../Assets/images/tiana.jpg'
import daniel from '../../Assets/images/daniel.jpg'
import MemberCard from './MemberCard';
import tosin from '../../Assets/images/Tosin.jpg'
import wilson from '../../Assets/images/wilson.jpg'


function ImageSwiper() {
  return (

    <>


      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        // centeredSlides={true}
        loop= {true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          // when window width is >= 350px
          250: {
            width: 250,
            slidesPerView: 1,
          },
          // when window width is >= 640px
          580: {
            width: 500,
            slidesPerView: 2,
          },
          // when window width is >= 768px
          768: {
            width: 768,
            slidesPerView: 3,
          },
          1024: {
            width: 1024,
            slidesPerView: 4,
          },
        }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        // className="mySwiper"
        id='memberCardSwiper'
      >



        <SwiperSlide>
          <MemberCard
            imgSrc={abraham}
            memberName="Abraham Solabi"
            stack="Frontend"
          />
        </SwiperSlide>

        <SwiperSlide>
          <MemberCard
            imgSrc={jemilat}
            memberName="Rotimi Jemilat"
            stack="Frontend"
          />
        </SwiperSlide>

        <SwiperSlide>
          <MemberCard
            imgSrc={owen}
            memberName="Ederuvie Owen"
            stack="Backend"
          />
        </SwiperSlide>

        <SwiperSlide>
          <MemberCard
            imgSrc={daniel}
            memberName="Akinbo Daniel"
            stack="Frontend"
          />
        </SwiperSlide>

        <SwiperSlide>
          <MemberCard
            imgSrc={tiana}
            memberName="Nwigwe Tiana"
            stack="Frontend"
          />
        </SwiperSlide>

        <SwiperSlide>
          <MemberCard
            imgSrc={emmanuel}
            memberName="Odinaka Emmanuel"
            stack="Backend"
          />
        </SwiperSlide>

        <SwiperSlide>
          <MemberCard
            imgSrc={wilson}
            memberName="Oyem Wilson"
            stack="Frontend"
          />
        </SwiperSlide>

        <SwiperSlide>
          <MemberCard
            imgSrc={tosin}
            memberName="Iyiola Oluwatosin"
            stack="Backend"
          /></SwiperSlide>

        <SwiperSlide>
          <MemberCard
            imgSrc={ganiyat}
            memberName="Olayiwola Ganiyat"
            stack="Backend"
          />
        </SwiperSlide>

        <SwiperSlide>
          <MemberCard
            imgSrc={moshood}
            memberName="Sanusi Moshood"
            stack="Frontend"
          />
        </SwiperSlide>

      </Swiper>
    </>
  )
}

export default ImageSwiper