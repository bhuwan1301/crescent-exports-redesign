import 'swiper/css';
import 'swiper/swiper-bundle.css';
import Tiebacks from './Products/Tiebacks';
import Bags from './Products/Bags';
import './Products.scss';

const Products = () => {

  return (
    <div>
      <div className="linkstoproducts">
        <div className="link-button-row">
          <a href="#bagsection" className="link-button">BAGS</a>
          <a href="#tiebacksection" className="link-button">TIEBACKS</a>
        </div>
      </div>

      <Bags />
      <Tiebacks />
    </div>
  );
}

export default Products