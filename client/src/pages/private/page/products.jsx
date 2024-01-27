import { Button } from "antd";
import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import loadData from "../../../api/CallApi";

const ProductsAdmin = () => {
  const [products, setProducts] = useState();
  useEffect(() => {
    loadData("tat-ca-san-pham", setProducts);
  }, []);

  const listProducts = products?.map((product, index) => (
    <div
      key={index}
      className="flex items-center justify-between border border-t-0 text-center"
    >
      <div className=" py-3 w-[10%]">{product.id}</div>
      <div className=" py-3 w-[15%] border-x">
        <img src={product.img} alt="" />
      </div>
      <div className=" py-3 w-[30%]">{product.name}</div>
      <div className=" py-3 w-[15%]">{product.price}</div>
      <div className=" py-3 w-[15%]">{product.priceBefore}</div>
      <div className="flex items-center justify-around w-[15%] border-s">
        <Button className="bg-yellow-500 hover:bg-yellow-400">Sửa</Button>
        <Button className="bg-red-500 hover:bg-red-400">
          <span className="text-white">Xoá</span>
        </Button>
      </div>
    </div>
  ));
  return (
    <>
      <Helmet>
        <title>TEELAB - Tất cả sản phẩm</title>
      </Helmet>
      <div className="w-[calc(100%-320px)] ms-[320px] mt-[56px] p-[30px]">
        <h3 className="text-2xl mb-3">danh sách sản phẩm</h3>
        <div className="flex items-center justify-between">
          <span className="">Tất cả sản phẩm</span>
          <Button type="button" className="bg-blue-600 hover:bg-blue-500">
            <span className="text-white">Thêm mới sản phẩm</span>
          </Button>
        </div>
        <div className="flex justify-between items-center mt-3">
          <input
            type="text"
            placeholder="Tìm kiếm "
            className="w-[400px] h-[30px] border border-black rounded-xl px-2"
          />
          <select className="h-[30px] border border-black px-3 rounded-md">
            <option value="">Lọc sản phẩm</option>
            <option value="">Áo thun</option>
            <option value="">Áo polo</option>
          </select>
        </div>
        <div className="flex items-center justify-between border text-center mt-3">
          <div className="border-x py-3 w-[10%]">id</div>
          <div className="border-x py-3 w-[15%]">Ảnh sản phẩm</div>
          <div className="border-x py-3 w-[30%]">Tên sản phẩm</div>
          <div className="border-x py-3 w-[15%]">Giá bán</div>
          <div className="border-x py-3 w-[15%]">Gía trước</div>
          <div className="border-x py-3 w-[15%]">Chức năng</div>
        </div>
        <div className="flex flex-col">{listProducts}</div>
      </div>
    </>
  );
};

export default ProductsAdmin;
