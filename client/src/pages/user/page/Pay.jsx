import React from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { Helmet } from "react-helmet";
import Form from "react-bootstrap/Form";
import CitySelector from "../../../api/Geographical";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleDot,
  faMoneyBillAlt,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import Header from "../../../components/pay/Header";

const Pay = () => {
  return (
    <>
      <Helmet>
        <title>TEELAB - Thanh toán</title>
      </Helmet>
      <Header></Header>
      <form className="container flex flex-col lg:flex-row h-[100dvh]">
        <main className="lg:w-[65%] ps-0 p-[28px]">
          <div className="flex flex-col lg:flex-row justify-between gap-[28px] ">
            <div className="lg:w-[50%]">
              <h3 className="font-semibold text-xl mb-2">
                Thông tin nhận hàng
              </h3>
              <FloatingLabel
                label="Họ và tên"
                className="mb-2 border rounded-lg"
              >
                <Form.Control type="text" placeholder="Họ và tên" />
              </FloatingLabel>
              <FloatingLabel
                className="mb-2 border rounded-lg"
                label="Số điện thoại"
              >
                <Form.Control type="number" placeholder="Số điện thoại" />
              </FloatingLabel>
              <FloatingLabel className="mb-2 border rounded-lg" label="Địa chỉ">
                <Form.Control type="number" placeholder="Địa chỉ" />
              </FloatingLabel>
              <CitySelector />
              <FloatingLabel className="mb-2 border rounded-lg" label="Ghi chú">
                <Form.Control type="text" placeholder="Ghi chú" />
              </FloatingLabel>
            </div>
            <div className="lg:w-[50%]">
              <h3 className="font-semibold text-xl mb-2">Vận chuyển</h3>
              <div className="border border-gray-500 rounded-lg p-3 flex gap-3 items-center justify-between">
                <FontAwesomeIcon icon={faCircleDot} />
                <div className="flex flex-1 justify-between items-center">
                  <p>Giao hàng thông thường</p>
                  <b>20.000đ</b>
                </div>
              </div>
              <h3 className="font-semibold text-xl mb-2">Thanh toán</h3>
              <div className="border border-gray-500 rounded-lg p-3 flex gap-3 items-center justify-between">
                <FontAwesomeIcon icon={faCircleDot} />
                <div className="flex flex-1 justify-between items-center">
                  <p>Thanh toán khi nhận hàng</p>
                  <FontAwesomeIcon icon={faMoneyBillAlt} />
                </div>
              </div>
            </div>
          </div>
        </main>
        <aside className="flex-1 bg-[#fafafa] pe-0 p-[28px] border-l border-gray-300">
          <h3 className="font-semibold text-xl mb-2">Đơn hàng (2 sản phẩm)</h3>
          <div className="border border-gray-500 rounded-lg p-2 flex gap-3 items-center justify-between">
            <img
              src="https://bizweb.dktcdn.net/thumb/thumb/100/415/697/products/3-9b9639b1-59f1-4c01-96bd-dd5852bc872b.jpg?v=1702897051790"
              alt=""
              className="size-[40px]"
            />
            <div className="flex flex-1 justify-between items-center">
              <div className="flex flex-col max-w-[80%]">
                <b className="text-sm">
                  Áo Thun Teelab Local Brand Pawfect Day TS215
                </b>
                <p className="font-bold text-xs text-[#969696]">Kem/M</p>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-sm">185.000đ</p>
                <p className="text-sm">x1</p>
              </div>
            </div>
          </div>
          <div className="border border-gray-500 rounded-lg p-2 flex gap-3 items-center justify-between">
            <img
              src="https://bizweb.dktcdn.net/thumb/thumb/100/415/697/products/3-9b9639b1-59f1-4c01-96bd-dd5852bc872b.jpg?v=1702897051790"
              alt=""
              className="size-[40px]"
            />
            <div className="flex flex-1 justify-between items-center">
              <div className="flex flex-col max-w-[80%]">
                <b className="text-sm">
                  Áo Thun Teelab Local Brand Pawfect Day TS215
                </b>
                <p className="font-bold text-xs text-[#969696]">Kem/M</p>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-sm">185.000đ</p>
                <p className="text-sm">x1</p>
              </div>
            </div>
          </div>
          <div className="flex gap-2 justify-between items-center pt-3 mt-3 border-t-[1px] border-gray-300">
            <FloatingLabel
              className="border rounded-lg w-[65%]"
              label="Nhập mã giảm giá"
            >
              <Form.Control type="text" placeholder="Nhập mã giảm giá" />
            </FloatingLabel>
            <button
              type="button"
              className="flex-1 px-6 py-3 bg-slate-700 rounded-md text-white"
            >
              Áp dụng
            </button>
          </div>
          <div className="flex flex-col gap-1 my-3 py-3 border-b-[1px] border-t-[1px] border-gray-300">
            <div className="flex justify-between items-center ">
              <p className="text-[#717171]">Tạm tính</p>
              <p className="text-[#717171]">370.000đ</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-[#717171]">Phí vận chuyển</p>
              <p className="text-[#717171]">20.000đ</p>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-[#717171] text-lg">Tổng cộng</p>
            <p className="font-bold text-xl">390.000đ</p>
          </div>
          <div className="flex gap-3 justify-between items-center mt-3 pt-3 border-t-[1px] border-gray-300">
            <Link to="/gio-hang" className="text-base flex gap-1 items-center">
              <FontAwesomeIcon icon={faArrowLeft} />
              Quay về giỏ hàng
            </Link>
            <button className="px-5 py-3 bg-black text-white rounded-md">
              ĐẶT HÀNG
            </button>
          </div>
        </aside>
      </form>
    </>
  );
};

export default Pay;
