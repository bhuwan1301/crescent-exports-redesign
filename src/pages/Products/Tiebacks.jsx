import './Tiebacks.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, EffectCreative } from 'swiper/modules';
import 'swiper/css';
import 'swiper/swiper-bundle.css';

const commonSwiperSettings = {
  className: 'productswiper',
  modules: [Navigation, Pagination, Scrollbar, A11y, EffectCreative],
  spaceBetween: 10,
  slidesPerView: 1,
  navigation: true,
  effect: 'creative',
  creativeEffect: {
    prev: {
      shadow: true,
      translate: [0, 0, -400],
    },
    next: {
      translate: ['100%', 0, 0],
    },
  },
  grabCursor: true,
  centeredSlides: true,
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: true,
};

const Tiebacks = () => {
  return (
    <div className="tiebacks" id='tiebackssection'>
      <h1>Tiebacks</h1>

      <div className="products">

        <div className="product">
          <Swiper {...commonSwiperSettings}>
            <SwiperSlide><a href="https://i.postimg.cc/9FYvXwLm/Picture4.jpg" target='_blank'><img src="https://i.postimg.cc/9FYvXwLm/Picture4.jpg" alt="" /></a></SwiperSlide>
            <SwiperSlide><a href="https://i.postimg.cc/m2svGyNp/Picture5.jpg" target='_blank'><img src="https://i.postimg.cc/m2svGyNp/Picture5.jpg" alt="" /></a></SwiperSlide>
          </Swiper>

          <div className="productcontent">
            <h2>COTTON TIEBACKS</h2>
          </div>

        </div>

        <div className="product">
          <Swiper {...commonSwiperSettings}>
            <SwiperSlide><a href="https://i.postimg.cc/dQdbXxdT/Picture6.jpg" target='_blank'><img src="https://i.postimg.cc/dQdbXxdT/Picture6.jpg" alt="" /></a></SwiperSlide>
          </Swiper>

          <div className="productcontent">
            <h2>COTTON TIEBACKS WITH METAL CAP</h2>
          </div>

        </div>

        <div className="product">
          <Swiper {...commonSwiperSettings}>
            <SwiperSlide><a href="https://i.postimg.cc/Jz7Ss7Fb/Picture7.jpg" target='_blank'><img src="https://i.postimg.cc/Jz7Ss7Fb/Picture7.jpg" alt="" /></a></SwiperSlide>
          </Swiper>

          <div className="productcontent">
            <h2>COTTON TIEBACKS WITHOUT METAL CAP</h2>
          </div>

        </div>
        <div className="product">
          <Swiper {...commonSwiperSettings}>
            <SwiperSlide><a href="https://i.postimg.cc/XY2mdSMt/Picture8.jpg" target='_blank'><img src="https://i.postimg.cc/XY2mdSMt/Picture8.jpg" alt="" /></a></SwiperSlide>
          </Swiper>

          <div className="productcontent">
            <h2>COTTON TIEBACKS WITH METAL CAP AND BEADS</h2>
          </div>

        </div>

        <div className="product">
          <Swiper {...commonSwiperSettings}>
            <SwiperSlide><a href="https://i.postimg.cc/9frSB8C0/Picture9.jpg" target='_blank'><img src="https://i.postimg.cc/9frSB8C0/Picture9.jpg" alt="" /></a></SwiperSlide>
          </Swiper>

          <div className="productcontent">
            <h2>COTTON TIEBACKS WITH BEADS</h2>
          </div>

        </div>

        <div className="product">
          <Swiper {...commonSwiperSettings}>
            <SwiperSlide><a href="https://i.postimg.cc/mrJnpYgw/Picture10.jpg" target='_blank'><img src="https://i.postimg.cc/mrJnpYgw/Picture10.jpg" alt="" /></a></SwiperSlide>
          </Swiper>

          <div className="productcontent">
            <h2>COTTON TIEBACKS WITH BEADS AND METAL CAP</h2>
          </div>

        </div>

        <div className="product">
          <Swiper {...commonSwiperSettings}>
            <SwiperSlide><a href="https://i.postimg.cc/mD95vPcG/Picture11.jpg" target='_blank'><img src="https://i.postimg.cc/mD95vPcG/Picture11.jpg" alt="" /></a></SwiperSlide>
          </Swiper>

          <div className="productcontent">
            <h2>POLYESTER TIEBACK WITH METAL AND BEADS</h2>
          </div>

        </div>

        <div className="product">
          <Swiper {...commonSwiperSettings}>
            <SwiperSlide><a href="https://i.postimg.cc/qqd54pn6/Picture12.jpg" target='_blank'><img src="https://i.postimg.cc/qqd54pn6/Picture12.jpg" alt="" /></a></SwiperSlide>
            <SwiperSlide><a href="https://i.postimg.cc/fWxP50nc/Picture13.jpg" target='_blank'><img src="https://i.postimg.cc/fWxP50nc/Picture13.jpg" alt="" /></a></SwiperSlide>
          </Swiper>

          <div className="productcontent">
            <h2>POLYESTER TIEBACKS</h2>
          </div>

        </div>

        <div className="product">
          <Swiper {...commonSwiperSettings}>
            <SwiperSlide><a href="https://i.postimg.cc/SR7tKH7T/Picture13-1.jpg" target='_blank'><img src="https://i.postimg.cc/SR7tKH7T/Picture13-1.jpg" alt="" /></a></SwiperSlide>
            <SwiperSlide><a href="https://i.postimg.cc/ncpPWcp6/Picture15.jpg" target='_blank'><img src="https://i.postimg.cc/ncpPWcp6/Picture15.jpg" alt="" /></a></SwiperSlide>
          </Swiper>

          <div className="productcontent">
            <h2>JUTE TIEBACKS</h2>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Tiebacks;
