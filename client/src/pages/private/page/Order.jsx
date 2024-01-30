import React from "react";
import OrdersList from "../../../components/admin/OrdersList";
import { Helmet } from "react-helmet";

const Order = () => {
  return (
    <>
      <Helmet>
        <title>TEELAB - Danh sách đơn hàng</title>
      </Helmet>
      <div className="w-[calc(100%-320px)] ms-[320px] mt-[56px] p-[30px]">
        <h3 className="text-2xl mb-3">Danh sách đơn hàng</h3>
        <div className="flex flex-col gap-1">{OrdersList("order")}</div>
      </div>
    </>
  );
};

export default Order;
