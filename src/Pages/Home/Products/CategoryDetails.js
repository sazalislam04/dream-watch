import React from "react";
import { useLoaderData } from "react-router-dom";

const CategoryDetails = () => {
  const category = useLoaderData();
  console.log(category);

  return (
    <div>
      <h2>details</h2>
    </div>
  );
};

export default CategoryDetails;
