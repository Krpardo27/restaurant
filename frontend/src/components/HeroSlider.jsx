import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import '../styles/slick-slider.css';

const HeroSlider = () => {
  const settings = {
    dots: true,
    className: "center",
    infinite: true,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    waitForAnimate: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="flex items-center justify-center">
          <img
            src="/slider/1.jpg"
            alt="Slide 1"
            className="w-full h-full"
          />
        </div>
        <div>
          <img
            src="/slider/2.jpg"
            alt="Slide 2"
            className="w-full h-full"
          />
        </div>
        <div>
          <img
            src="/slider/3.jpg"
            alt="Slide 3"
            className="w-full h-full"
          />
        </div>
        <div>
          <img
            src="/slider/4.jpg"
            alt="Slide 4"
            className="w-full h-full"
          />
        </div>
      </Slider>
    </div>
  );
};

export default HeroSlider;
