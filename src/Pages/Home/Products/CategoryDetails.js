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
      <div className="bg-base-200 py-6 mb-14">
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
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img src="https://placeimg.com/400/400/arch" alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">New album is released!</h2>
          <p>Click the button to listen on Spotiwhy app.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Listen</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryDetails;
