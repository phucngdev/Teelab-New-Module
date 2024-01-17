import React from "react";
import Sidebar from "../../../components/admin/Sidebar";
import { Helmet } from "react-helmet";

const HomeAdmin = () => {
  return (
    <>
      <Helmet>
        <title>TEELAB -Tổng quan</title>
      </Helmet>
      <Sidebar></Sidebar>
    </>
  );
};

export default HomeAdmin;
