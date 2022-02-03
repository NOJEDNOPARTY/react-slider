import PropTypes from 'prop-types';
import styles from './Carousel.module.scss';

const CarouselArrows = ({ length, activeItem, goTo, arrows }) => {
  return arrows === false || length < 2 ? null : (
    <div className={styles.arrows}>
      <button 
        className={`${styles.arrow} ${styles.prev} ${activeItem === 0 ? styles.disabled : ''}`}
        onClick={() => goTo(activeItem === 0 ? activeItem : activeItem - 1)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path d="M10.477 0h-8.977l12.024 12-12.024 12h8.977l12.023-12z" />
        </svg>
      </button>
      <button 
        className={`${styles.arrow} ${styles.next} ${activeItem === length - 1 ? styles.disabled : ''}`}
        onClick={() => goTo(activeItem === length - 1 ? activeItem : activeItem + 1)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path d="M10.477 0h-8.977l12.024 12-12.024 12h8.977l12.023-12z" />
        </svg>
      </button>
    </div>
  );
};

CarouselArrows.propTypes = {
  length: PropTypes.number,
  activeItem: PropTypes.number,
  goTo: PropTypes.func,
  arrows: PropTypes.bool,
};

export default CarouselArrows;