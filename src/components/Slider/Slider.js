import SliderItem from "./SliderItem";
import styles from './Slider.module.scss';
import { useState, useRef, useEffect } from "react";
import PropTypes from 'prop-types';
import { defaultSettings } from "./settings";
import { utils } from "./utils/Utils";


const Slider = ({items, ...settings}) => {
  const settingsList = utils.settingsCheck(defaultSettings, settings);
  const ref = useRef(null);
  const [layoutWidth, setLayoutWidth] = useState(1);
  const [layoutHeight, setLayoutHeight] = useState(1);
  const [sizing, setSizing] = useState(1);
  const [count, setCount] = useState(1);
  const [width, setWidth] = useState(1);
  const [height, setHeight] = useState(1);
  const [itemsList, setItemsList] = useState([]);
  const [itemsPerView, setItemsPerView] = useState(1);
  const resizeHandler = () => {
    setCount(ref.current.children.length);
    setItemsPerView(settingsList.itemsPerView);
    setSizing(utils.findItemSize(layoutWidth, itemsPerView)); 
    console.log(sizing)
    setWidth(sizing);
    setHeight(sizing);
    setLayoutWidth(ref.current.offsetWidth);
    setLayoutHeight(height * settingsList.centerScale);
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
        className={styles['flip-layout']} 
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
                settingsList.centerMode,
                settingsList.centerScale,
                settingsList.perspective,
                settingsList.noCenterScale,
                settingsList.leftRotate,
                settingsList.rightRotate,
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
