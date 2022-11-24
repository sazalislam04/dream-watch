import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import SingleCategory from "./SingleCategory";

const CategoryDetails = () => {
  const category = useLoaderData();
  const { category_info, category_banner, category_name } = category;

  return (
    <>
      <div className="bg-base-200 py-6 mb-14">
        <div className="sm:flex items-center justify-between container">
          <div>
            <h2 className="text-3xl font-medium">{category_name}</h2>
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
          <img
            className="h-52 md:h-72 mt-5 lg:mt-0"
            src={category_banner}
            alt=""
          />
        </div>
      </div>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {category_info.map((catInfo, index) => (
            <SingleCategory key={index} catInfo={catInfo} />
          ))}
        </div>
      </div>
    </>
  );
};

export default CategoryDetails;
