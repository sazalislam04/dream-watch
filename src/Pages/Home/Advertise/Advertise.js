import React from "react";

const Advertise = ({ advertise }) => {
  const { img, name, resale_price } = advertise;

  return (
    <>
      <div className="flex flex-col items-center justify-center w-full md:max-w-sm mx-auto mt-10">
        <div className="w-full h-96 md:h-72 bg-gray-300 rounded-lg shadow-md">
          <img className="h-96 md:h-72 w-full object-cover" src={img} alt="" />
        </div>

        <div className=" w-72 lg:w-max-w-md -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 ">
          <h3 className="py-2 font-bold tracking-wide text-center  uppercase text-gray-800">
            {name}
          </h3>

          <div className="flex items-center justify-between px-3 py-2  bg-gray-700">
            <span className="font-bold text-xl text-center text-white">
              ${resale_price}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Advertise;
