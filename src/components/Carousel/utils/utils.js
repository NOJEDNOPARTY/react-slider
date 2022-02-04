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

export const getSize = stngs => {
  return { 
    '--topPosition': '50%', 
    '--leftPosition': `${stngs.centerMode === true ? 50 : 0}%`,
    '--itemWidth': `${stngs.itemWidth}px`,
    '--itemHeight': `${stngs.itemHeight}px`,
    '--itemMarginLeft': `-${stngs.centerMode === true ? stngs.itemWidth / 2 : 0}px`,
    '--itemMarginTop': `-${stngs.itemHeight / 2}px`,
    '--layoutPerspective': `${stngs.transform.perspective}`,
    '--layoutPerspectiveOrigin': `${stngs.transform.perspectiveOrigin}`,
    '--layoutHeight': `${(stngs.transform.scale.active > stngs.transform.scale.noActive ? stngs.transform.scale.active : stngs.transform.scale.noActive) * stngs.itemHeight}px`,
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
    const breakpoints = settings.breakpoints.map(breakpt => breakpt.breakpoint);
    breakpoints.sort((x, y) => y - x);
    const breakpoint = breakpoints.find(bp => bp <= windowWidth);
    for(const key in settings.breakpoints){
      if(settings.breakpoints[key].breakpoint === breakpoint) {
        const changedSettings = windowWidth > settings.breakpoints[settings.breakpoints.length - 1].breakpoint 
          ? { ...startSettings, ...settings } 
          : { ...settings, ...settings.breakpoints[key].settings };
        return setSettings(changedSettings);
      }
    }
  }
};
