import React from "react";
import banner1 from "../../../assets/banner/banner-1.jpg";
import banner2 from "../../../assets/banner/banner-2.jpg";
import banner3 from "../../../assets/banner/banner-3.jpg";
import Slider from "./Slider";

const Banner = () => {
  const sliderItem = [
    {
      img: banner1,
      prev: 3,
      id: 1,
      next: 2,
    },
    {
      img: banner2,
      prev: 1,
      id: 2,
      next: 3,
    },
    {
      img: banner3,
      prev: 2,
      id: 3,
      next: 1,
    },
  ];

  return (
    <div className="carousel w-full h-[600px] overflow-hidden">
      {sliderItem.map((item) => (
        <Slider key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Banner;
