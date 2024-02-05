import { Button, Input, Tabs } from "antd";
import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import ProductsList from "../../../components/admin/ProductsList";
import ModalProduct from "../../../components/admin/ModalProduct";

const ProductsAdmin = () => {
  const [search, setSearch] = useState("");
  const items = [
    {
      key: "1",
      label: "Tất cả sản phẩm",
      children: <>{ProductsList("tat-ca-san-pham")}</>,
    },
    {
      key: "2",
      label: "Áo thun",
      children: <>{ProductsList("ao-thun")}</>,
    },
    {
      key: "3",
      label: "Áo polo",
      children: <>{ProductsList("ao-thun")}</>,
    },
  ];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <Helmet>
        <title>TEELAB - Danh sách sản phẩm</title>
      </Helmet>
      <div className="w-[calc(100%-320px)] ms-[320px] mt-[56px] p-[30px]">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-3">
            <h3 className=" text-2xl whitespace-nowrap">Danh sách sản phẩm</h3>
            <input
              className="border w-[300px] px-2 py-1 text-sm rounded-lg"
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Tìm kiếm"
            />
          </div>
          <Button
            type="button"
            onClick={showModal}
            className="bg-blue-600 hover:bg-blue-500"
          >
            <span className="text-white">Thêm mới sản phẩm</span>
          </Button>
          <ModalProduct
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
          />
        </div>
        <Tabs defaultActiveKey="1" items={items} />
      </div>
    </>
  );
};

export default ProductsAdmin;
