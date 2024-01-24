import React from "react";
import notfound from "../../../../public/notfound.png";
import Header from "../../../components/user/Header";
import Footer from "../../../components/user/Footer";

const NotFound = () => {
  return (
    <>
      <Header></Header>
      <div className="flex flex-col justify-center items-center">
        <img className="w-[30%]" src={notfound} alt="" />
      </div>
      <Footer></Footer>
    </>
  );
};

export default NotFound;
