import styles from './Slider.module.scss';
import PropTypes from 'prop-types';

const SliderDot = ({index, indexChanger, activeItem}) => {
  return (
    <div 
      className={`${styles['flip-dot']} ${index+1 === activeItem ? styles['flip-dot-active'] : ''}`} 
      onClick={() => {
        indexChanger(++index)
      }}
    >
      {index}
    </div>
  );
}


SliderDot.propTypes = {
  index: PropTypes.number,
  indexChanger: PropTypes.func,
  activeItem: PropTypes.number,
};

export default SliderDot;