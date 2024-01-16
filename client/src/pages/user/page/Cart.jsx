import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../../components/pay/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { Helmet } from "react-helmet";

const Cart = () => {
  const navigate = useNavigate();

  const [num, setNum] = useState(1);

  const handleIscrease = () => {
    setNum(num + 1);
  };
  const handleMinus = () => {
    setNum(num - 1);
  };
  return (
    <>
      <Helmet>
        <title>TEELAB - Giỏ hàng</title>
      </Helmet>
      <Header></Header>
      <form className="container">
        <h2 className="text-2xl font-light my-4">Giỏ hàng của bạn</h2>
        <div className="border border-[#ebebeb] p-[7px]">
          <div className="flex justify-between pb-[7px] border-b">
            <div className="font-bold w-[51%]">Thông tin sản phẩm</div>
            <div className="font-bold text-center w-[16%]">Đơn giá</div>
            <div className="font-bold text-center w-[16%]">Số lượng</div>
            <div className="font-bold text-center w-[16%]">Thành tiền</div>
          </div>
          <div className="flex justify-between py-[7px]">
            <div className="flex gap-2 items-center w-[51%]">
              <img
                className="w-[100px] h-[100px] object-cover"
                src="https://bizweb.dktcdn.net/100/415/697/products/nta101-arg443lf-1-xvq3-hinh-mat-truoc-0.jpg?v=1693562410037"
                alt=""
              />
              <div className="flex flex-col items-start">
                <div>
                  Áo Thun Teelab Local Brand Unisex Basketball Jersey TS220
                </div>
                <div className="flex gap-1 items-center">
                  <div>Trắng</div>
                  <div>/</div>
                  <div>M</div>
                </div>
                <button type="button" className="text-[#ff0000]">
                  Xoá
                </button>
              </div>
            </div>
            <div className="font-bold text-[#ff0000] flex justify-center items-center w-[16%]">
              185.000đ
            </div>
            <div className="flex justify-center items-center w-[16%]">
              <button
                className="px-2 border"
                type="button"
                onClick={handleMinus}
              >
                <FontAwesomeIcon icon={faMinus} />
              </button>
              <span className="w-8 text-center border">{num}</span>
              <button
                className="px-2 border"
                type="button"
                onClick={handleIscrease}
              >
                <FontAwesomeIcon icon={faPlus} />
              </button>
            </div>
            <div className="font-bold text-[#ff0000] flex justify-center items-center w-[16%]">
              185.000đ
            </div>
          </div>
        </div>
        <div className="flex justify-end mt-5">
          <div className="flex flex-col">
            <div className="flex justify-between items-center">
              <div>Tổng tiền:</div>
              <div className="font-bold text-2xl text-[#ff0000]">185.000đ</div>
            </div>
            <button
              onClick={() => navigate("/thanh-toan")}
              className="w-[360px] bg-black text-white py-2 rounded-sm hover:opacity-75 mt-1"
            >
              Thanh toán
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Cart;
