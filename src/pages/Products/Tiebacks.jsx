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
            <SwiperSlide><a href="https://i.postimg.cc/76rVTmLp/Picture30.jpg" target='_blank'><img src="https://i.postimg.cc/76rVTmLp/Picture30.jpg" alt="" /></a></SwiperSlide>
            <SwiperSlide><a href="https://i.postimg.cc/Jn3Q3ZDt/Picture31.jpg" target='_blank'><img src="https://i.postimg.cc/Jn3Q3ZDt/Picture31.jpg" alt="" /></a></SwiperSlide>
            <SwiperSlide><a href="https://i.postimg.cc/brz9mrkg/Picture32.jpg" target='_blank'><img src="https://i.postimg.cc/brz9mrkg/Picture32.jpg" alt="" /></a></SwiperSlide>
            <SwiperSlide><a href="https://i.postimg.cc/VsRRd9PV/Picture33.jpg" target='_blank'><img src="https://i.postimg.cc/VsRRd9PV/Picture33.jpg" alt="" /></a></SwiperSlide>
            <SwiperSlide><a href="https://i.postimg.cc/PrVQMtxb/Picture34.jpg" target='_blank'><img src="https://i.postimg.cc/PrVQMtxb/Picture34.jpg" alt="" /></a></SwiperSlide>
            <SwiperSlide><a href="https://i.postimg.cc/Jzyc69Df/Picture35.jpg" target='_blank'><img src="https://i.postimg.cc/Jzyc69Df/Picture35.jpg" alt="" /></a></SwiperSlide>
            <SwiperSlide><a href="https://i.postimg.cc/x1WGWtLc/Picture36.jpg" target='_blank'><img src="https://i.postimg.cc/x1WGWtLc/Picture36.jpg" alt="" /></a></SwiperSlide>
            <SwiperSlide><a href="https://i.postimg.cc/YSYNkYx8/Picture37.jpg" target='_blank'><img src="https://i.postimg.cc/YSYNkYx8/Picture37.jpg" alt="" /></a></SwiperSlide>
            <SwiperSlide><a href="https://i.postimg.cc/MKfvhx5m/Picture40.jpg" target='_blank'><img src="https://i.postimg.cc/MKfvhx5m/Picture40.jpg" alt="" /></a></SwiperSlide>
            <SwiperSlide><a href="https://i.postimg.cc/FRqhZdM5/Picture41.jpg" target='_blank'><img src="https://i.postimg.cc/FRqhZdM5/Picture41.jpg" alt="" /></a></SwiperSlide>
            <SwiperSlide><a href="https://i.postimg.cc/GtydS3RB/Picture42.jpg" target='_blank'><img src="https://i.postimg.cc/GtydS3RB/Picture42.jpg" alt="" /></a></SwiperSlide>
            <SwiperSlide><a href="https://i.postimg.cc/hPMcyYW1/Picture52.jpg" target='_blank'><img src="https://i.postimg.cc/hPMcyYW1/Picture52.jpg" alt="" /></a></SwiperSlide>
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

        <div className="product">
          <Swiper {...commonSwiperSettings}>
            <SwiperSlide><a href="https://i.postimg.cc/xT54VDdq/Picture16.jpg" target='_blank'><img src="https://i.postimg.cc/xT54VDdq/Picture16.jpg" alt="" /></a></SwiperSlide>
            <SwiperSlide><a href="https://i.postimg.cc/cLJ5s9Kh/Picture17.jpg" target='_blank'><img src="https://i.postimg.cc/cLJ5s9Kh/Picture17.jpg" alt="" /></a></SwiperSlide>
          </Swiper>

          <div className="productcontent">
            <h2>COTTON TIEBACKS WITH HEAVY METAL AND STONE</h2>
          </div>

        </div>

        <div className="product">
          <Swiper {...commonSwiperSettings}>
            <SwiperSlide><a href="https://i.postimg.cc/Mpr3X7VS/Picture18.jpg" target='_blank'><img src="https://i.postimg.cc/Mpr3X7VS/Picture18.jpg" alt="" /></a></SwiperSlide>
          </Swiper>

          <div className="productcontent">
            <h2>COTTON TIEBACK WITH WOOD</h2>
          </div>

        </div>

        <div className="product">
          <Swiper {...commonSwiperSettings}>
            <SwiperSlide><a href="https://i.postimg.cc/nLydGn3S/Picture19.jpg" target='_blank'><img src="https://i.postimg.cc/nLydGn3S/Picture19.jpg" alt="" /></a></SwiperSlide>
          </Swiper>

          <div className="productcontent">
            <h2>BEADS TIEBACK</h2>
          </div>

        </div>

        <div className="product">
          <Swiper {...commonSwiperSettings}>
            <SwiperSlide><a href="https://i.postimg.cc/FKdWSYVJ/Picture20.jpg" target='_blank'><img src="https://i.postimg.cc/FKdWSYVJ/Picture20.jpg" alt="" /></a></SwiperSlide>
          </Swiper>

          <div className="productcontent">
            <h2>COTTON ROPE TIEBACK</h2>
          </div>

        </div>

        <div className="product">
          <Swiper {...commonSwiperSettings}>
            <SwiperSlide><a href="https://i.postimg.cc/sX5Tnb8j/Picture21.jpg" target='_blank'><img src="https://i.postimg.cc/sX5Tnb8j/Picture21.jpg" alt="" /></a></SwiperSlide>
          </Swiper>

          <div className="productcontent">
            <h2>ROPE WITH BALLS</h2>
          </div>

        </div>

        <div className="product">
          <Swiper {...commonSwiperSettings}>
            <SwiperSlide><a href="https://i.postimg.cc/vTM3C3FW/Picture22.jpg" target='_blank'><img src="https://i.postimg.cc/vTM3C3FW/Picture22.jpg" alt="" /></a></SwiperSlide>
          </Swiper>

          <div className="productcontent">
            <h2>TIEBACK ROPES WITH AND WIHTOUT METAL CAPS</h2>
          </div>

        </div>

        <div className="product">
          <Swiper {...commonSwiperSettings}>
            <SwiperSlide><a href="https://i.postimg.cc/L4ByjKLv/Picture24.jpg" target='_blank'><img src="https://i.postimg.cc/L4ByjKLv/Picture24.jpg" alt="" /></a></SwiperSlide>
          </Swiper>

          <div className="productcontent">
            <h2>POLYESTER TIEBACKS WITH BALL</h2>
          </div>

        </div>

        <div className="product">
          <Swiper {...commonSwiperSettings}>
            <SwiperSlide><a href="https://i.postimg.cc/HsY62Ztm/Picture25.jpg" target='_blank'><img src="https://i.postimg.cc/HsY62Ztm/Picture25.jpg" alt="" /></a></SwiperSlide>
            <SwiperSlide><a href="https://i.postimg.cc/2802XQHZ/Picture26.jpg" target='_blank'><img src="https://i.postimg.cc/2802XQHZ/Picture26.jpg" alt="" /></a></SwiperSlide>
          </Swiper>

          <div className="productcontent">
            <h2>COTTON DOUBLE ROPE AND POLYESTER ROPE</h2>
          </div>

        </div>

        <div className="product">
          <Swiper {...commonSwiperSettings}>
            <SwiperSlide><a href="https://i.postimg.cc/y85n7VC6/Picture28.jpg" target='_blank'><img src="https://i.postimg.cc/y85n7VC6/Picture28.jpg" alt="" /></a></SwiperSlide>
            <SwiperSlide><a href="https://i.postimg.cc/bvtgJKqx/Picture29.jpg" target='_blank'><img src="https://i.postimg.cc/bvtgJKqx/Picture29.jpg" alt="" /></a></SwiperSlide>
          </Swiper>

          <div className="productcontent">
            <h2>ROPE WITH SMALL BEADS AND NATURAL ROPE</h2>
          </div>

        </div>

        <div className="product">
          <Swiper {...commonSwiperSettings}>
            <SwiperSlide><a href="https://i.postimg.cc/dQbyQLLx/Picture45.jpg" target='_blank'><img src="https://i.postimg.cc/dQbyQLLx/Picture45.jpg" alt="" /></a></SwiperSlide>
            <SwiperSlide><a href="https://i.postimg.cc/5N8FXbzN/Picture46.jpg" target='_blank'><img src="https://i.postimg.cc/5N8FXbzN/Picture46.jpg" alt="" /></a></SwiperSlide>
          </Swiper>

          <div className="productcontent">
            <h2>POLYESTER TIEBACK WITH BEADS</h2>
          </div>

        </div>

        

      </div>

    </div>
  );
}

export default Tiebacks;
