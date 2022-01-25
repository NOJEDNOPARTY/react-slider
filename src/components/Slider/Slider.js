import Slides from "./Slides";
import styles from './Slider.module.scss';


const Slider = props => {
  // const activeIndex = 0;
  const slider = (
    <div className={styles.flip}>
      <div className={styles.flip_layout}> 
        <Slides images={props.items} />
      </div>
    </div>
  )

  return slider;
};

export default Slider;
