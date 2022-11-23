import React from "react";
import "./Slider.css";
const Slider = ({ item }) => {
  const { id, img, prev, next } = item;
  return (
    <div id={`slide${id}`} className="carousel-item relative w-full">
      <div className="carosule-img">
        <img src={img} alt="" className="w-full min-h-screen object-cover" />
      </div>
      <div className="absolute justify-between transform -translate-y-1/2 left-20 top-1/2">
        <h1 className="text-6xl lg:text-8xl text-white lg:w-1/2 font-semibold lg:text-left text-center w-full mb-2">
          Dream Watches
        </h1>
        <p className="text-lg mt-2 text-gray-200">
          There are many variations of watches of available, <br /> You can sell
          or buy watches
        </p>
        <div className="mt-5">
          <button className="btn btn-primary btn-active mr-3 ">
            discover more
          </button>
          <button className="btn btn-outline btn-primary">
            latest project
          </button>
        </div>
      </div>
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href={`#slide${prev}`} className="btn btn-circle">
          ❮
        </a>
        <a href={`#slide${next}`} className="btn btn-circle">
          ❯
        </a>
      </div>
    </div>
  );
};

export default Slider;
