import React from "react";

const Advertise = ({ advertise }) => {
  const { img, name, price } = advertise;
  return (
    <>
      <div
        className="w-full overflow-hidden rounded-lg shadow-lg bg-base-300"
        data-aos="zoom-in"
      >
        <img className="object-cover w-full h-72" src={img} alt="avatar" />
        <div className="py-5 text-center">
          <h2 className="block text-2xl font-bold text-gray-800">{name}</h2>
          <span className="text-lg text-gray-800">{price}$</span>
        </div>
      </div>
    </>
  );
};

export default Advertise;
