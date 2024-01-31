import React, { useRef, useState } from "react";
import OrdersList from "../../../components/admin/OrdersList";
import { Helmet } from "react-helmet";
import { Button, DatePicker, Divider, Input, Select, Space, Tabs } from "antd";
import { PlusCircleTwoTone, PlusOutlined } from "@ant-design/icons";
import ProductsList from "../../../components/admin/ProductsList";
import { spaceChildren } from "antd/es/button";

const Order = () => {
  const items = [
    {
      key: "1",
      label: "Tất cả đơn hàng",
      children: <>{OrdersList("all")}</>,
    },
    {
      key: "2",
      label: "Chờ xử lý",
      children: <>{OrdersList(0)}</>,
    },
    {
      key: "3",
      label: "Đang vận chuyển",
      children: <>{OrdersList(1)}</>,
    },
    {
      key: "4",
      label: "Hoàn thành",
      children: <>{OrdersList(2)}</>,
    },
  ];

  const onChangeTime = (value, dateString) => {
    console.log("Selected Time: ", value);
    console.log("Formatted Selected Time: ", dateString);
  };
  const onOk = (value) => {
    console.log("onOk: ", value);
  };

  return (
    <>
      <Helmet>
        <title>TEELAB - Danh sách đơn hàng</title>
      </Helmet>
      <div className="w-[calc(100%-320px)] ms-[320px] mt-[56px] p-[30px]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 mb-3">
            <h3 className="text-2xl">Danh sách đơn hàng</h3>
            <DatePicker showTime onChange={onChangeTime} onOk={onOk} />
          </div>
          <Button className="bg-blue-600">
            <span className="text-white">
              <PlusCircleTwoTone /> Tạo đơn hàng mới
            </span>
          </Button>
        </div>
        <div className="flex items-center gap-1">
          <Tabs defaultActiveKey="1" items={items} className="w-full" />
        </div>
      </div>
    </>
  );
};

export default Order;
