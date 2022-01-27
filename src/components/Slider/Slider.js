import SliderItem from "./SliderItem";
import styles from './Slider.module.scss';
import { useState, useRef, useEffect } from "react";
import PropTypes from 'prop-types';
import { defaultSettings } from "./settings";
import { utils } from "./utils/Utils";


const Slider = ({items, ...settings}) => {
  const settingsList = utils.settingsCheck(defaultSettings, settings);
  const ref = useRef(0);
  const [layoutWidth, setLayoutWidth] = useState(0);
  const [layoutHeight, setLayoutHeight] = useState(0);
  const [sizing, setSizing] = useState(0);
  const [count, setCount] = useState(1);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [itemsList, setItemsList] = useState([]);
  const resizeHandler = () => {
    setLayoutWidth(ref.current.offsetWidth); 
    setSizing(utils.findItemSize(layoutWidth, count));
    setWidth(sizing);
    setHeight(sizing);
    setLayoutHeight(height * settingsList.centerScale);
    setCount(ref.current.children.length);
    setItemsList([...ref.current.children]);
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
      {
        items.map((image, index) => {
          return <SliderItem
            key={index}
            index={index}
            style={
              utils.positions.calc(
                width, 
                height, 
                index,
                itemsList,
                settingsList.centerItemIndex,
                count,
                settingsList.centerMode,
                settingsList.centerScale,
                settingsList.itemsPerView
              )
            }
            image={image}
          />
        })
      }
    </div>
    </div>
  );
};

Slider.propTypes = {
  items: PropTypes.array.isRequired,
  settings: PropTypes.object,
};

export default Slider;
