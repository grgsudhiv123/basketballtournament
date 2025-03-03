import Slider from "react-slick";
import { Sponsers } from "../Constants/Constants"; // Ensure the path is correct
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import SponsersCards from "./SponsersCards";


const SponsersSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full h-1/6">
      <Slider {...settings}>
        {Sponsers.map((sponsor) => (
          <SponsersCards key={sponsor.name} {...sponsor}/>
      ))}

      </Slider>
    </div>
  );
};

export default SponsersSlider;
