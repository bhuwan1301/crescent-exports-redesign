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
    <div className="tiebacks" id='tiebacksection'>
      <h1>Tiebacks</h1>

      <div className="products">

        <div className="product">
          <Swiper {...commonSwiperSettings}>
            <SwiperSlide><a href="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728405332/Picture4_bjfuol.jpg" target='_blank'><img loading="lazy" src="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728405332/Picture4_bjfuol.jpg" alt="" /></a></SwiperSlide>
            <SwiperSlide><a href="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728405333/Picture5_ai0llr.jpg" target='_blank'><img loading="lazy" src="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728405333/Picture5_ai0llr.jpg" alt="" /></a></SwiperSlide>
          </Swiper>

          <div className="productcontent">
            <h2>COTTON TIEBACKS</h2>
          </div>

        </div>

        <div className="product">
          <Swiper {...commonSwiperSettings}>
            <SwiperSlide><a href="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728405333/Picture6_shg0rh.jpg" target='_blank'><img loading="lazy" src="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728405333/Picture6_shg0rh.jpg" alt="" /></a></SwiperSlide>
          </Swiper>

          <div className="productcontent">
            <h2>COTTON TIEBACKS WITH METAL CAP</h2>
          </div>

        </div>

        <div className="product">
          <Swiper {...commonSwiperSettings}>
            <SwiperSlide><a href="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728405333/Picture7_nmnpox.jpg" target='_blank'><img loading="lazy" src="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728405333/Picture7_nmnpox.jpg" alt="" /></a></SwiperSlide>
          </Swiper>

          <div className="productcontent">
            <h2>COTTON TIEBACKS WITHOUT METAL CAP</h2>
          </div>

        </div>
        <div className="product">
          <Swiper {...commonSwiperSettings}>
            <SwiperSlide><a href="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728405333/Picture8_etqkve.jpg" target='_blank'><img loading="lazy" src="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728405333/Picture8_etqkve.jpg" alt="" /></a></SwiperSlide>
          </Swiper>

          <div className="productcontent">
            <h2>COTTON TIEBACKS WITH METAL CAP AND BEADS</h2>
          </div>

        </div>

        <div className="product">
          <Swiper {...commonSwiperSettings}>
            <SwiperSlide><a href="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728405333/Picture9_jdizlr.jpg" target='_blank'><img loading="lazy" src="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728405333/Picture9_jdizlr.jpg" alt="" /></a></SwiperSlide>
          </Swiper>

          <div className="productcontent">
            <h2>COTTON TIEBACKS WITH BEADS</h2>
          </div>

        </div>

        <div className="product">
          <Swiper {...commonSwiperSettings}>
            <SwiperSlide><a href="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728405291/Picture10_pyfkao.jpg" target='_blank'><img loading="lazy" src="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728405291/Picture10_pyfkao.jpg" alt="" /></a></SwiperSlide>
          </Swiper>

          <div className="productcontent">
            <h2>COTTON TIEBACKS WITH BEADS AND METAL CAP</h2>
          </div>

        </div>

        <div className="product">
          <Swiper {...commonSwiperSettings}>
            <SwiperSlide><a href="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728405291/Picture11_ktew0q.jpg" target='_blank'><img loading="lazy" src="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728405291/Picture11_ktew0q.jpg" alt="" /></a></SwiperSlide>
          </Swiper>

          <div className="productcontent">
            <h2>POLYESTER TIEBACK WITH METAL AND BEADS</h2>
          </div>

        </div>

        <div className="product">
          <Swiper {...commonSwiperSettings}>
            <SwiperSlide><a href="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728405292/Picture12_zbshk8.jpg" target='_blank'><img loading="lazy" src="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728405292/Picture12_zbshk8.jpg" alt="" /></a></SwiperSlide>
            <SwiperSlide><a href="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728405292/Picture13_rzw7rk.jpg" target='_blank'><img loading="lazy" src="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728405292/Picture13_rzw7rk.jpg" alt="" /></a></SwiperSlide>
            <SwiperSlide><a href="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728405259/Picture30_ioj2we.jpg" target='_blank'><img loading="lazy" src="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728405259/Picture30_ioj2we.jpg" alt="" /></a></SwiperSlide>
            <SwiperSlide><a href="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728405259/Picture31_ghdlvr.jpg" target='_blank'><img loading="lazy" src="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728405259/Picture31_ghdlvr.jpg" alt="" /></a></SwiperSlide>
            <SwiperSlide><a href="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728405284/Picture32_bqaapj.jpg" target='_blank'><img loading="lazy" src="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728405284/Picture32_bqaapj.jpg" alt="" /></a></SwiperSlide>
            <SwiperSlide><a href="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728405291/Picture33_vstlev.jpg" target='_blank'><img loading="lazy" src="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728405291/Picture33_vstlev.jpg" alt="" /></a></SwiperSlide>
            <SwiperSlide><a href="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728405291/Picture34_bdte1c.jpg" target='_blank'><img loading="lazy" src="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728405291/Picture34_bdte1c.jpg" alt="" /></a></SwiperSlide>
            <SwiperSlide><a href="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728405334/Picture35_wrftbx.jpg" target='_blank'><img loading="lazy" src="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728405334/Picture35_wrftbx.jpg" alt="" /></a></SwiperSlide>
            <SwiperSlide><a href="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728405339/Picture36_afysjh.jpg" target='_blank'><img loading="lazy" src="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728405339/Picture36_afysjh.jpg" alt="" /></a></SwiperSlide>
            <SwiperSlide><a href="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728405339/Picture37_abwmi5.jpg" target='_blank'><img loading="lazy" src="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728405339/Picture37_abwmi5.jpg" alt="" /></a></SwiperSlide>
            <SwiperSlide><a href="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728405340/Picture40_m0unbd.jpg" target='_blank'><img loading="lazy" src="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728405340/Picture40_m0unbd.jpg" alt="" /></a></SwiperSlide>
            <SwiperSlide><a href="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728405340/Picture41_zjb5uj.jpg" target='_blank'><img loading="lazy" src="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728405340/Picture41_zjb5uj.jpg" alt="" /></a></SwiperSlide>
            <SwiperSlide><a href="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728405340/Picture42_m2iyzo.jpg" target='_blank'><img loading="lazy" src="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728405340/Picture42_m2iyzo.jpg" alt="" /></a></SwiperSlide>
            <SwiperSlide><a href="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728405332/Picture52_ahmk56.jpg" target='_blank'><img loading="lazy" src="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728405332/Picture52_ahmk56.jpg" alt="" /></a></SwiperSlide>
          </Swiper>

          <div className="productcontent">
            <h2>POLYESTER TIEBACKS</h2>
          </div>

        </div>

        <div className="product">
          <Swiper {...commonSwiperSettings}>
            <SwiperSlide><a href="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728405292/Picture13.1_avmy7u.jpg" target='_blank'><img loading="lazy" src="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728405292/Picture13.1_avmy7u.jpg" alt="" /></a></SwiperSlide>
            <SwiperSlide><a href="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728405306/Picture15_kgdnkm.jpg" target='_blank'><img loading="lazy" src="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728405306/Picture15_kgdnkm.jpg" alt="" /></a></SwiperSlide>
          </Swiper>

          <div className="productcontent">
            <h2>JUTE TIEBACKS</h2>
          </div>

        </div>

        <div className="product">
          <Swiper {...commonSwiperSettings}>
            <SwiperSlide><a href="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728405306/Picture16_fyo1xg.jpg" target='_blank'><img loading="lazy" src="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728405306/Picture16_fyo1xg.jpg" alt="" /></a></SwiperSlide>
            <SwiperSlide><a href="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728405307/Picture17_teymbn.jpg" target='_blank'><img loading="lazy" src="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728405307/Picture17_teymbn.jpg" alt="" /></a></SwiperSlide>
          </Swiper>

          <div className="productcontent">
            <h2>COTTON TIEBACKS WITH HEAVY METAL AND STONE</h2>
          </div>

        </div>

        <div className="product">
          <Swiper {...commonSwiperSettings}>
            <SwiperSlide><a href="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728405252/Picture18_mjyddr.jpg" target='_blank'><img loading="lazy" src="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728405252/Picture18_mjyddr.jpg" alt="" /></a></SwiperSlide>
          </Swiper>

          <div className="productcontent">
            <h2>COTTON TIEBACK WITH WOOD</h2>
          </div>

        </div>

        <div className="product">
          <Swiper {...commonSwiperSettings}>
            <SwiperSlide><a href="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728405253/Picture19_j62cgm.jpg" target='_blank'><img loading="lazy" src="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728405253/Picture19_j62cgm.jpg" alt="" /></a></SwiperSlide>
          </Swiper>

          <div className="productcontent">
            <h2>BEADS TIEBACK</h2>
          </div>

        </div>

        <div className="product">
          <Swiper {...commonSwiperSettings}>
            <SwiperSlide><a href="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728405253/Picture20_gxaixh.jpg" target='_blank'><img loading="lazy" src="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728405253/Picture20_gxaixh.jpg" alt="" /></a></SwiperSlide>
          </Swiper>

          <div className="productcontent">
            <h2>COTTON ROPE TIEBACK</h2>
          </div>

        </div>

        <div className="product">
          <Swiper {...commonSwiperSettings}>
            <SwiperSlide><a href="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728405254/Picture21_v9a8ru.jpg" target='_blank'><img loading="lazy" src="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728405254/Picture21_v9a8ru.jpg" alt="" /></a></SwiperSlide>
          </Swiper>

          <div className="productcontent">
            <h2>ROPE WITH BALLS</h2>
          </div>

        </div>

        <div className="product">
          <Swiper {...commonSwiperSettings}>
            <SwiperSlide><a href="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728405253/Picture22_u4zsvr.jpg" target='_blank'><img loading="lazy" src="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728405253/Picture22_u4zsvr.jpg" alt="" /></a></SwiperSlide>
          </Swiper>

          <div className="productcontent">
            <h2>TIEBACK ROPES WITH AND WIHTOUT METAL CAPS</h2>
          </div>

        </div>

        <div className="product">
          <Swiper {...commonSwiperSettings}>
            <SwiperSlide><a href="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728405254/Picture24_gvdw4y.jpg" target='_blank'><img loading="lazy" src="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728405254/Picture24_gvdw4y.jpg" alt="" /></a></SwiperSlide>
          </Swiper>

          <div className="productcontent">
            <h2>POLYESTER TIEBACKS WITH BALL</h2>
          </div>

        </div>

        <div className="product">
          <Swiper {...commonSwiperSettings}>
            <SwiperSlide><a href="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728405258/Picture25_ua5mwf.jpg" target='_blank'><img loading="lazy" src="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728405258/Picture25_ua5mwf.jpg" alt="" /></a></SwiperSlide>
            <SwiperSlide><a href="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728405259/Picture26_z8bvfv.jpg" target='_blank'><img loading="lazy" src="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728405259/Picture26_z8bvfv.jpg" alt="" /></a></SwiperSlide>
          </Swiper>

          <div className="productcontent">
            <h2>COTTON DOUBLE ROPE AND POLYESTER ROPE</h2>
          </div>

        </div>

        <div className="product">
          <Swiper {...commonSwiperSettings}>
            <SwiperSlide><a href="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728405259/Picture28_rm8x0j.jpg" target='_blank'><img loading="lazy" src="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728405259/Picture28_rm8x0j.jpg" alt="" /></a></SwiperSlide>
            <SwiperSlide><a href="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728405259/Picture29_jxva4u.jpg" target='_blank'><img loading="lazy" src="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728405259/Picture29_jxva4u.jpg" alt="" /></a></SwiperSlide>
          </Swiper>

          <div className="productcontent">
            <h2>ROPE WITH SMALL BEADS AND NATURAL ROPE</h2>
          </div>

        </div>

        <div className="product">
          <Swiper {...commonSwiperSettings}>
            <SwiperSlide><a href="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728405310/Picture45_ty1dcy.jpg" target='_blank'><img loading="lazy" src="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728405310/Picture45_ty1dcy.jpg" alt="" /></a></SwiperSlide>
            <SwiperSlide><a href="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728405327/Picture46_w82yqr.jpg" target='_blank'><img loading="lazy" src="https://res.cloudinary.com/dhk9t1bus/image/upload/v1728405327/Picture46_w82yqr.jpg" alt="" /></a></SwiperSlide>
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
