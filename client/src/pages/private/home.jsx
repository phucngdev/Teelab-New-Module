import React from "react";
import { Helmet } from "react-helmet";
import Sidebar from "../../components/admin/Sidebar";
import Home from "./pageAdmin/home";

const HomeAdmin = () => {
  return (
    <>
      <Helmet>
        <title>TEELAB -Tổng quan</title>
      </Helmet>
      <Sidebar></Sidebar>
      <Home></Home>
    </>
  );
};

export default HomeAdmin;
