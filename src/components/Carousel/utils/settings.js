export const defaultSettings = {
  centerMode: true,
  activeItem: 0,
  dots: true,
  arrows: true,
  itemWidth: 400,
  itemHeight: 400,
  transform: {
    scale: {
      active: 1,
      noActive: 0.8,
      distantScale: 0.1,
    },
    rotateY: 45,
    perspective: '2000px',
    perspectiveOrigin: 'center',
    translateX: {
      startShift: 50,
      shift: 25,
    },
  },
  breakpoints: [],
};

// scale setting will show how you will scale your active and not active items
// rotate show you how you will rotate your item in perspective
// translate need for show you items in list one by one 
// u can use paddings form item wrapper for create a distance beetween items or u can set translate bigger
// scale will be object with active scale and another items scale 