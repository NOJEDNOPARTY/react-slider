import styles from './Slider.module.scss';
import PropTypes from 'prop-types';

const SliderItem = ({style, image, indexChanger, index, activeItem}) => {
  return (
    <div 
      className={`${styles['flip-item']} ${index+1 === activeItem ? styles['flip-active'] : ''}`} 
      style={style}
      onClick={() => {
        indexChanger(index+1);
      }}
    >
      <img
        src = {
          image
        }
        alt = {
          index
        } 
      />
    </div>
  );
}


SliderItem.propTypes = {
  style: PropTypes.object,
  image: PropTypes.string,
  index: PropTypes.number,
};

export default SliderItem;