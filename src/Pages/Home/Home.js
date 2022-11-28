import React from "react";
import useSetTitle from "../../hook/useSetTitle";
import Advertisement from "./Advertise/Advertisement";
import Banner from "./Banner/Banner";
import CustomerReview from "./CustomerReview/CustomerReview";
import NewLook from "./NewLook/NewLook";
import NewsLetter from "./NewsLetter/NewsLetter";
import ProductCategories from "./Products/ProductCategories";

const Home = () => {
  useSetTitle("Home");
  return (
    <div>
      <Banner />
      <Advertisement />
      <ProductCategories />
      <NewLook />
      <CustomerReview />
      <NewsLetter />
    </div>
  );
};

export default Home;
