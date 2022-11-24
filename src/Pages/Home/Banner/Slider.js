import React from "react";
import "./Slider.css";
const Slider = ({ item }) => {
  const { id, img, prev, next } = item;
  return (
    <div id={`slide${id}`} className="carousel-item relative w-full">
      <div className="carosule-img">
        <img src={img} alt="" className="w-full min-h-screen object-cover" />
      </div>
      <div className="absolute justify-between transform -translate-y-1/2 left-4 lg:left-20  text-left px-4 top-1/2">
        <h1 className="text-6xl md:text-8xl text-white lg:w-1/2 font-semibold  w-full mb-2">
          Dream Watches
        </h1>
        <p className="text-md lg:text-lg mt-2 px-2 lg:px-0 text-gray-200">
          There are many variations of watches of available, <br /> You can sell
          or buy watches
        </p>
        <div className="mt-5">
          <button className="btn btn-primary btn-active mr-3 ">
            discover more
          </button>
          <button
            className="btn mt-5 sm:mt-0 btn-outline
           text-white"
          >
            latest Watches
          </button>
        </div>
      </div>
      <div className="absolute flex justify-between transform -translate-y-1/2  right-8 lg:right-16 gap-6 bottom-0 lg:bottom-10">
        <a href={`#slide${prev}`} className="btn text-blue-500 btn-circle">
          ❮
        </a>
        <a href={`#slide${next}`} className="btn text-blue-500 btn-circle">
          ❯
        </a>
      </div>
    </div>
  );
};

export default Slider;
