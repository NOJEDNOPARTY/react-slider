import PropTypes from 'prop-types';
import styles from './Carousel.module.scss';


const CarouselDot = ({items, activeItem, goTo, dots}) => {
  return dots === false && items.length > 0 ? null : (
    <div className={styles['flp-dots']}>
      {
        items.map((item, i) => {
          return (
            <div 
              className={`${styles['flp-dot']} ${i === activeItem ? styles['flp-dot-active'] : ''}`} 
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