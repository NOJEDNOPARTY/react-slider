import styles from './Slider.module.scss';
import PropTypes from 'prop-types';

const SliderItem = ({style, image, index}) => {
  return (
    <div 
      className={styles['flip-img']} 
      style={style}
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