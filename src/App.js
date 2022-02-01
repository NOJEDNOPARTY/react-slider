import React  from 'react';
import './App.css';
import Slider from './components/Slider/Slider';

const App = () => {
  const images = [
    '/images/1.jpg',
    '/images/2.jpg',
    '/images/3.jpg',
    '/images/4.jpg',
    '/images/5.jpg',
    '/images/6.jpg',
    '/images/7.jpg',
  ];
  const settings = {
    centerMode: true,
    dots: true,
    centerScale: 1.2,
    noCenterScale: 1,
    centerItemIndex: 4,
    itemsPerView: 7,
    perspective: 400,
    leftRotate: '35deg', 
    rightRotate: '-35deg', 
    breakpoints: [
      {
        breakpoint: 0,
        settings: {
          dots: false,
          itemsPerView: 3,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          dots: true,
        },
      },
    ],
  }
  return (
    <div className='App'>
      <section className='carousel'>
        <div className='wrapper'>
          <Slider items={images} {...settings} />
        </div>
      </section>
    </div>
  );
}

export default App;
