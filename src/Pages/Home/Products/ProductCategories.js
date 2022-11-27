import { useQuery } from "@tanstack/react-query";
import React from "react";
import Loading from "../../../Loading/Loading";
import Categories from "./Categories";

const ProductCategories = () => {
  const { data: categories, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      try {
        const res = await fetch("http://localhost:5000/category", {});
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
        <div className="text-center">
          <h5 className="text-primary">Dream Watches</h5>
          <h2 className="text-gray-900 text-3xl capitalize font-medium">
            product categories
          </h2>
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
