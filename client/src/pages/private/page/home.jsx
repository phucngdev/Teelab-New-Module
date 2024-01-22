import React from "react";
import { Helmet } from "react-helmet";
import {
  FundTwoTone,
  UpCircleTwoTone,
  DownCircleTwoTone,
  CreditCardTwoTone,
  ShoppingTwoTone,
} from "@ant-design/icons";
import FormatPrice from "../../../utils/formatPrice";
import "chart.js/auto";
import { Line, Bar, Doughnut } from "react-chartjs-2";

const HomeAdmin = () => {
  const main = [
    {
      id: 1,
      title: "Lượt truy cập",
      bg_item: "bg-[#f24f7c]",
      data: 3000,
      last_data: 4000,
      icon: FundTwoTone,
    },
    {
      id: 2,
      title: "Doanh thu",
      bg_item: "bg-[#716caf]",
      data: 100000,
      last_data: 2000,
      icon: CreditCardTwoTone,
    },
    {
      id: 3,
      title: "Đơn hàng",
      bg_item: "bg-[#32b0df]",
      data: 3000,
      last_data: 4000,
      icon: ShoppingTwoTone,
    },
    {
      id: 4,
      title: "Lượt truy cập",
      bg_item: "bg-[#3bbfc2]",
      data: 3000,
      last_data: 4000,
      icon: FundTwoTone,
    },
  ];

  const mainItem = main.map((item) => (
    <div
      key={item.id}
      className={`flex items-center justify-between w-[25%] h-[150px] p-2 ${item.bg_item} rounded-md cursor-pointer hover:shadow-lg`}
    >
      <div className="flex flex-col gap-2 max-w-[60%]">
        <h3 className="text-white">{item.title}</h3>
        <div className="flex items-center gap-2">
          <h2 className="font-semibold text-xl text-white">
            {item.id === 2 ? FormatPrice(item.data) : item.data}
          </h2>
          {item.data > item.last_data ? (
            <UpCircleTwoTone twoToneColor="#52c41a" />
          ) : (
            <DownCircleTwoTone twoToneColor="#eb2f96" />
          )}
        </div>
        <span className="text-white">
          Last: <b className="text-white">{item.last_data}</b>
        </span>
      </div>
      {React.createElement(item.icon, {
        twoToneColor: "#dee2e6",
        style: { fontSize: "70px" },
      })}
    </div>
  ));

  const dataTotal = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Doanh thu theo tháng",
        backgroundColor: ["rgb(37 99 235)"],
        data: [
          2478, 5267, 734, 784, 433, 8555, 374, 782, 3742, 3264, 6756, 3545,
        ],
      },
    ],
  };

  const optionsTotal = {
    legend: { display: false },
    title: {
      display: true,
      text: "Bảng doanh thu",
    },
  };

  const dataDevice = {
    labels: ["Mobile Phone", "Computer", "tablet"],
    datasets: [
      {
        label: "Lượng thiết bị truy cập",
        backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f"],
        data: [2478, 5267, 734],
      },
    ],
  };

  const optionsDevice = {
    legend: {
      display: true,
      position: "bottom",
    },
    title: {
      display: true,
      text: "Lượng thiết bị truy cập",
    },
  };
  return (
    <>
      <Helmet>
        <title>TEELAB -Tổng quan</title>
      </Helmet>

      <div className="w-[calc(100%-320px)] ms-[320px] mt-[56px]">
        <div className="flex justify-between items-center p-[30px] gap-3">
          {mainItem}
        </div>
        <div className="flex items-center justify-between p-[30px] border-y-[2px]">
          <div className="w-[60%] h-[350px] flex flex-col justify-between">
            <Bar data={dataTotal} options={optionsTotal} />
            <h3 className="text-center">Biểu đồ doanh thu</h3>
          </div>
          <div className="w-[30%] h-[350px] flex flex-col justify-between">
            <Doughnut data={dataDevice} options={optionsDevice} />
            <h3 className="text-center">Biểu đồ thiết bị truy cập</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeAdmin;
