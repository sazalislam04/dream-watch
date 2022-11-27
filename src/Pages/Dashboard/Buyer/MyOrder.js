import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";
import Loading from "../../../Loading/Loading";

const MyOrder = () => {
  const { user } = useContext(AuthContext);
  const url = `http://localhost:5000/bookings?email=${user?.email}`;
  const {
    data: bookings,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: async () => {
      const res = await fetch(url, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("watch-token")}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });

  const handleDeleteOrder = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/bookings/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          toast.success("Booking Deleted Successfully");
          refetch();
        }
      });
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="p-8">
      <div className="overflow-x-auto">
        {bookings.length ? (
          <>
            <table className="table w-full">
              <thead>
                <tr>
                  <th></th>
                  <th>Avatar</th>
                  <th>Product Name</th>
                  <th>Price</th>
                  <th>Action</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {bookings?.map((booking, index) => (
                  <tr key={booking._id}>
                    <th>{index + 1}</th>
                    <td>
                      <img
                        className="w-12 h-12 rounded-full"
                        src={booking.img}
                        alt=""
                      />
                    </td>
                    <td>{booking.productName}</td>
                    <td>{booking.price}$</td>
                    <td>
                      <button
                        onClick={() => handleDeleteOrder(booking._id)}
                        className="btn btn-error btn-xs"
                      >
                        Delete
                      </button>
                    </td>
                    <td>
                      {booking?.price && !booking.paid && (
                        <Link to={`/dashboard/payment/${booking._id}`}>
                          <button className="btn btn-primary btn-xs">
                            pay
                          </button>
                        </Link>
                      )}
                      {booking.price && booking.paid && (
                        <span className="text-green-500">Paid</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        ) : (
          <p className="text-center text-2xl">No Products Added</p>
        )}
      </div>
    </div>
  );
};

export default MyOrder;
