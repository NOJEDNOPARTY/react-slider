import SliderItem from "./SliderItem";
import SliderDot from "./SliderDot";
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
  const [width, setWidth] = useState(1);
  const [height, setHeight] = useState(1);
  const [itemsList, setItemsList] = useState([]);
  const [itemsPerView, setItemsPerView] = useState(1);
  const [scaleCenter, setScaleCenter] = useState(1);
  const [intermediate, setScaleIntermediate] = useState(1);
  const [activeIndex, setActiveIndex] = useState(1);
  const resizeHandler = () => {
    setActiveIndex(settingsList.centerItemIndex);
    setItemsPerView(settingsList.itemsPerView);
    setSizing(utils.findItemSize(layoutWidth, itemsPerView)); 
    setWidth(sizing);
    setHeight(sizing);
    setLayoutWidth(ref.current.offsetWidth);
    setLayoutHeight(height * settingsList.centerScale);
    setItemsList([...ref.current.children]);
    setScaleCenter(settingsList.centerScale);
    setScaleIntermediate(settingsList.noCenterScale);
  };

  useEffect(() => {
    window.addEventListener('resize', resizeHandler);
    return () => window.removeEventListener('resize', resizeHandler);
  });

  const dotsViewer = () =>{
    return settingsList.dots === false ? null : (
      <div className={styles['flip-dots']}>
        {
          items.map((item, index) => {
            return <SliderDot
              key={index}
              index={index}
              indexChanger={setActiveIndex}
              activeItem = {activeIndex}
            />
          })
        }
      </div>
    )
  };

  return (
    <div className={styles.flip}>
      <div 
        onLoad={resizeHandler} 
        className={styles['flip-layout']} 
        style={{
          position: 'relative',
          width: '100%',
          overflow: 'hidden',
          height: layoutHeight
        }}
        ref={ref}
      > 
        {
          items.map((image, index) => {
            return <SliderItem
              key={index}
              index={index}
              indexChanger={setActiveIndex}
              activeItem = {activeIndex}
              style={
                utils.positions.calc(
                  width, 
                  height, 
                  index,
                  itemsList,
                  activeIndex,
                  settingsList.centerMode,
                  scaleCenter,
                  settingsList.perspective,
                  intermediate,
                  settingsList.leftRotate,
                  settingsList.rightRotate,
                )
              }
              image={image}
            />
          })
        }
      </div>
      {dotsViewer()}
    </div>
  );
};

Slider.propTypes = {
  items: PropTypes.array.isRequired,
  settings: PropTypes.object,
};

export default Slider;
