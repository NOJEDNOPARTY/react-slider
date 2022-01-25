import styles from './Slider.module.scss';

const Slides = props => {  
  return props.images.map((image, index) => ( 
    <div className = {styles.flip_img} key={index}>
      <img
        src = {
          image
        }
        alt = {
          index
        } 
      />
    </div>
  ));
};
export default Slides;


