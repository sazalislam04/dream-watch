import React, { useContext } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";

const BookingModal = ({ bookingData, setBookingData }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.userEmail.value;
    const productName = form.productName.value;
    const name = form.name.value;
    const price = form.price.value;
    const phone = form.phone.value;
    const meatingLocation = form.location.value;

    const bookingInfo = {
      email,
      productName,
      name,
      price,
      phone,
      meatingLocation,
      img: bookingData.img,
      productId: bookingData._id,
    };

    fetch("https://dream-watch-server.vercel.app/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookingInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Product is Booked");
          form.reset();
          setBookingData(null);
          navigate("/dashboard/myorders");
        } else {
          toast.error(data.message);
        }
      });
  };

  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{bookingData.category_name}</h3>
          <form
            onSubmit={handleBooking}
            className="py-4 mt-6 flex flex-col gap-4"
          >
            <input
              type="text"
              disabled
              value={user?.displayName}
              name="name"
              placeholder="Your Name"
              className="input input-bordered w-full"
            />
            <input
              type="text"
              disabled
              value={user?.email}
              name="userEmail"
              placeholder="Your Email"
              className="input input-bordered w-full"
            />
            <input
              type="text"
              value={bookingData.name}
              name="productName"
              disabled
              placeholder="Product Name"
              className="input input-bordered w-full"
            />
            <input
              type="text"
              name="price"
              disabled
              value={bookingData.price}
              placeholder="Product price"
              className="input input-bordered w-full"
            />
            <input
              type="text"
              name="phone"
              placeholder="Your Phone Number"
              className="input input-bordered w-full"
            />
            <input
              type="text"
              name="location"
              placeholder="Meating Location"
              className="input input-bordered w-full"
            />
            <button className="btn btn-primary input-bordered w-full">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
