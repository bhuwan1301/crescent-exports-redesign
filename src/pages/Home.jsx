import './home.scss'

import Logo from "@/assets/images/logo.jpg";
import Pic1 from "@/assets/images/1.jpg";
import Pic3 from "@/assets/images/6.jpg";
import Pic4 from "@/assets/product_photos/DSC00639.jpg";
import Pic5 from "@/assets/product_photos/DSC00653.jpg";
import Pic6 from "@/assets/product_photos/DSC00668.jpg";
import Pic7 from "@/assets/product_photos/DSC00681.jpg";
import Pic8 from "@/assets/product_photos/DSC00704.jpg";

import { motion } from "framer-motion"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/swiper-bundle.css';
import { useState } from 'react';


const Home = () => {
  const [direction, setDirection] = useState(-100)

    function handleDirection() {
        setDirection(direction*(-1));
    }

  return (
    <div className="homepage">

      <motion.div 
      className="homeintro"
      initial={{  scale: 0.9, opacity: 0 }}
      animate = {{scale: 1, opacity: 1}}
      transition={{ duration: 1 }}
      >
        <h1>Exporting high quality, sustainable and eco friendly products since 1996.</h1>
        <img src={Logo} alt="Picture" />
      </motion.div>

      <motion.div 
      className="homeourstory"
      initial={{  translateX: direction, opacity: 0 }}
      whileInView={{ translateX: 0, opacity: 1 }}
      exit={{  translateX: direction, opacity: 0 }}
      transition={{ duration: 1 }}
      onViewportLeave={handleDirection}
      >
        <h1>Our Story</h1>
        <p>
          In 1990, We established a company named as 'Shaktirugs', where we domestically supplied rugs. Later, we started exporting to other countries mainly USA.
        </p>
        <p>Since 2005, Our company has been manufacturing and exporting multiple categories of storage items like Crunch cans, Bags, Wall and Pocket hangings etc. We export to USA, Norway, Canada, Sweden and other western & European countries.</p>
        <p>In 2019, We started a new company 'Crescent Export' in which we export these storage items.</p>
        <p>We deliver high quality ,eco friendly , sustainable and affordable products on time.</p>
        <p>Our main motive is to keep our customers happy.</p>
        <div className="enquirebutton">
          <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} href="" target='_top'>ENQUIRE</motion.a></div>
      </motion.div>

      <div className="homeproducts">
        <h1>Products</h1>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, EffectCoverflow, Autoplay]}
        spaceBetween={10}
        slidesPerView={2} // Default value for larger screens
        breakpoints={{
          // When the screen width is >= 760px, use this setting
          760: {
            slidesPerView: 3, // Or any number you want for larger screens
          },
          // When the screen width is <= 759px, use this setting
          0: {
            slidesPerView: 2, // Number of slides per view for smaller screens
          },
        }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        navigation
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}

      >
        <SwiperSlide><img className='homeproductspics' src={Pic1} alt="Picture 1" /></SwiperSlide>
        <SwiperSlide><img className='homeproductspics' src={Pic4} alt="Picture 3" /></SwiperSlide>
        <SwiperSlide><img className='homeproductspics' src={Pic6} alt="Picture 3" /></SwiperSlide>
        <SwiperSlide><img className='homeproductspics' src={Pic5} alt="Picture 3" /></SwiperSlide>
        <SwiperSlide><img className='homeproductspics' src={Pic3} alt="Picture 3" /></SwiperSlide>
        <SwiperSlide><img className='homeproductspics' src={Pic7} alt="Picture 3" /></SwiperSlide>
        <SwiperSlide><img className='homeproductspics' src={Pic8} alt="Picture 3" /></SwiperSlide>
        

      </Swiper>


    </div>
  )
}
export default Home