import React from "react";
import Header from "../components/pay/Header";
import { Outlet } from "react-router-dom";

const PublicCart = () => {
  return (
    <>
      <Header></Header>
      <Outlet />
    </>
  );
};

export default PublicCart;
