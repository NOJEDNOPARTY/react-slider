import PropTypes from 'prop-types';
import styles from './Carousel.module.scss';

const CarouselItem = ({item, style, goTo, index, activeItem}) => {
  return (
    <div 
      className={`${styles['flp-item']} ${index === activeItem ? styles['flp-item-active'] : ''}`} 
      style={style} 
      onClick={goTo}
    >
      <img src={item.src} alt={item.alt} />
    </div>
  )
};

CarouselItem.propTypes = {
  item: PropTypes.object.isRequired,
  style: PropTypes.object,
  goTo: PropTypes.func,
  index: PropTypes.number,
  activeItem: PropTypes.number,
};

export default CarouselItem;
