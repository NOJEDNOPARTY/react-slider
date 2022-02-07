import React  from 'react';
import PropTypes from 'prop-types';
import { useRef } from 'react';
import Swipe from 'react-easy-swipe';
import styles from './Carousel.module.scss';
import CarouselItem from './CarouselItem';
import { getTransformStyles, handleWheel } from './utils/utils';

const Carousel = ({ items, activeItem, goTo, settings }) => {
  const toggleWheel = useRef(true);
  let positionSwipe = 0;
  const onSwipeStart =  () => positionSwipe = 0;
  const onSwipeMove = position => positionSwipe = position.x;
  const onSwipeEnd = () => positionSwipe > 0 ? goTo(activeItem + 1) : positionSwipe < 0 ? goTo(activeItem - 1) : positionSwipe = 0;

  return (
    <Swipe
      onSwipeStart={onSwipeStart}
      onSwipeMove={onSwipeMove}
      onSwipeEnd={onSwipeEnd}
      allowMouseEvents
    >
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
                style={getTransformStyles(i - activeItem, items.length, settings)}
                goTo={() => goTo(i)}
              />
            );
          })
        }
      </div>
    </Swipe>
  );
};

Carousel.propTypes = {
  items: PropTypes.array.isRequired,
  activeItem: PropTypes.number,
  goTo: PropTypes.func,
  settings: PropTypes.object,
};

export default Carousel;

