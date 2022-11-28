import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../context/AuthProvider";
import Loading from "../../../Loading/Loading";
const ReportedItem = () => {
  const { logOut } = useContext(AuthContext);
  const {
    data: repored,
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["repored"],
    queryFn: async () => {
      const res = await fetch("https://dream-watch-server.vercel.app/reports", {
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

  const handleDelete = (id) => {
    axios
      .delete(`https://dream-watch-server.vercel.app/reports/${id}`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("watch-token")}`,
        },
      })
      .then((res) => {
        if (res.data) {
          toast.success("Reporded Deleted Successed");
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
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {repored?.map((report, index) => (
            <tr key={report._id}>
              <th>{index + 1}</th>
              <th>
                <img
                  className="w-14 h-14 rounded-full"
                  src={report.img}
                  alt=""
                />
              </th>
              <td>{report.name}</td>
              <td>{report.email}</td>
              <td>
                <button
                  onClick={() => handleDelete(report._id)}
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

export default ReportedItem;
