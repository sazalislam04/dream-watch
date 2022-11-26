import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import BookingModal from "../BookingModal/BookingModal";
import SingleCard from "./SingleCard";
const CategoryDetails = () => {
  const { category, result } = useLoaderData();
  const [bookingData, setBookingData] = useState(null);

  return (
    <>
      <div className="bg-base-200 py-6 mb-20">
        <div className="sm:flex items-center justify-between container">
          <div>
            <h2 className="text-4xl font-medium">{category.category_name}</h2>
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
            src={category.category_banner}
            alt=""
          />
        </div>
      </div>
      <>
        {result.map((product) => (
          <SingleCard
            key={product._id}
            product={product}
            setBookingData={setBookingData}
          />
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
