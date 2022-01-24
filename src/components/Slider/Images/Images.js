import s from '../Slider.module.scss';

function Images() {
  const list = {};

  function importing(r) {
    r.keys().forEach((key) => (list[key] = r(key)));
  }

  importing(require.context('../../../images/slider', false, /\.(png|jpe?g|svg)$/));

  const images = Object.entries(list).map(module => module[1]);
  const imagesRenderList = images.map((image, index) => ( 
    <div className = {s.flip_img} key={index}>
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

  return ( 
    <div className={s.flip_images}> 
      {imagesRenderList} 
    </div>
  );
}

export default Images;