import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../context/AuthProvider";
import Loading from "../../../Loading/Loading";

const AllUser = () => {
  const { logOut } = useContext(AuthContext);
  const {
    data: users = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("https://dream-watch-server.vercel.app/users", {
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

  const handleMakeAdmin = (id) => {
    fetch(`https://dream-watch-server.vercel.app/users/admin/${id}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("watch-token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          toast.success("Make admin successfull");
          refetch();
        }
      });
  };

  const handleDelete = (id) => {
    fetch(`https://dream-watch-server.vercel.app/users/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("User Deleted Successed");
          refetch();
        }
      });
  };
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <h1 className="text-3xl p-5">All Users</h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Avatar</th>
              <th>Name</th>
              <th>Email</th>
              <th>Account</th>
              <th>Admin</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <th>
                  <img
                    className="w-14 h-14 object-cover rounded-full"
                    src={user.photo}
                    alt=""
                  />
                </th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>
                  {user?.role !== "admin" ? (
                    <>
                      <button
                        onClick={() => handleMakeAdmin(user._id)}
                        className="btn btn-xs btn-primary"
                      >
                        Make Admin
                      </button>
                    </>
                  ) : (
                    <>
                      <button disabled className="btn btn-success btn-sm">
                        Admin
                      </button>
                    </>
                  )}
                </td>
                <td>
                  {user?.role !== "admin" ? (
                    <>
                      <button
                        onClick={() => handleDelete(user._id)}
                        className="btn btn-xs btn-warning"
                      >
                        Delete
                      </button>
                    </>
                  ) : (
                    <>
                      <button disabled className="btn btn-xs btn-warning">
                        Delete
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUser;
