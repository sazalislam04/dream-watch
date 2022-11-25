import React from "react";
import { Link } from "react-router-dom";

const Categories = ({ category }) => {
  const { _id, category_name, img } = category;
  return (
    <div className="w-full py-2 overflow-hidden rounded-lg shadow-lg bg-gray-800">
      <Link to={`/category/${_id}`}>
        <div className="py-1">
          <h5 className="text-xl font-semibold text-center text-gray-800 uppercase dark:text-white">
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
