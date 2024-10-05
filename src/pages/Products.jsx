import 'swiper/css';
import 'swiper/swiper-bundle.css';
import Tiebacks from './Products/Tiebacks';
import Bags from './Products/Bags';
import './Products.scss';

const Products = () => {

  return (
    <div>
      <div className="linkstoproducts">

        <a href="#bagssection">BAGS</a>
        <a href="#tiebackssection">TIEBAKCKS</a>

      </div>

      <Bags />
      <Tiebacks />
    </div>
  );
}

export default Products