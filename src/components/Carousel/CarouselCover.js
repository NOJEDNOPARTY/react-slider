import React  from 'react';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './Carousel.module.scss';
import Carousel from './Carousel';
import CarouselDots from './CarouselDots';
import CarouselArrows from './CarouselArrows';
import { defaultSettings } from './utils/settings';
import { getSize, breakPointsHandler } from './utils/utils';

const CarouselCover = ({ items, ...stngs }) => { 
  const [settings, setSettings] = useState({ ...defaultSettings, ...stngs });
  const [activeItem, setActiveItem] = useState(items.length < settings.activeItem ? Math.ceil((items.length - 1) / 2) : settings.activeItem);
  const stylesData = getSize(settings);
  const resizeHandler = () => {
    breakPointsHandler(stngs, settings, window.innerWidth, setSettings);
  };

  useEffect(() => {
    window.addEventListener('resize', resizeHandler);
    return () => window.removeEventListener('resize', resizeHandler);
  });

  return (
    <div className={styles.flp} style={stylesData} onLoad={resizeHandler}>
      <Carousel items={items} activeItem={activeItem} goTo={setActiveItem} settings={settings} />
      <CarouselDots items={items} activeItem={activeItem} goTo={setActiveItem} dots={settings.dots} />
      <CarouselArrows length={items.length} activeItem={activeItem} goTo={setActiveItem} arrows={settings.arrows} />
    </div>
  );
};

CarouselCover.propTypes = {
  items: PropTypes.array.isRequired,
  settings: PropTypes.object,
};

export default CarouselCover;

