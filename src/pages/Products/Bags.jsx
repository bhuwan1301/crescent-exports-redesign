import './Bags.scss';
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

const Bags = () => {
  return (
    <div className="bags" id='bagsection'>
      <h1>Bags</h1>

      <div className="products">

        <div className="product">
          <Swiper {...commonSwiperSettings}>
            <SwiperSlide><a href="https://i.postimg.cc/W4VRmbk9/Picture1.jpg" target='_blank'><img loading="lazy" src="https://i.postimg.cc/W4VRmbk9/Picture1.jpg" alt="" /></a></SwiperSlide>
            <SwiperSlide><a href="https://i.postimg.cc/zGKZRRVb/Picture2.jpg" target='_blank'><img loading="lazy" src="https://i.postimg.cc/zGKZRRVb/Picture2.jpg" alt="" /></a></SwiperSlide>
            <SwiperSlide><a href="https://i.postimg.cc/jd6BxY9P/Picture36.jpg" target='_blank'><img loading="lazy" src="https://i.postimg.cc/jd6BxY9P/Picture36.jpg" alt="" /></a></SwiperSlide>
            <SwiperSlide><a href="https://i.postimg.cc/bwzWdFcM/Picture37.jpg" target='_blank'><img loading="lazy" src="https://i.postimg.cc/bwzWdFcM/Picture37.jpg" alt="" /></a></SwiperSlide>
          </Swiper>

          <div className="productcontent">
            <h2>RECTANGLE STORAGE LAMINATED PRINTED</h2>
            <h3>SIZE:- 22L X 11W X 12H</h3>
          </div>

        </div>

        <div className="product">
          <Swiper {...commonSwiperSettings}>
            <SwiperSlide><a href="https://i.postimg.cc/mryvmf3T/Picture3.jpg" target='_blank'><img loading="lazy" src="https://i.postimg.cc/mryvmf3T/Picture3.jpg" alt="" /></a></SwiperSlide>
            <SwiperSlide><a href="https://i.postimg.cc/RFCj8sGK/Picture4.jpg" target='_blank'><img loading="lazy" src="https://i.postimg.cc/RFCj8sGK/Picture4.jpg" alt="" /></a></SwiperSlide>
            <SwiperSlide><a href="https://i.postimg.cc/B6hdGTwy/Picture5.jpg" target='_blank'><img loading="lazy" src="https://i.postimg.cc/B6hdGTwy/Picture5.jpg" alt="" /></a></SwiperSlide>
            <SwiperSlide><a href="https://i.postimg.cc/2yVgj1s5/Picture6.jpg" target='_blank'><img loading="lazy" src="https://i.postimg.cc/2yVgj1s5/Picture6.jpg" alt="" /></a></SwiperSlide>
            <SwiperSlide><a href="https://i.postimg.cc/PJ99CtHQ/Picture7.jpg" target='_blank'><img loading="lazy" src="https://i.postimg.cc/PJ99CtHQ/Picture7.jpg" alt="" /></a></SwiperSlide>
            <SwiperSlide><a href="https://i.postimg.cc/WbqxQJmW/Picture8.jpg" target='_blank'><img loading="lazy" src="https://i.postimg.cc/WbqxQJmW/Picture8.jpg" alt="" /></a></SwiperSlide>
          </Swiper>

          <div className="productcontent">
            <h2>SQUARE STORAGE LAMINATED PRINTED</h2>
            <h3>SIZE:- 12L X 12W X 12H</h3>
          </div>

        </div>

        <div className="product">
          <Swiper {...commonSwiperSettings}>
            <SwiperSlide><a href="https://i.postimg.cc/G35Z7jDT/Picture9.jpg" target='_blank'><img loading="lazy" src="https://i.postimg.cc/G35Z7jDT/Picture9.jpg" alt="" /></a></SwiperSlide>
            <SwiperSlide><a href="https://i.postimg.cc/BnWRsQMq/Picture10.jpg" target='_blank'><img loading="lazy" src="https://i.postimg.cc/BnWRsQMq/Picture10.jpg" alt="" /></a></SwiperSlide>
          </Swiper>

          <div className="productcontent">
            <h2>LAMINATED STORAGE ORGANIZER</h2>
            <h3>SIZE:- 10L X 15W X 6H</h3>
          </div>

        </div>

        <div className="product">
          <Swiper {...commonSwiperSettings}>
            <SwiperSlide><a href="https://i.postimg.cc/fRxpbnrY/Picture11.jpg" target='_blank'><img loading="lazy" src="https://i.postimg.cc/fRxpbnrY/Picture11.jpg" alt="" /></a></SwiperSlide>
            <SwiperSlide><a href="https://i.postimg.cc/fbDFt2Gp/Picture12.jpg" target='_blank'><img loading="lazy" src="https://i.postimg.cc/fbDFt2Gp/Picture12.jpg" alt="" /></a></SwiperSlide>
          </Swiper>

          <div className="productcontent">
            <h2>SQUARE STORAGE LAMINATED PRINTED WITH FLAP</h2>
            <h3>SIZE:- 16L X 16W X 16H</h3>
          </div>

        </div>

        <div className="product">
          <Swiper {...commonSwiperSettings}>
            <SwiperSlide><a href="https://i.postimg.cc/KYfWn7Fz/Picture13.jpg" target='_blank'><img loading="lazy" src="https://i.postimg.cc/KYfWn7Fz/Picture13.jpg" alt="" /></a></SwiperSlide>
            <SwiperSlide><a href="https://i.postimg.cc/wvBGFtTk/Picture14.jpg" target='_blank'><img loading="lazy" src="https://i.postimg.cc/wvBGFtTk/Picture14.jpg" alt="" /></a></SwiperSlide>
          </Swiper>

          <div className="productcontent">
            <h2>SQUARE STORAGE LAMINATED PRINTED</h2>
            <h3>SIZE:- 12L X 12W X 19H</h3>
          </div>

        </div>

        <div className="product">
          <Swiper {...commonSwiperSettings}>
            <SwiperSlide><a href="https://i.postimg.cc/NF9PqWX9/Picture15.jpg" target='_blank'><img loading="lazy" src="https://i.postimg.cc/NF9PqWX9/Picture15.jpg" alt="" /></a></SwiperSlide>
            <SwiperSlide><a href="https://i.postimg.cc/cCpksX7D/Picture16.jpg" target='_blank'><img loading="lazy" src="https://i.postimg.cc/cCpksX7D/Picture16.jpg" alt="" /></a></SwiperSlide>
          </Swiper>

          <div className="productcontent">
            <h2>SQUARE STORAGE HEAVY CANVAS PRINTED</h2>
            <h3>SIZE:- 12L X 12W X 12H</h3>
          </div>

        </div>

        <div className="product">
          <Swiper {...commonSwiperSettings}>
            <SwiperSlide><a href="https://i.postimg.cc/C1662FRp/Picture17.jpg" target='_blank'><img loading="lazy" src="https://i.postimg.cc/C1662FRp/Picture17.jpg" alt="" /></a></SwiperSlide>
            <SwiperSlide><a href="https://i.postimg.cc/sfMVgx9S/Picture18.jpg" target='_blank'><img loading="lazy" src="https://i.postimg.cc/sfMVgx9S/Picture18.jpg" alt="" /></a></SwiperSlide>
            <SwiperSlide><a href="https://i.postimg.cc/W3Cckm6Z/Picture25.jpg" target='_blank'><img loading="lazy" src="https://i.postimg.cc/W3Cckm6Z/Picture25.jpg" alt="" /></a></SwiperSlide>
            <SwiperSlide><a href="https://i.postimg.cc/kGS3FVfp/Picture26.jpg" target='_blank'><img loading="lazy" src="https://i.postimg.cc/kGS3FVfp/Picture26.jpg" alt="" /></a></SwiperSlide>
            <SwiperSlide><a href="https://i.postimg.cc/Znp2vGqk/Picture34.jpg" target='_blank'><img loading="lazy" src="https://i.postimg.cc/Znp2vGqk/Picture34.jpg" alt="" /></a></SwiperSlide>
            <SwiperSlide><a href="https://i.postimg.cc/c1nVznBD/Picture35.jpg" target='_blank'><img loading="lazy" src="https://i.postimg.cc/c1nVznBD/Picture35.jpg" alt="" /></a></SwiperSlide>
          </Swiper>

          <div className="productcontent">
            <h2>RECTANGLE STORAGE LAMINATED </h2>
            <h3>SIZE:- 22L X 11W X 12H</h3>
          </div>

        </div>

        <div className="product">
          <Swiper {...commonSwiperSettings}>
            <SwiperSlide><a href="https://i.postimg.cc/h4NKznpY/Picture19.jpg" target='_blank'><img loading="lazy" src="https://i.postimg.cc/h4NKznpY/Picture19.jpg" alt="" /></a></SwiperSlide>
          </Swiper>

          <div className="productcontent">
            <h2>RECTANGLE STORAGE SHIMMER LAMINATED </h2>
            <h3>SIZE:- 22L X 11W X 12H</h3>
          </div>

        </div>

        <div className="product">
          <Swiper {...commonSwiperSettings}>
            <SwiperSlide><a href="https://i.postimg.cc/VLMmXhhk/Picture20.jpg" target='_blank'><img loading="lazy" src="https://i.postimg.cc/VLMmXhhk/Picture20.jpg" alt="" /></a></SwiperSlide>
            <SwiperSlide><a href="https://i.postimg.cc/T3Jx4Df8/Picture22.jpg" target='_blank'><img loading="lazy" src="https://i.postimg.cc/T3Jx4Df8/Picture22.jpg" alt="" /></a></SwiperSlide>
            <SwiperSlide><a href="https://i.postimg.cc/qvT0wLfX/Picture21.jpg" target='_blank'><img loading="lazy" src="https://i.postimg.cc/qvT0wLfX/Picture21.jpg" alt="" /></a></SwiperSlide>
          </Swiper>

          <div className="productcontent">
            <h2>SUITCASE STORAGE LAMINATED</h2>
            <h3>SIZE:- 20L X 16W X 12H</h3>
          </div>

        </div>
        <div className="product">
          <Swiper {...commonSwiperSettings}>
            <SwiperSlide><a href="https://i.postimg.cc/W4pVL11d/Picture23.jpg" target='_blank'><img loading="lazy" src="https://i.postimg.cc/W4pVL11d/Picture23.jpg" alt="" /></a></SwiperSlide>
            <SwiperSlide><a href="https://i.postimg.cc/0QbqjXmx/Picture24.jpg" target='_blank'><img loading="lazy" src="https://i.postimg.cc/0QbqjXmx/Picture24.jpg" alt="" /></a></SwiperSlide>
          </Swiper>

          <div className="productcontent">
            <h2>SUITCASE STORAGE LAMINATED PRINTED</h2>
            <h3>SIZE:- 20L X 16W X 12H</h3>
          </div>

        </div>
        <div className="product">
          <Swiper {...commonSwiperSettings}>
            <SwiperSlide><a href="https://i.postimg.cc/tgvLKdcc/Picture31.jpg" target='_blank'><img loading="lazy" src="https://i.postimg.cc/tgvLKdcc/Picture31.jpg" alt="" /></a></SwiperSlide>
            <SwiperSlide><a href="https://i.postimg.cc/LXrGX92B/Picture32.jpg" target='_blank'><img loading="lazy" src="https://i.postimg.cc/LXrGX92B/Picture32.jpg" alt="" /></a></SwiperSlide>
          </Swiper>

          <div className="productcontent">
            <h2>WALL HANGING STORAGE 5 POCKET</h2>
            <h3>SIZE:- 17 X 25</h3>
          </div>

        </div>
        <div className="product">
          <Swiper {...commonSwiperSettings}>
            <SwiperSlide><a href="https://i.postimg.cc/LXqr2YK8/Picture33.jpg" target='_blank'><img loading="lazy" src="https://i.postimg.cc/LXqr2YK8/Picture33.jpg" alt="" /></a></SwiperSlide>
          </Swiper>

          <div className="productcontent">
            <h2>HANGING BED POCKET </h2>
            <h3>SIZE:- 29 X 10</h3>
          </div>

        </div>
        <div className="product">
          <Swiper {...commonSwiperSettings}>
            <SwiperSlide><a href="https://i.postimg.cc/Z5VgNFJq/Picture38.jpg" target='_blank'><img loading="lazy" src="https://i.postimg.cc/Z5VgNFJq/Picture38.jpg" alt="" /></a></SwiperSlide>
            <SwiperSlide><a href="https://i.postimg.cc/25yt7b57/Picture39.jpg" target='_blank'><img loading="lazy" src="https://i.postimg.cc/25yt7b57/Picture39.jpg" alt="" /></a></SwiperSlide>
            <SwiperSlide><a href="https://i.postimg.cc/fbPr2ztn/Picture40.jpg" target='_blank'><img loading="lazy" src="https://i.postimg.cc/fbPr2ztn/Picture40.jpg" alt="" /></a></SwiperSlide>
            <SwiperSlide><a href="https://i.postimg.cc/cH85PpwK/Picture41.jpg" target='_blank'><img loading="lazy" src="https://i.postimg.cc/cH85PpwK/Picture41.jpg" alt="" /></a></SwiperSlide>
          </Swiper>

          <div className="productcontent">
            <h2>LAMINATED SUITCASE</h2>
            <h3>SIZE:- 24 X 12 X 10 / 24 X 18 X 15, 16 X 12 X 7</h3>
          </div>

        </div>
        <div className="product">
          <Swiper {...commonSwiperSettings}>
            <SwiperSlide><a href="https://i.postimg.cc/hvW3n212/Picture42.jpg" target='_blank'><img loading="lazy" src="https://i.postimg.cc/hvW3n212/Picture42.jpg" alt="" /></a></SwiperSlide>
            <SwiperSlide><a href="https://i.postimg.cc/SR61xcZk/Picture43.jpg" target='_blank'><img loading="lazy" src="https://i.postimg.cc/SR61xcZk/Picture43.jpg" alt="" /></a></SwiperSlide>
            <SwiperSlide><a href="https://i.postimg.cc/J7Z2xWRv/Picture44.jpg" target='_blank'><img loading="lazy" src="https://i.postimg.cc/J7Z2xWRv/Picture44.jpg" alt="" /></a></SwiperSlide>
          </Swiper>

          <div className="productcontent">
            <h2>ROUND TAPASTY STORAGE</h2>
            <h3>SIZE:- 13D X 12H, 12D X 12H, 10D X 9H</h3>
          </div>

        </div>
        <div className="product">
          <Swiper {...commonSwiperSettings}>
            <SwiperSlide><a href="https://i.postimg.cc/15SYYYtt/Picture45.jpg" target='_blank'><img loading="lazy" src="https://i.postimg.cc/15SYYYtt/Picture45.jpg" alt="" /></a></SwiperSlide>
            <SwiperSlide><a href="https://i.postimg.cc/VLFHyBrF/Picture46.jpg" target='_blank'><img loading="lazy" src="https://i.postimg.cc/VLFHyBrF/Picture46.jpg" alt="" /></a></SwiperSlide>
          </Swiper>

          <div className="productcontent">
            <h2>ROUND STORAGE HEAVY CANVAS PRINTED</h2>
            <h3>SIZE:- 16D X 22H</h3>
          </div>

        </div>
        <div className="product">
          <Swiper {...commonSwiperSettings}>
            <SwiperSlide><a href="https://i.postimg.cc/t4Cv9ZFG/Picture47.jpg" target='_blank'><img loading="lazy" src="https://i.postimg.cc/t4Cv9ZFG/Picture47.jpg" alt="" /></a></SwiperSlide>
            <SwiperSlide><a href="https://i.postimg.cc/L8CC59VY/Picture48.jpg" target='_blank'><img loading="lazy" src="https://i.postimg.cc/L8CC59VY/Picture48.jpg" alt="" /></a></SwiperSlide>
            <SwiperSlide><a href="https://i.postimg.cc/ZqWfyGff/Picture49.jpg" target='_blank'><img loading="lazy" src="https://i.postimg.cc/ZqWfyGff/Picture49.jpg" alt="" /></a></SwiperSlide>
            <SwiperSlide><a href="https://i.postimg.cc/VN2K9Kpz/Picture50.jpg" target='_blank'><img loading="lazy" src="https://i.postimg.cc/VN2K9Kpz/Picture50.jpg" alt="" /></a></SwiperSlide>
            <SwiperSlide><a href="https://i.postimg.cc/d1d458cr/Picture51.jpg" target='_blank'><img loading="lazy" src="https://i.postimg.cc/d1d458cr/Picture51.jpg" alt="" /></a></SwiperSlide>
            <SwiperSlide><a href="https://i.postimg.cc/7hkXdfqc/Picture52.jpg" target='_blank'><img loading="lazy" src="https://i.postimg.cc/7hkXdfqc/Picture52.jpg" alt="" /></a></SwiperSlide>
            <SwiperSlide><a href="https://i.postimg.cc/3NF9TYRw/Picture53.jpg" target='_blank'><img loading="lazy" src="https://i.postimg.cc/3NF9TYRw/Picture53.jpg" alt="" /></a></SwiperSlide>
            <SwiperSlide><a href="https://i.postimg.cc/L6vvQ9wC/Picture54.jpg" target='_blank'><img loading="lazy" src="https://i.postimg.cc/L6vvQ9wC/Picture54.jpg" alt="" /></a></SwiperSlide>
          </Swiper>

          <div className="productcontent">
            <h2>ROUND STORAGE LAMINATED</h2>
            <h3>SIZE:- 16D X 22H</h3>
          </div>

        </div>
        <div className="product">
          <Swiper {...commonSwiperSettings}>
            <SwiperSlide><a href="https://i.postimg.cc/v8r09Lzd/Picture55.jpg" target='_blank'><img loading="lazy" src="https://i.postimg.cc/v8r09Lzd/Picture55.jpg" alt="" /></a></SwiperSlide>
            <SwiperSlide><a href="https://i.postimg.cc/xT9tPJxN/Picture56.jpg" target='_blank'><img loading="lazy" src="https://i.postimg.cc/xT9tPJxN/Picture56.jpg" alt="" /></a></SwiperSlide>
          </Swiper>

          <div className="productcontent">
            <h2>UNDERBED LAMINATED NATURAL</h2>
            <h3>SIZE:- 30L X 18W X 6H</h3>
          </div>

        </div>
        <div className="product">
          <Swiper {...commonSwiperSettings}>
            <SwiperSlide><a href="https://i.postimg.cc/RZFdkrzM/Picture57.jpg" target='_blank'><img loading="lazy" src="https://i.postimg.cc/RZFdkrzM/Picture57.jpg" alt="" /></a></SwiperSlide>
            <SwiperSlide><a href="https://i.postimg.cc/ht5sgCSV/Picture58.jpg" target='_blank'><img loading="lazy" src="https://i.postimg.cc/ht5sgCSV/Picture58.jpg" alt="" /></a></SwiperSlide>
          </Swiper>

          <div className="productcontent">
            <h2>SUITCASE LAMINATED PRINTED</h2>
            <h3>SIZE:- 24 X 12 X 10 / 16 X 12 X 7</h3>
          </div>

        </div>
        <div className="product">
          <Swiper {...commonSwiperSettings}>
            <SwiperSlide><a href="https://i.postimg.cc/BvPgvx6k/Picture59.jpg" target='_blank'><img loading="lazy" src="https://i.postimg.cc/BvPgvx6k/Picture59.jpg" alt="" /></a></SwiperSlide>
            <SwiperSlide><a href="https://i.postimg.cc/pTNB5p5T/Picture60.jpg" target='_blank'><img loading="lazy" src="https://i.postimg.cc/pTNB5p5T/Picture60.jpg" alt="" /></a></SwiperSlide>
            <SwiperSlide><a href="https://i.postimg.cc/qR8xs42G/Picture61.jpg" target='_blank'><img loading="lazy" src="https://i.postimg.cc/qR8xs42G/Picture61.jpg" alt="" /></a></SwiperSlide>
            <SwiperSlide><a href="https://i.postimg.cc/qqwcFwbh/Picture62.jpg" target='_blank'><img loading="lazy" src="https://i.postimg.cc/qqwcFwbh/Picture62.jpg" alt="" /></a></SwiperSlide>
          </Swiper>

          <div className="productcontent">
            <h2>JUTE STORAGE BASKET</h2>
            <h3>SIZE:- 9D X 10H / 10D X 11H, 11D X 12H, 12D X 13H</h3>
          </div>

        </div>
        <div className="product">
          <Swiper {...commonSwiperSettings}>
            <SwiperSlide><a href="https://i.postimg.cc/v8tvD8YY/Picture63.jpg" target='_blank'><img loading="lazy" src="https://i.postimg.cc/v8tvD8YY/Picture63.jpg" alt="" /></a></SwiperSlide>
            <SwiperSlide><a href="https://i.postimg.cc/sgvPnppx/Picture64.jpg" target='_blank'><img loading="lazy" src="https://i.postimg.cc/sgvPnppx/Picture64.jpg" alt="" /></a></SwiperSlide>
          </Swiper>

          <div className="productcontent">
            <h2>WARDROBE SMALL HONEYCOMB DESIGN</h2>
            <h3>SIZE:- 24 X 39</h3>
          </div>

        </div>
        <div className="product">
          <Swiper {...commonSwiperSettings}>
            <SwiperSlide><a href="https://i.postimg.cc/Ss3jxMnT/Picture65.jpg" target='_blank'><img loading="lazy" src="https://i.postimg.cc/Ss3jxMnT/Picture65.jpg" alt="" /></a></SwiperSlide>
            <SwiperSlide><a href="https://i.postimg.cc/ZRCCmc5v/Picture66.jpg" target='_blank'><img loading="lazy" src="https://i.postimg.cc/ZRCCmc5v/Picture66.jpg" alt="" /></a></SwiperSlide>
            <SwiperSlide><a href="https://i.postimg.cc/bvYZC8XT/Picture67.jpg" target='_blank'><img loading="lazy" src="https://i.postimg.cc/bvYZC8XT/Picture67.jpg" alt="" /></a></SwiperSlide>
            <SwiperSlide><a href="https://i.postimg.cc/DzC8RDnK/Picture68.jpg" target='_blank'><img loading="lazy" src="https://i.postimg.cc/DzC8RDnK/Picture68.jpg" alt="" /></a></SwiperSlide>
          </Swiper>

          <div className="productcontent">
            <h2>LUNCH BOX</h2>
            <h3>SIZE:- AVERAGE</h3>
          </div>

        </div>
        <div className="product">
          <Swiper {...commonSwiperSettings}>
            <SwiperSlide><a href="https://i.postimg.cc/8cvcJzW1/Picture69.jpg" target='_blank'><img loading="lazy" src="https://i.postimg.cc/8cvcJzW1/Picture69.jpg" alt="" /></a></SwiperSlide>
            <SwiperSlide><a href="https://i.postimg.cc/kMRBhfHk/Picture70.jpg" target='_blank'><img loading="lazy" src="https://i.postimg.cc/kMRBhfHk/Picture70.jpg" alt="" /></a></SwiperSlide>
            <SwiperSlide><a href="https://i.postimg.cc/Nfh5hRqL/Picture71.jpg" target='_blank'><img loading="lazy" src="https://i.postimg.cc/Nfh5hRqL/Picture71.jpg" alt="" /></a></SwiperSlide>
          </Swiper>

          <div className="productcontent">
            <h2>COTTON BAG PACK</h2>
            <h3>SIZE:- 14 X 16</h3>
          </div>

        </div>
        <div className="product">
          <Swiper {...commonSwiperSettings}>
            <SwiperSlide><a href="https://i.postimg.cc/Nf1LQLBD/Picture72.jpg" target='_blank'><img loading="lazy" src="https://i.postimg.cc/Nf1LQLBD/Picture72.jpg" alt="" /></a></SwiperSlide>
            <SwiperSlide><a href="https://i.postimg.cc/FHNzzmK4/Picture73.jpg" target='_blank'><img loading="lazy" src="https://i.postimg.cc/FHNzzmK4/Picture73.jpg" alt="" /></a></SwiperSlide>
            <SwiperSlide><a href="https://i.postimg.cc/nh2zQ5sQ/Picture74.jpg" target='_blank'><img loading="lazy" src="https://i.postimg.cc/nh2zQ5sQ/Picture74.jpg" alt="" /></a></SwiperSlide>
          </Swiper>

          <div className="productcontent">
            <h2>HANGING HANDBAG ORGANIZER</h2>
            <h3>SIZE:- 15 X 36</h3>
          </div>

        </div>
        <div className="product">
          <Swiper {...commonSwiperSettings}>
            <SwiperSlide><a href="https://i.postimg.cc/VNNN9RMZ/Picture75.jpg" target='_blank'><img loading="lazy" src="https://i.postimg.cc/VNNN9RMZ/Picture75.jpg" alt="" /></a></SwiperSlide>
            <SwiperSlide><a href="https://i.postimg.cc/25XS0Z7k/Picture76.jpg" target='_blank'><img loading="lazy" src="https://i.postimg.cc/25XS0Z7k/Picture76.jpg" alt="" /></a></SwiperSlide>
          </Swiper>

          <div className="productcontent">
            <h2>STORAGE SET</h2>
            <h3>LAUNDRY BAG, SHOE RACK, COAT COVER, RECTANGLE, HEAVY TOTE BAG, STORAGE BOX, UNDER BED</h3>
          </div>

        </div>
        <div className="product">
          <Swiper {...commonSwiperSettings}>
            <SwiperSlide><a href="https://i.postimg.cc/XJG7mYsw/Picture77.jpg" target='_blank'><img loading="lazy" src="https://i.postimg.cc/XJG7mYsw/Picture77.jpg" alt="" /></a></SwiperSlide>
            <SwiperSlide><a href="https://i.postimg.cc/zBsXrYQ4/Picture78.jpg" target='_blank'><img loading="lazy" src="https://i.postimg.cc/zBsXrYQ4/Picture78.jpg" alt="" /></a></SwiperSlide>
          </Swiper>

          <div className="productcontent">
            <h2>HEAVY CANVAS TOTE BAG</h2>
            <h3>SIZE:- 18 X 14 X 22</h3>
          </div>

        </div>
        <div className="product">
          <Swiper {...commonSwiperSettings}>
            <SwiperSlide><a href="https://i.postimg.cc/Gtv33Swt/Picture79.jpg" target='_blank'><img loading="lazy" src="https://i.postimg.cc/Gtv33Swt/Picture79.jpg" alt="" /></a></SwiperSlide>
          </Swiper>

          <div className="productcontent">
            <h2>STORAGE BOX</h2>
            <h3>SIZE:- 12 X 12 X 7</h3>
          </div>

        </div>
        <div className="product">
          <Swiper {...commonSwiperSettings}>
            <SwiperSlide><a href="https://i.postimg.cc/mZ9gShz4/Picture80.jpg" target='_blank'><img loading="lazy" src="https://i.postimg.cc/mZ9gShz4/Picture80.jpg" alt="" /></a></SwiperSlide>
          </Swiper>

          <div className="productcontent">
            <h2>LAMINATED ROLL CRUNCH</h2>
            <h3>SIZE:- 10D X 12H</h3>
          </div>

        </div>
        

      </div>

    </div>
  );
}

export default Bags