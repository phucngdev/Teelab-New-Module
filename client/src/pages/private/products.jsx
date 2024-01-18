import React from "react";
import Sidebar from "../../components/admin/Sidebar";
import { Helmet } from "react-helmet";

const ProductsAdmin = () => {
  return (
    <>
      <Helmet>
        <title>TEELAB - Tất cả sản phẩm</title>
      </Helmet>
      <Sidebar></Sidebar>
    </>
  );
};

export default ProductsAdmin;
