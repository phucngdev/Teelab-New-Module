import React, { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import Header from "../components/admin/Header";
import Sidebar from "../components/admin/Sidebar";

const Private = () => {
  const [admin, setAdmin] = useState(() => {
    const adminLocal = JSON.parse(localStorage.getItem("isLogin")) || false;
    return adminLocal;
  });

  return (
    <>
      {admin ? (
        <>
          <Header admin={admin}></Header>
          <Sidebar></Sidebar>
          <Outlet />
        </>
      ) : (
        <Navigate to="/dang-nhap" />
      )}
    </>
  );
};

export default Private;
