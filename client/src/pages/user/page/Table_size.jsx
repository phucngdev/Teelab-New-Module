import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import size from "/page-header/bang-size.webp";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

const Table_size = () => {
  return (
    <div className="table_size">
      <Helmet>
        <title>Bảng size | TEELAB</title>
      </Helmet>
      <Header></Header>
      <div className="container mx-auto px-[15px] mt-[56px] mb-[30px]">
        <h1 className="text-[40px] text-[#333] mb-5 font-light">Bảng size</h1>
        <div>
          <img src={size} alt="" />
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Table_size;
