import React  from 'react';
import './App.css';
import CarouselCover from './components/Carousel/CarouselCover';

const App = () => {
  const images = [
    { src: '/images/1.jpg', alt: '1' },
    { src: '/images/2.jpg', alt: '2' },
    { src: '/images/3.jpg', alt: '3' },
    { src: '/images/4.jpg', alt: '4' },
    { src: '/images/5.jpg', alt: '5' },
    { src: '/images/6.jpg', alt: '6' },
    { src: '/images/7.jpg', alt: '7' },
  ];
  
  const settings = {
    centerMode: true,
    activeItem: 3,
    dots: true,
    arrows: true,
    itemWidth: 400,
    itemHeight: 400,
    transform: {
      scale: {
        active: 1,
        noActive: 0.8,
        distantScale: 0.05,
      },
      rotateY: 45,
      perspective: '2000px',
      perspectiveOrigin: 'center',
      translateX: {
        startShift: 50,
        shift: 25,
      },
    },
    breakpoints: [
      {
        breakpoint: 0,
        settings: {
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          dots: false,
          arrows: false,
        },
      },
      {
        breakpoint: 993,
        settings: {},
      },
    ],
  };
  return (
    <div className="App">
      <section className="carousel">
        <div className="wrapper">
          <CarouselCover items={images} {...settings} />
        </div>
      </section>
    </div>
  );
};

export default App;
