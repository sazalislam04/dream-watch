import { useQuery } from "@tanstack/react-query";
import React from "react";
import Loading from "../../../Loading/Loading";
import Categories from "./Categories";

const ProductCategories = () => {
  const { data: categories, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      try {
        const res = await fetch(
          "https://dream-watch-server.vercel.app/category"
        );
        const data = await res.json();
        return data;
      } catch (error) {
        console.log(error);
      }
    },
  });
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="my-20">
      <div className="container">
        <span className="text-primary text-center text-xl flex justify-center">
          Dream Watch
        </span>
        <h1 className="text-3xl font-medium text-center text-gray-800 capitalize xl:text-4xl lg:text-3xl ">
          Watches Collection
        </h1>

        <div className="flex justify-center mx-auto mt-3">
          <span className="inline-block w-40 h-1 bg-primary rounded-full"></span>
          <span className="inline-block w-3 h-1 mx-1 bg-primary rounded-full"></span>
          <span className="inline-block w-1 h-1 bg-primary rounded-full"></span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
          {categories?.map((category) => (
            <Categories key={category._id} category={category} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCategories;
