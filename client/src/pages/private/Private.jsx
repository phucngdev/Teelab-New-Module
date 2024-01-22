import React from "react";
import Header from "../../components/admin/Header";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/admin/Sidebar";

const Private = () => {
  return (
    <>
      <Header></Header>
      <Sidebar></Sidebar>
      <Outlet />
    </>
  );
};

export default Private;
