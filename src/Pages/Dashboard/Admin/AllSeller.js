import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../context/AuthProvider";
import Loading from "../../../Loading/Loading";

const AllSeller = () => {
  const { logOut } = useContext(AuthContext);
  const {
    data: sellers = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["sellers"],
    queryFn: async () => {
      const res = await fetch(
        "https://dream-watch-server.vercel.app/users/seller",
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("watch-token")}`,
          },
        }
      );
      if (res.status === 403 || res.status === 401) {
        return logOut();
      }
      const data = await res.json();
      return data;
    },
  });

  const handleDelete = (id) => {
    fetch(`https://dream-watch-server.vercel.app/users/seller/${id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("watch-token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Seller Deleted Successfully");
          refetch();
        }
      });
  };

  const handleVerify = (email) => {
    fetch(`https://dream-watch-server.vercel.app/verify-status/${email}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("watch-token")}`,
      },
      body: JSON.stringify({ status: true }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.matchedCount) {
          toast.success("Account Verify Successed");
          refetch();
        }
      });
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Avatar</th>
            <th>Name</th>
            <th>Email</th>
            <th>Account</th>
            <th>Delete</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {sellers?.map((user, index) => (
            <tr key={user._id}>
              <th>{index + 1}</th>
              <th>
                <img
                  className="h-14 w-14 object-cover rounded-full"
                  src={user.photo}
                  alt=""
                />
              </th>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                <button
                  onClick={() => handleDelete(user._id)}
                  className="btn btn-xs btn-warning"
                >
                  Delete
                </button>
              </td>
              <td>
                <>
                  <button
                    onClick={() => handleVerify(user.email)}
                    className="btn btn-xs btn-primary"
                  >
                    {user?.status ? "Verified" : "Unverified"}
                  </button>
                </>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllSeller;
