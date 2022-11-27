import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";
import Loading from "../../../Loading/Loading";

const MyProducts = () => {
  const { user } = useContext(AuthContext);
  const url = `http://localhost:5000/products?email=${user?.email}`;
  const {
    data: products,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["products", user?.email],
    queryFn: async () => {
      try {
        const res = await fetch(url, {
          headers: {
            authorization: `Bearer ${localStorage.getItem("watch-token")}`,
          },
        });
        const data = await res.json();
        return data;
      } catch (error) {
        console.log(error);
      }
    },
  });

  const handleDeleteProduct = (id) => {
    fetch(`http://localhost:5000/products/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          toast.success("Seller Deleted Successfully");
          refetch();
        }
      });
  };

  const handleAdvertise = (id) => {
    fetch(`http://localhost:5000/advertise/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ isAdvertise: true }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.matchedCount) {
          toast.success("Product Advertise Successed");
          console.log(data);
        }
      });
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="p-8">
      <div className="overflow-x-auto">
        {products.length ? (
          <>
            <table className="table w-full">
              <thead>
                <tr>
                  <th></th>
                  <th>Avatar</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Action</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {products?.map((category, index) => (
                  <tr key={category._id}>
                    <th>{index + 1}</th>
                    <td>
                      <img
                        className="w-12 h-12 rounded-full"
                        src={category.img}
                        alt=""
                      />
                    </td>
                    <td>{category.name}</td>
                    <td>{category.resale_price}$</td>
                    <td>
                      <button
                        onClick={() => handleDeleteProduct(category._id)}
                        className="btn btn-error btn-xs"
                      >
                        Delete
                      </button>
                    </td>
                    <td>
                      {category?.resale_price && !category.paid && (
                        <>
                          <Link to="">
                            <button className="btn btn-primary btn-xs">
                              Available
                            </button>
                          </Link>
                          <Link>
                            <button
                              onClick={() => handleAdvertise(category._id)}
                              className="btn btn-secondary ml-3 btn-xs"
                            >
                              Advertise
                            </button>
                          </Link>
                        </>
                      )}
                      {category.resale_price && category.paid && (
                        <span className="text-green-500">Sold</span>
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

export default MyProducts;
