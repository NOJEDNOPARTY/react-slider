import React  from 'react';
import { useState } from "react";
import PropTypes from 'prop-types';
import styles from './Carousel.module.scss';
import Carousel from './Carousel';
import CarouselDots from './CarouselDots';


const CarouselCover = ({items, ...stngs}) => { 
  const [activeItem, setActiveItem] = useState(items.length < stngs.activeItem ? Math.ceil(items.length / 2) : stngs.activeItem);

  return (
    <div className={styles['flp']}>
      <Carousel     items={items} activeItem={activeItem} goTo={setActiveItem} />
      <CarouselDots items={items} activeItem={activeItem} goTo={setActiveItem} dots={stngs.dots}/>
    </div>
  );
};

CarouselCover.propTypes = {
  items: PropTypes.array.isRequired,
  stngs: PropTypes.object,
};

export default CarouselCover;

