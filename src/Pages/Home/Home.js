import React from "react";
import Advertisement from "./Advertise/Advertisement";
import Banner from "./Banner/Banner";
import ProductCategories from "./Products/ProductCategories";

const Home = () => {
  return (
    <div>
      <Banner />
      <Advertisement />
      <ProductCategories />
    </div>
  );
};

export default Home;
