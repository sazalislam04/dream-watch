import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";
import Loading from "../../../Loading/Loading";

const AllBuyer = () => {
  const {
    data: buyers = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["buyers"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/users/buyer");
      const data = await res.json();
      return data;
    },
  });
  const handleDelete = (id) => {
    fetch(`http://localhost:5000/users/buyer/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Seller Deleted Successfully");
          refetch();
        }
      });
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="overflow-x-auto py-8">
      <table className="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Avatar</th>
            <th>Name</th>
            <th>Email</th>
            <th>Account</th>
            <th>Make Admin</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {buyers.map((user, index) => (
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
                {user?.role !== "admin" && (
                  <>
                    <button className="btn btn-xs btn-primary">
                      Make Admin
                    </button>
                  </>
                )}
              </td>
              <td>
                <button
                  onClick={() => handleDelete(user._id)}
                  className="btn btn-xs btn-warning"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllBuyer;
