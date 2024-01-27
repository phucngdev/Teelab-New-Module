import React, { useState, useEffect } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import Header from "../components/admin/Header";
import Sidebar from "../components/admin/Sidebar";
import { useLocation } from "react-router-dom";

const Private = () => {
  const [admin, setAdmin] = useState(() => {
    const adminLocal = JSON.parse(localStorage.getItem("isLogin")) || false;
    return adminLocal;
  });
  console.log(admin);

  return (
    <>
      <Header admin={admin}></Header>
      <Sidebar></Sidebar>
      {admin ? <Outlet /> : <Navigate to="/dang-nhap" />}
    </>
  );
};

export default Private;
