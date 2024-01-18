import React from "react";
import Header from "../../../components/admin/Header";
import { FundTwoTone, UpCircleTwoTone } from "@ant-design/icons";

const Home = () => {
  return (
    <>
      <div className="flex-1">
        <Header></Header>
        <div className="flex justify-between items-center p-[30px] gap-3">
          <div className="flex items-center justify-between w-[25%] h-[150px] p-2 bg-[#f24f7c] rounded-md cursor-pointer hover:shadow-lg">
            <div className="flex flex-col gap-2 max-w-[60%]">
              <h3 className="text-white">Lượt truy cập</h3>
              <div className="flex items-center gap-2">
                <h2 className="font-semibold text-xl text-white">3000</h2>
                <UpCircleTwoTone twoToneColor="#52c41a" />
              </div>
              <span className="text-white">
                Last: <b className="text-white">4000</b>
              </span>
            </div>
            <FundTwoTone twoToneColor="#dee2e6" style={{ fontSize: "70px" }} />
          </div>
          <div className="flex items-center justify-between w-[25%] h-[150px] p-2 bg-[#716caf] rounded-md cursor-pointer hover:shadow-lg">
            <div className="flex flex-col gap-2 max-w-[60%]">
              <h3 className="text-white">Doanh thu</h3>
              <div className="flex items-center gap-2">
                <h2 className="font-semibold text-xl text-white">
                  100.000.000đ
                </h2>
                <UpCircleTwoTone twoToneColor="#52c41a" />
              </div>
              <span className="text-white">
                Last: <b className="text-white">4000</b>
              </span>
            </div>
            <FundTwoTone twoToneColor="#dee2e6" style={{ fontSize: "70px" }} />
          </div>
          <div className="flex items-center justify-between w-[25%] h-[150px] p-2 bg-[#32b0df] rounded-md cursor-pointer hover:shadow-lg">
            <div className="flex flex-col gap-2 max-w-[60%]">
              <h3 className="text-white">Đơn hàng</h3>
              <div className="flex items-center gap-2">
                <h2 className="font-semibold text-xl text-white">3000</h2>
                <UpCircleTwoTone twoToneColor="#52c41a" />
              </div>
              <span className="text-white">
                Last: <b className="text-white">4000</b>
              </span>
            </div>
            <FundTwoTone twoToneColor="#dee2e6" style={{ fontSize: "70px" }} />
          </div>
          <div className="flex items-center justify-between w-[25%] h-[150px] p-2 bg-[#3bbfc2] rounded-md cursor-pointer hover:shadow-lg">
            <div className="flex flex-col gap-2 max-w-[60%]">
              <h3 className="text-white">Lượt truy cập</h3>
              <div className="flex items-center gap-2">
                <h2 className="font-semibold text-xl text-white">3000</h2>
                <UpCircleTwoTone twoToneColor="#52c41a" />
              </div>
              <span className="text-white">
                Last: <b className="text-white">4000</b>
              </span>
            </div>
            <FundTwoTone twoToneColor="#dee2e6" style={{ fontSize: "70px" }} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
