import React  from 'react';
import PropTypes from 'prop-types';
import { useState } from "react";
import styles from './Carousel.module.scss';
import CarouselItem from './CarouselItem';
import {getTransformStyles} from './utils/utils';


const Carousel = ({items, activeItem, goTo}) => {
  const [toggleWheel, setToggleWheel] = useState(true);

  const handleScroll = (e) => {
    if(toggleWheel) {
      if (e.nativeEvent.wheelDeltaX > 0 && activeItem < items.length) {
        goTo(activeItem+1);
        console.log(activeItem)
      } else if (e.nativeEvent.wheelDeltaX < 0 && activeItem >= 0) {
        goTo(activeItem-1);
      }
      setToggleWheel(false);
    }
  };


  return (
    <div 
      className={styles['flp-layout']}
      onWheel={handleScroll}
      onTransitionEnd={() => {
        setToggleWheel(true)
      }}
    >
      {
        items.map((item, i) => {
          return <CarouselItem  
            item={item} 
            index={i}
            activeItem={activeItem}
            key={i}
            style={getTransformStyles(i - activeItem, items.length)}
            goTo={() => {goTo(i)}}
          />;
        })
      }
    </div>
  );
};

Carousel.propTypes = {
  items: PropTypes.array.isRequired,
  activeItem: PropTypes.number,
  goTo: PropTypes.func,
};

export default Carousel;

