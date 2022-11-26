import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../context/AuthProvider";
import useBuyer from "../../../hook/useBuyer";

const SingleCard = ({ product, setBookingData }) => {
  const { user } = useContext(AuthContext);
  const [isBuyer] = useBuyer(user?.email);

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
    status,
  } = product;

  const reportToAdmin = (product) => {
    fetch("http://localhost:5000/reports", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Reported success");
        } else {
          toast.error(data.message);
        }
      });
  };

  const handleWishlist = (product) => {
    const wishlist = {
      product,
      userEmail: user.email,
    };
    fetch(`http://localhost:5000/wishlist`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(wishlist),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Added Wishlist");
        } else {
          toast.error(data.message);
        }
      });
  };

  return (
    <div className="mb-12 lg:mb-20">
      <div className="container">
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2">
            <img src={img} className="w-full lg:max-w-sm" alt="" />
          </div>
          <div className="w-full lg:w-8/12 mt-10 md:mt-0">
            <h1 className="text-3xl font-medium">{name}</h1>
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
            <p className="text-lg mt-1 flex gap-1 items-center">
              Seller Name: <span className="font-medium ">{seller_name}</span>
              {status ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-green-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              ) : (
                ""
              )}{" "}
            </p>
            <p className="text-lg mt-1">
              Seller Number: <span className="font-medium">{number}</span>
            </p>
            <p className="text-lg mt-1">
              Posted Date: <span className="font-medium">{timestamp}</span>
            </p>
            <p className="py-6">{description}</p>
            <label
              onClick={() => setBookingData(product)}
              htmlFor="booking-modal"
              className="btn btn-primary"
            >
              Book Now
            </label>
            <button
              onClick={() => reportToAdmin(product)}
              title="Report to Admin"
              className="ml-3 btn btn-outline btn-sm btn-secondary"
            >
              Report to Admin
            </button>
            <button
              onClick={() => handleWishlist(product)}
              title="Wishlist"
              className="ml-3 mt-5 btn btn-outline btn-success btn-sm"
            >
              WishList
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
