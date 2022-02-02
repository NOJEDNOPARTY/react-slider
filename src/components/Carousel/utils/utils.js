export const getTransformStyles = (shift, itemsCount) => {
  const scale = (shift === 0) ? 1 : 0.8 - 0.1 * Math.abs(shift);
  const rotateY = - Math.sign(shift) * 45;
  const translateX = 25 * shift + 50 * Math.sign(shift);
  const zIndex = itemsCount - Math.abs(shift);
  return {
    transform: `translateX(${translateX}%) rotateY(${rotateY}deg) scale(${scale})`,
    zIndex
  };
}