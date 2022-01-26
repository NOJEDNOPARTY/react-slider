import { useRef, useState, useEffect } from 'react';
import styles from './Slider.module.scss';
import { utils } from './utils/SliderUtils';

const Slides = ({items, layoutWidth, layoutHandler}) => {

  const ref = useRef(null);
  const [sizing, setSizing] = useState(0);
  const [count, setCount] = useState(1);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const resizeHandler = () => {
    utils.elementsCounter(count, setCount);
    setSizing(utils.findElementSize(layoutWidth, count));
    setWidth(sizing);
    setHeight(sizing);
    layoutHandler(height);
  };

  useEffect(() => {
    window.addEventListener('resize', resizeHandler);
    return () => window.removeEventListener('resize', resizeHandler);
  });

  return items.map((image, index) => ( 
    <div 
      onLoad={resizeHandler} 
      className={styles.flip_img} 
      key={index} 
      ref={ref} 
      style={{
        position: 'absolute',
        width: width,
        height: height,
        top: '0',
        left: utils.positionsChecker(width, height, index)
      }}
    >
      <img
        src = {
          image
        }
        alt = {
          index
        } 
      />
    </div>
  ));
}


export default Slides;