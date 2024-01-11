import React from "react";
import { Helmet } from "react-helmet";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

const Check_order = () => {
  return (
    <div className="check_order">
      <Helmet>
        <title>Kiểm tra đơn hàng | TEELAB</title>
      </Helmet>
      <Header></Header>
      <div className="container mx-auto">
        <div className="px-[15px] py-[25px] my-[30px]">
          <div className="w-[40%] px-[15px] rounded-md shadow-lg bg-[rgba(228,228,228,1)]">
            <h5 className="text-center text-[#333] text-xl font-medium pt-4">
              Kiểm tra đơn hàng
            </h5>
            <hr className="my-[18px] border-t-2" />
            <form action="" className="flex flex-col gap-2">
              <div className="">Kiểm tra bằng</div>
              <div className="flex gap-2 items-center">
                <input id="phone" type="radio" name="check" checked="checked" />
                <label for="phone">Số điện thoại</label>
                <input id="email" type="radio" name="check" />
                <label for="email">Email</label>
              </div>
              <input
                className="px-3 py-1 rounded-md my-2"
                type="text"
                placeholder="Nhập tại đây..."
              />
              <button
                className="w-[75px] h-[35px] mb-4 bg-[#357ebd] rounded-md"
                type="submit"
              >
                <span className="text-[13px] text-white font-normal text-center">
                  Kiểm tra
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Check_order;
