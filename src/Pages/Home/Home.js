import React from "react";
import Advertisement from "./Advertise/Advertisement";
import Banner from "./Banner/Banner";
import NewLook from "./NewLook/NewLook";
import NewsLetter from "./NewsLetter/NewsLetter";
import ProductCategories from "./Products/ProductCategories";

const Home = () => {
  return (
    <div>
      <Banner />
      <Advertisement />
      <ProductCategories />
      <NewLook />
      <NewsLetter />
    </div>
  );
};

export default Home;
