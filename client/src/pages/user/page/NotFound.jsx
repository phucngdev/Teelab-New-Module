import React from "react";
import Header from "../../../components/Header";
import notfound from "../../../../public/notfound.png";
import Footer from "../../../components/Footer";

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
