import React from "react";
import Header from "../../components/user/Header";
import { Outlet } from "react-router-dom";
import Footer from "../../components/user/Footer";

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
