export const utils = {
  findItemSize: (containerWidth, count) => {
    return +(containerWidth / count);
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

    // transform:  perspective(400px) rotate3d(0, 1, 0, 30deg) scale(0.93); 

    calc: (width, height, index, items, centerItemIndex, centerMode, centerScale, perspective, noCenterScale, leftRotate, rightRotate) => {
      let multiplier = null;
      let setPosition = null;
      let transform = null;
      let scale = 1;

      if(centerMode === true) {
        const indexChecked = utils.positions.indexChecking(items, centerItemIndex);
        multiplier = indexChecked[index];

        (index+1 <= centerItemIndex) ? setPosition = utils.positions.left(width, multiplier) :
        (index+1 > centerItemIndex) ?  setPosition = utils.positions.right(width, multiplier) :
        setPosition = utils.positions.left(width, multiplier);

        transform = '';

        console.log(transform)


      }

      

      return {
        position: 'absolute',
        display: 'block',
        overflow: 'hidden',
        width: width,
        height: height,
        top: utils.positions.top(height),
        left: setPosition,
        transform: transform,
      };
    },

    center: (count, item) => {

    },
    
    top: (height) => {
      return `calc(50% - ${height / 2}px)`;
    },

    left: (width, multiplier) => {
      return multiplier === 0 ? 0 : `calc(50% - ${(width * multiplier) - (width / 2)}px)`;
    },

    right: (width, multiplier) => {
      return multiplier === 0 ? 0 : `calc(50% + ${(width * multiplier) - (width / 2)}px)`;
    },

    //  создать трансформ в зависимости в центре или селва элемент, так же просмотреть вариант того что может и отключен центральный мод. Потом можно сдеелать через стейт по клику менять индекс который посылается как активный слайд, таким образом сделать переключение между слайдами.

    // transform: (index, centerItemIndex, perspective, noCenterScale, centerScale, leftRotate, rightRotate) => {
    //   return `perspective(${perspective}px) rotate3d(0, 1, 0, 30deg) scale(${noCenterScale})`
    // },
  },
};