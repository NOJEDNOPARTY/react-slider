export const utils = {
  centeredElement: (count, width) => {
    return Math.ceil((count * width) / 2)
  },
  findElementSize: (containerWidth, count) => {
    return containerWidth / count;
  },
  elementsCounter: (counter, setCount) => {
    return counter < 8 ? setCount(counter + 1) : setCount(counter);
  },
  positionsChecker: (width, height, index) => {
    return index === 0 ? 0 : `calc(50% - (${width * index} / 2))`;
  }
};