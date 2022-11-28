import React from "react";
import useSetTitle from "../../hook/useSetTitle";
import Advertisement from "./Advertise/Advertisement";
import Banner from "./Banner/Banner";
import NewLook from "./NewLook/NewLook";
import NewsLetter from "./NewsLetter/NewsLetter";
import ProductCategories from "./Products/ProductCategories";
import Testimonials from "./Testimonials/Testimonials";

const Home = () => {
  useSetTitle("Home");
  return (
    <div>
      <Banner />
      <Advertisement />
      <ProductCategories />
      <NewLook />
      <Testimonials />
      <NewsLetter />
    </div>
  );
};

export default Home;
