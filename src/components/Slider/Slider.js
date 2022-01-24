import s from './Slider.module.scss';
import Images from './Images/Images';

function Slider(){
  return (
    <div className={s.flip}>
      <Images />
    </div>
  );
}

export default Slider;
