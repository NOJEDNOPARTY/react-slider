export const utils = {
  findItemSize: (containerWidth, count) => {
    return containerWidth / count;
  },

  settingsCheck: (defaultSettings, settings) => {
    const settingsChanged = {...defaultSettings};
    if(!settings) {
      return defaultSettings;
    }
    for(let key in defaultSettings) {
      if(defaultSettings[key] !== settings[key]) {
        settings[key] === undefined ? settingsChanged[key] = defaultSettings[key] : settingsChanged[key] = settings[key]
      }
    }
    return settingsChanged;
  },

  positions: {
    indexChecking: (items, centerItemIndex) => {
      const leftItems = [];
      const rightItems = [];
      items.forEach((item, index) => {
        if(centerItemIndex > index+1) leftItems.push(index+1);
        if(centerItemIndex === index+1) leftItems.push(index+1);
        if(centerItemIndex < index+1) rightItems.push(index+1);
      });
      leftItems.sort((a, b) => b - a);
      rightItems.sort((a, b) => b - a);
      return [...leftItems, ...rightItems];
    },

    // почти готово, сейчас выводит массив с индексами нормально, но он выводит значения поочередно, а мне надо новый массив с 4,3,2,1,2,3,4 - что бы элементы получили нужные индексы для отоборажения.

    calc: (width, height, index, items, centerItemIndex, itemsLength, centerMode, centerScale, itemsPerView) => {
      let indexed = 0;
      if(centerMode === true) {
        const indexChecked = utils.positions.indexChecking(items, centerItemIndex);
        indexed = indexChecked[index];
      }

      return {
        position: 'absolute',
        width: width,
        height: height,
        top: utils.positions.top(height),
        left: utils.positions.left(width, indexed),
      };
    },

    center: (count, item) => {

    },
    
    top: (height) => {
      return `calc(50% - ${height / 2}px)`;
    },
    
    left: (width, index) => {
      return index === 0 ? 0 : `calc(50% - ${(width * index) / 2}px)`;
    },
    
    right: (width, index) => {
      return index === 0 ? 0 : `calc(50% + ${(width * index) / 2}px)`;
    },
  },
};