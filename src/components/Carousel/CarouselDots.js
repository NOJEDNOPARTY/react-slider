import PropTypes from 'prop-types';
import styles from './Carousel.module.scss';

const CarouselDot = ({ items, activeItem, goTo, dots }) => {

  return dots === false || items.length < 2 ? null : (
    <div className={styles.dots}>
      {
        items.map((item, i) => {
          return (
            <div 
              className={`${styles.dot} ${i === activeItem ? styles.active : ''}`} 
              onClick={() => goTo(i)} 
              key={i}
            >
              {i}
            </div>
          );
        })
      }
    </div>
  );
};

CarouselDot.propTypes = {
  items: PropTypes.array,
  activeItem: PropTypes.number,
  goTo: PropTypes.func,
  dots: PropTypes.bool,
};

export default CarouselDot;