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
    centerScale: 1.2,
    noCenterScale: 0.93,
    centerItemIndex: 4,
    itemsPerView: 7,
    perspective: 400,
    leftRotate: '30deg', 
    rightRotate: '330deg', 
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
