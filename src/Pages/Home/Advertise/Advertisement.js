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
      return data;
    },
  });
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="mt-14">
      {sellerAdvertise?.length && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container gap-8">
            {sellerAdvertise?.map((advertise) => (
              <Advertise key={advertise._id} advertise={advertise} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Advertisement;
