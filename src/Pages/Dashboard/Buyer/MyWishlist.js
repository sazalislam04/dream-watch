import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";
import Loading from "../../../Loading/Loading";

const MyWishlist = () => {
  const { user, logOut } = useContext(AuthContext);
  const url = `http://localhost:5000/wishlist?email=${user?.email}`;
  const {
    data: wishlists,
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["wishlists", user?.email],
    queryFn: async () => {
      const res = await fetch(url, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("watch-token")}`,
        },
      });
      if (res.status === 403 || res.status === 401) {
        return logOut();
      }
      const data = await res.json();
      return data;
    },
  });

  const handleDeleteWishList = (id) => {
    fetch(`http://localhost:5000/wishlist/${id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("watch-token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          toast.success("Seller Deleted Successfully");
          refetch();
        }
      });
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      {" "}
      <div className="overflow-x-auto">
        {wishlists.length ? (
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
                {wishlists?.map((wishlist, index) => (
                  <tr key={wishlist._id}>
                    <th>{index + 1}</th>
                    <td>
                      <img
                        className="w-12 h-12 rounded-full"
                        src={wishlist.product.img}
                        alt=""
                      />
                    </td>
                    <td>{wishlist.product.name}</td>
                    <td>{wishlist.product.price}$</td>
                    <td>
                      <button
                        onClick={() => handleDeleteWishList(wishlist._id)}
                        className="btn btn-error btn-xs"
                      >
                        Delete
                      </button>
                    </td>
                    <td>
                      {wishlist?.product.price && !wishlist.product.paid && (
                        <Link>
                          <button className="btn btn-primary btn-xs">
                            pay
                          </button>
                        </Link>
                      )}
                      {wishlist.product.price && wishlist.product.paid && (
                        <span className="text-green-500">Paid</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        ) : (
          <p className="text-center mt-10 text-2xl">No WishList Added</p>
        )}
      </div>
    </div>
  );
};

export default MyWishlist;
