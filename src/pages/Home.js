import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Announcement from "../Components/Announcement";
import Slider from "../Components/Slider";
import Categories from "../Components/Categories";
import Products from "../Components/Products";
import Newsletter from "../Components/Newsletter";
import Footer from "../Components/Footer";
import ShowProducts from "./ShowProducts";

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <ShowProducts />
      {/* <Products handleClick={handleClick}/> */}
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
