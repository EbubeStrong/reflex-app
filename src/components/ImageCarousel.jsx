import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ImageCarousel(props) {
  var settings = {
    autoplay: true,
    autoplayDelay: 500,
    dots: true,
    infinite: true,
    speed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const imageStyle = {
    maxHeight: "80vh",
    width: "auto",
    margin: "0 auto",
  };

  return (
    <div className="max-w-md mx-auto">
      <Slider {...settings}>
        <div className="relative">
          <img src={props.img1} alt="services" style={imageStyle} />
        </div>
        <div className="relative">
          <img src={props.img2} alt="services" style={imageStyle} />
        </div>
        <div className="relative">
          <img src={props.img3} alt="services" style={imageStyle} />
        </div>
      </Slider>
    </div>
  );
}

export default ImageCarousel;
