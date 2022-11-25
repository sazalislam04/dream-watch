import { useQuery } from "@tanstack/react-query";
import React from "react";
import Loading from "../../../Loading/Loading";
import Advertise from "./Advertise";

const Advertisement = () => {
  const { data: sellerAdvertise, isLoading } = useQuery({
    queryKey: ["sellerAdvertise"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/advertise");
      const data = await res.json();
      console.log(data);
      return data;
    },
  });
  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <div className="container">
        <div className="text-center mt-20">
          <h5 className="text-primary">Dream Watches</h5>
          <h2 className="text-gray-900 text-3xl capitalize font-medium">
            Product Advertisement
          </h2>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container gap-8">
        {sellerAdvertise?.map((advertise) => (
          <Advertise key={advertise._id} advertise={advertise} />
        ))}
      </div>
    </>
  );
};

export default Advertisement;
