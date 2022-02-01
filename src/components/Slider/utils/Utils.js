export const utils = {
  findItemSize: (containerWidth, itemsPerView) => {
    return +(containerWidth / itemsPerView);
  },
  

  getWindowDimensions: () => {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  },

  settingsCheck: (defaultSettings, settings) => {
    const settingsChanged = {...defaultSettings};
    if(!settings) {
      return defaultSettings;
    }
    for(let key in defaultSettings) {
      if(defaultSettings[key] !== settings[key]) {
        settings[key] === undefined ? settingsChanged[key] = defaultSettings[key] : settingsChanged[key] = settings[key];
      }
    }
    return settingsChanged;
  },

  breakPointsHandler: (bp, settingsList, updateSettings, windowWidth) => {
    if(bp.length > 0) {
      let breakpoints = bp.map(breakpt => breakpt.breakpoint);
      breakpoints.sort((x, y) => y - x);
      let breakpoint = breakpoints.find(bp => bp <= windowWidth);
      let newSettings = {};
      for(let key in settingsList.breakpoints){
        if(settingsList.breakpoints[key].breakpoint === breakpoint) {
          newSettings = settingsList.breakpoints[key].settings;
          return updateSettings(utils.settingsCheck(settingsList, newSettings));
        }
      }

    }
  },

  positions: {

    indexChecking: (items, centerItemIndex) => {
      const leftCount = [];
      const rightCount = [];
      for(let i = 1; i <= items.length; i++) {
        if (centerItemIndex > i)  leftCount.push(i);
        if (centerItemIndex < i)  rightCount.push(i);
      }
      leftCount.forEach((item, index) =>  leftCount[index] = index + 2);
      leftCount.reverse();
      rightCount.forEach((item, index) => rightCount[index] = index + 1);

      return [...leftCount, ...[1], ...rightCount];
    },

    calc: (width, height, index, items, centerItemIndex, centerMode, centerScale, perspective, noCenterScale, leftRotate, rightRotate) => {
      let multiplier = null || 1;
      let setPosition;
      let transform;
      let shift = 0;

      if(centerMode === true) {
        const indexChecked = utils.positions.indexChecking(items, centerItemIndex);
        multiplier = indexChecked[index];

        if (index+1 <= centerItemIndex) {
          (index+1 === centerItemIndex) ? setPosition = utils.positions.left(width, multiplier, shift) :
          setPosition = utils.positions.left(width, multiplier, shift);

          (index+1 === centerItemIndex) ? transform = utils.positions.transform(perspective, centerScale, '0deg') : 
          transform = utils.positions.transform(perspective, noCenterScale, leftRotate);
        };
        if (index+1 > centerItemIndex) {
          setPosition = utils.positions.right(width, multiplier);
          transform = utils.positions.transform(perspective, noCenterScale, rightRotate);
        };


      }

      

      return {
        cursor: 'pointer',
        position: 'absolute',
        display: 'block',
        overflow: 'hidden',
        width: width,
        height: height,
        top: utils.positions.top(height),
        left: setPosition,
        transform: transform,
        transition: '0.7s ease-in-out',
      };
    },
    
    top: (height) => {
      return `calc(50% - ${height / 2}px)`;
    },

    left: (width, multiplier, shift) => {
      return multiplier === 0 ? 0 : `calc(50% - ${((width * multiplier) - (width / 2))}px)`;
    },

    right: (width, multiplier) => {
      return multiplier === 0 ? 0 : `calc(50% + ${(width * multiplier) - (width / 2)}px)`;
    },

    transform: (perspective, scale, rotate) => {
      return `perspective(${perspective}px) rotate3d(0, 1, 0, ${rotate}) scale(${scale})`;
    },
  },
};