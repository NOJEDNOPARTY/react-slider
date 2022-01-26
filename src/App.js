import './App.css';
import Slider from './components/Slider/Slider';
import PropTypes from 'prop-types';

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
    centerElement: 3,
    elementsView: 7
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


App.propTypes = {
  items: PropTypes.object
};

export default App;
