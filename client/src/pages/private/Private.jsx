import React, { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "../../components/admin/Header";
import Sidebar from "../../components/admin/Sidebar";
import { useLocation } from "react-router-dom";

const Private = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { admin } = location.state || {};
  console.log(admin);

  useEffect(() => {
    if (!admin) {
      navigate("/dang-nhap");
    }
  }, []);
  return (
    <>
      {admin && (
        <>
          <Header admin={admin}></Header>
          <Sidebar></Sidebar>
          <Outlet />
        </>
      )}
    </>
  );
};

export default Private;
