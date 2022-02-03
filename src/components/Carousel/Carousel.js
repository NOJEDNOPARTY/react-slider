import React  from 'react';
import PropTypes from 'prop-types';
import { useRef } from 'react';
import styles from './Carousel.module.scss';
import CarouselItem from './CarouselItem';
import { getTransformStyles, handleWheel } from './utils/utils';

const Carousel = ({ items, activeItem, goTo, ...settings }) => {
  const toggleWheel = useRef(true);
  return (
    <div 
      className={styles.layout}
      onWheel={e => handleWheel( e, activeItem, toggleWheel, items.length, goTo )}
      onTransitionEnd={e => e.propertyName === 'transform' && e.target.classList.contains(styles.active) ? toggleWheel.current = true : null}
    >
      {
        items.map((item, i) => {
          return (
            <CarouselItem  
              item={item} 
              index={i}
              activeItem={activeItem}
              key={i}
              style={getTransformStyles(i - activeItem, items.length, settings.centerMode)}
              goTo={() => goTo(i)}
            />
          );
        })
      }
    </div>
  );
};

Carousel.propTypes = {
  items: PropTypes.array.isRequired,
  activeItem: PropTypes.number,
  goTo: PropTypes.func,
  settings: PropTypes.object,
};

export default Carousel;

