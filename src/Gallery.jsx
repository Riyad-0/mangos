import { useState } from 'react';
import gallery0 from './assets/gallery0.jpg';
import gallery1 from './assets/gallery1.jpg';
import gallery2 from './assets/gallery2.jpg';
import gallery3 from './assets/gallery3.jpg';
import gallery4 from './assets/gallery4.jpg';
import gallery5 from './assets/gallery5.jpg';

const images = [
  { alt: "dining area", src: gallery0},
  { alt: "mezzanine", src: gallery1},
  { alt: "steak and potato wedges", src: gallery2},
  { alt: "dining area", src: gallery3},
  { alt: "porterhouse steak and spinach artichoke dip", src: gallery4},
  { alt: "bar", src: gallery5},
];

function Gallery() {
  const [index, setIndex] = useState(0);

  function onClickPrev() {
    setIndex((index - 1 + images.length) % images.length);
  }
  function onClickNext() {
    setIndex((index + 1) % images.length);
  }

  return (
    <>
      <div className="gallery-section">
        <h2 className="gallery-heading">LOOK INSIDE</h2>
        <div className="slider">
          {images.map((image, i) => {
            const className = i === index ?
              "slider-image current-slider-image" :
              "slider-image";
            return (<img className={className} alt={image.alt} src={image.src} key={image.src} />);
          })}
          <div className="slider-foreground">
            <a className="slider-prev-button" id="slider-prev-button" onClick={onClickPrev}>&#10094;</a>
            <a className="slider-next-button" id="slider-next-button" onClick={onClickNext}>&#10095;</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Gallery;