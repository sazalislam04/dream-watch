import React from "react";

const Advertise = ({ advertise }) => {
  const { img, name, resale_price } = advertise;
  return (
    <>
      <div className="w-full overflow-hidden rounded-lg shadow-lg bg-base-300 mt-14">
        <img className="object-cover w-full h-72" src={img} alt="avatar" />
        <div class="py-5 text-center">
          <h2 className="block text-2xl font-bold text-gray-800">{name}</h2>
          <span class="text-lg text-gray-800">{resale_price}$</span>
        </div>
      </div>
    </>
  );
};

export default Advertise;
