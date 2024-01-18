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
      <div className="flex">
        <Sidebar></Sidebar>
        <Home></Home>
      </div>
    </>
  );
};

export default HomeAdmin;
