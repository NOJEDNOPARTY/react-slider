export const getTransformStyles = ( shift, itemsCount, settings ) => {
  const transform = settings.transform;
  const scale = ( shift === 0 ) ? transform.scale.active : transform.scale.noActive - transform.scale.distantScale * Math.abs(shift);
  const rotateY = - Math.sign(shift) * transform.rotateY;
  const translateX = transform.translateX.shift * shift + transform.translateX.startShift * Math.sign(shift);
  const zIndex = itemsCount - Math.abs(shift);
  return {
    transform: `translateX(${translateX}%) rotateY(${rotateY}deg) scale(${scale})`,
    zIndex,
  };
};

export const getStyles = settings => {
  return { 
    '--topPosition': '50%', 
    '--leftPosition': `${settings.centerMode === true ? 50 : 0}%`,
    '--itemWidth': `${settings.itemWidth}px`,
    '--itemHeight': `${settings.itemHeight}px`,
    '--itemMarginLeft': `-${settings.centerMode === true ? settings.itemWidth / 2 : 0}px`,
    '--itemMarginTop': `-${settings.itemHeight / 2}px`,
    '--layoutPerspective': `${settings.transform.perspective}`,
    '--layoutPerspectiveOrigin': `${settings.transform.perspectiveOrigin}`,
    '--layoutHeight': `${(settings.transform.scale.active > settings.transform.scale.noActive ? settings.transform.scale.active : settings.transform.scale.noActive) * settings.itemHeight}px`,
  };
};

export const handleWheel = ( e, activeItem, toggleWheel, length, goTo ) => {
  if( toggleWheel.current ) {
    toggleWheel.current = false;
    e.nativeEvent.wheelDeltaX > 0 && activeItem < length - 1 
      ? goTo(activeItem + 1) 
      : (e.nativeEvent.wheelDeltaX < 0 && activeItem > 0) 
      ? goTo(activeItem - 1) 
      : toggleWheel.current = true;
  }
};

export const breakPointsHandler = (startSettings, settings, windowWidth, setSettings) => {
  if(settings.breakpoints.length > 0) {
    const breakpoints = settings.breakpoints
      .map(breakpt => breakpt.breakpoint)
      .sort((x, y) => y - x);
    const breakpoint = breakpoints.find(bp => bp <= windowWidth);
    for(const key in settings.breakpoints){
      if(settings.breakpoints[key].breakpoint === breakpoint) {
        const changedSettings = windowWidth > settings.breakpoints[settings.breakpoints.length - 1].breakpoint 
          ? { ...startSettings, ...settings.breakpoints[key].settings } 
          : { ...settings, ...settings.breakpoints[key].settings };

        return setSettings(changedSettings);
      }
    }
  }
};
