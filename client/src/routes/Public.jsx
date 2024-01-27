import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/user/Footer";
import Header from "../components/user/Header";

const Public = () => {
  return (
    <>
      <Header></Header>
      <Outlet />
      <Footer></Footer>
    </>
  );
};

export default Public;
