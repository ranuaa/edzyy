import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import edzyLogo from '../assets/images/edzyLogo.png'
import logoKecil from '../assets/images/logoKecil.png'

// Import Swiper styles
import 'swiper/css';

const SplashSlider = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      style={{ width: "100vw", height: "100vh", backgroundColor: 'black' }}
    >
      <SwiperSlide>
        <div>
          <img src={edzyLogo} alt="" style={{ marginTop: '50%' }} />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div style={{ display: 'flex', flexDirection: 'column' }} >
          <h1 style={{ color: '#F24C05', fontWeight: 'bold', fontSize: '50px', lineHeight: '43px', letterSpacing: '-1.5%', height: '90px', textAlign: 'start', marginTop: '50%', marginLeft: '10px' }} >Wel- <br /> come
            <br />
            <span style={{ color: 'white' }} >to</span>
            <br />
            <span style={{ color: '#0476D9' }} >Edzy!</span>
          </h1>
          <br />
          <img style={{ marginLeft: '-10px', width: '156px', height: '156px', marginTop: "30px" }} src={logoKecil} alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide style={{ backgroundColor: '#FF7F48' }} >
        <div>
          <h1 style={{ color: 'white', fontSize: '30px', lineHeight: "36px", textAlign: 'start', marginTop: '30%', marginLeft: "38px", letterSpacing: "4%", textTransform: 'capitalize', height: '213px', fontStyle: 'normal' }} >
            We provide
            <br />
            everything
            <br />
            that you need
            <br />
            just by a single tap on
            <br />
            your screen
          </h1>
        </div>
      </SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      ...
    </Swiper >
  )
}

export default SplashSlider