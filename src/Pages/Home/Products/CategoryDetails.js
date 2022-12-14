import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import useSetTitle from "../../../hook/useSetTitle";
import BookingModal from "../BookingModal/BookingModal";
import SingleCard from "./SingleCard";
const CategoryDetails = () => {
  const { category, result } = useLoaderData();
  const [bookingData, setBookingData] = useState(null);
  useSetTitle("Products");
  return (
    <>
      <div className="bg-base-200 py-6 mb-20">
        <div className="sm:flex items-center justify-between container">
          <div className="">
            <h2 className="text-5xl font-medium">{category.category_name}</h2>
            <div className="text-md breadcrumbs">
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
            className="h-64 max-auto md:w-96 object-cover md:h-72 mt-5 lg:mt-0"
            src={category.category_banner}
            alt=""
            data-aos="fade-left"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="500"
          />
        </div>
      </div>
      <>
        {result?.map((product) => (
          <div key={product._id}>
            {product?.available && (
              <SingleCard
                key={product._id}
                product={product}
                setBookingData={setBookingData}
              />
            )}
          </div>
        ))}
      </>

      {bookingData && (
        <BookingModal
          bookingData={bookingData}
          setBookingData={setBookingData}
        />
      )}
    </>
  );
};

export default CategoryDetails;
