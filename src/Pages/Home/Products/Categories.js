import React from "react";
import { Link } from "react-router-dom";

const Categories = ({ category }) => {
  const { _id, category_name, img } = category;
  return (
    <div
      className="w-full overflow-hidden rounded-lg shadow-lg bg-base-300"
      data-aos="zoom-in"
    >
      <Link to={`/category/${_id}`}>
        <div className="py-1">
          <h5 className="text-2xl font-semibold text-center uppercase text-gray-800">
            {category_name}
          </h5>
        </div>
        <img
          className="object-cover w-full h-72 mt-2"
          src={img}
          alt="category"
        />
      </Link>
    </div>
  );
};

export default Categories;
