import React from "react";
import notfound from "../../../../public/notfound.png";
import Header from "../../../components/admin/Header";
import Sidebar from "../../../components/admin/Sidebar";

const NotFoundAdmin = () => {
  return (
    <>
      <Header></Header>
      <Sidebar></Sidebar>
      <div className="w-[calc(100%-320px)] h-[100vh] ms-[320px] mt-[56px] p-[30px] flex flex-col justify-center items-center">
        <img className="w-[30%]" src={notfound} alt="" />
      </div>
    </>
  );
};

export default NotFoundAdmin;
