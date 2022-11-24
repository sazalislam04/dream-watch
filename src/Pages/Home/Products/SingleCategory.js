import React from "react";

const SingleCategory = ({ catInfo }) => {
  const {
    img,
    name,
    location,
    resale_price,
    original_price,
    years_of_use,
    seller_name,
  } = catInfo;

  return (
    <>
      <div className="card w-full lg:w-96 bg-base-100 shadow-xl">
        <figure>
          <img className="h-72" src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <span className="text-lg">
            Resale Price:{" "}
            <span className="text-xl font-semibold text-red-500">
              {resale_price}$
            </span>
          </span>
          <span className="text-lg">
            Original Price:{" "}
            <span className="text-xl font-medium ">{original_price}$</span>
          </span>
          <span className="text-lg">
            Years of use:{" "}
            <span className="text-xl font-medium">{years_of_use}</span>
          </span>
          <span className="text-lg">
            location: <span className="text-xl font-medium">{location}</span>
          </span>
          <span className="text-lg">
            Seller Name:{" "}
            <span className="text-xl font-medium">{seller_name}</span>
          </span>
          <div className="card-actions justify-end">
            <div className="btn btn-primary">Book Now</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleCategory;
