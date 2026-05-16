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
      <div className="flex flex-col items-center bg-[#333] pb-8">
        <h2 className="text-2xl my-7 font-mont text-white ">LOOK INSIDE</h2>
        <div className="relative max-w-2xl">
          {images.map((image, i) => {
            const className = i === index ?
              "slider-image current-slider-image" :
              "slider-image";
            return (<img className={className} alt={image.alt} src={image.src} key={image.src} />);
          })}
          <div className="flex justify-between items-center absolute left-0 top-0 w-full h-full">
            <a className="cursor-pointer text-[1.4rem] text-white bg-[rgba(0,0,0,0.7)] select-none hover:bg-[rgba(0,0,0,0.9)] py-[0.6rem] pr-[0.8rem] pl-[0.5rem] rounded-r-2xl" onClick={onClickPrev}>&#10094;</a>
            <a className="cursor-pointer text-[1.4rem] text-white bg-[rgba(0,0,0,0.7)] select-none hover:bg-[rgba(0,0,0,0.9)] py-[0.6rem] pr-[0.5rem] pl-[0.8rem] rounded-l-2xl" onClick={onClickNext}>&#10095;</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Gallery;