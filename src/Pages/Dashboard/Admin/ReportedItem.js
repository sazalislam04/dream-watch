import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";
const ReportedItem = () => {
  const { data: repored, refetch } = useQuery({
    queryKey: ["repored"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/reports");
      const data = await res.json();
      return data;
    },
  });

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/reports/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Reported Item Deleted");
          refetch();
        }
      });
  };

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
                  className="w-12 h-12 rounded-full"
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
