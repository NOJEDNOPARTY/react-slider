export const getTransformStyles = ( shift, itemsCount ) => {
  const scale = ( shift === 0 ) ? 1 : 0.8 - 0.1 * Math.abs(shift);
  const rotateY = - Math.sign(shift) * 45;
  const translateX = 25 * shift + 50 * Math.sign(shift);
  const zIndex = itemsCount - Math.abs(shift);
  return {
    transform: `translateX(${translateX}%) rotateY(${rotateY}deg) scale(${scale})`,
    zIndex,
  };
};

export const size = stngs => {
  return { 
    '--topPosition': `${stngs.centerMode === true ? 50 : 0}%`, 
    '--leftPosition': `${stngs.centerMode === true ? 50 : 0}%`,
    '--itemWidth': `${stngs.itemWidth}px`,
    '--itemHeight': `${stngs.itemHeight}px`,
    '--itemMarginLeft': `-${stngs.centerMode === true ? stngs.itemWidth / 2 : 0}px`,
    '--itemMarginTop': `-${stngs.centerMode === true ? stngs.itemHeight / 2 : 0}px`,
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