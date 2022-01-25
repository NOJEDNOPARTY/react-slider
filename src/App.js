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
  return (
    <div className='App'>
      <section className='carousel'>
        <div className='wrapper'>
          <Slider items={images} />
        </div>
      </section>
    </div>
  );
}

export default App;
