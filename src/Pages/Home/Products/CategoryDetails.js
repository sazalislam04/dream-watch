import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import banner from "../../../assets/img/banner.png";

const CategoryDetails = () => {
  const category = useLoaderData();
  const {
    img,
    location,
    name,
    number,
    original_price,
    resale_price,
    seller_name,
    years,
    description,
    timestamp,
    category_name,
  } = category;

  return (
    <>
      <div className="bg-base-200 py-6 mb-20">
        <div className="sm:flex items-center justify-between container">
          <div>
            <h2 className="text-4xl font-medium">{category_name}</h2>
            <div className="text-sm breadcrumbs">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li className="text-primary">
                  <Link>Category Details</Link>
                </li>
              </ul>
            </div>
          </div>
          <img className="h-52 md:h-72 mt-5 lg:mt-0" src={banner} alt="" />
        </div>
      </div>
      <div className="lg:mb-10">
        <div className="container">
          <div className="flex flex-col gap-20 lg:flex-row">
            <img
              src={img}
              className="w-full lg:max-w-md rounded-lg shadow"
              alt=""
            />
            <div className="w-full">
              <h1 className="text-5xl font-medium">{name}</h1>
              <p className="text-xl mt-3">
                Resale Price:{" "}
                <span className="font-semibold">{resale_price}$</span>
              </p>
              <p className="text-lg mt-1">
                Original Price:{" "}
                <span className="font-medium">{original_price}$</span>
              </p>
              <p className="text-lg mt-1">
                Location: <span className="font-medium">{location}</span>
              </p>
              <p className="text-lg mt-1">
                Years of use: <span className="font-medium">{years}</span>
              </p>
              <p className="text-lg mt-1">
                Seller Name: <span className="font-medium">{seller_name}</span>
              </p>
              <p className="text-lg mt-1">
                Seller Number: <span className="font-medium">{number}</span>
              </p>
              <p className="text-lg mt-1">
                Posted Date: <span className="font-medium">{timestamp}</span>
              </p>
              <p className="py-6">{description}</p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryDetails;
