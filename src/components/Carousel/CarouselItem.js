import PropTypes from 'prop-types';
import { memo } from 'react';
import styles from './Carousel.module.scss';

const CarouselItem = ({ item, style, goTo, index, activeItem }) => {
  return (
    <div 
      className={`${styles.item} ${index === activeItem ? styles.active : ''}`} 
      style={style} 
      onClick={goTo}
    >
      <img src={item.src} alt={item.alt} />
    </div>
  );
};

CarouselItem.propTypes = {
  item: PropTypes.object.isRequired,
  style: PropTypes.object,
  goTo: PropTypes.func,
  index: PropTypes.number,
  activeItem: PropTypes.number,
};

export default memo(CarouselItem);
