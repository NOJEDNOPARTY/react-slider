import Slides from "./Slides";
import styles from './Slider.module.scss';
import { useState, useRef, useEffect } from "react";
import PropTypes from 'prop-types';

const Slider = ({items, ...settings}) => {

  const ref = useRef(0);
  const [layoutWidth, setLayoutWidth] = useState(0);
  const [layoutHeight, setLayoutHeight] = useState(0);

  const resizeHandler = () => {
    setLayoutWidth(ref.current.offsetWidth);
  };

  const layoutHandler =  (height) => {
    return setLayoutHeight(height * settings.centerScale);
  };
  
  useEffect(() => {
    window.addEventListener('resize', resizeHandler);
    return () => window.removeEventListener('resize', resizeHandler);
  });

  return (
    <div className={styles.flip}>
      <div 
        onLoad={resizeHandler} 
        style={{
          position: 'relative',
          width: '100%',
          overflow: 'hidden',
          height: layoutHeight
        }}  
        className={styles.flip_layout} 
        ref={ref}
      > 
        <Slides 
          layoutHandler={layoutHandler}
          layoutWidth={layoutWidth} 
          items={items}
        />
      </div>
    </div>
  );
};



Slider.propTypes = {
  images: PropTypes.object,
  getElementWidth: PropTypes.func
};

export default Slider;
