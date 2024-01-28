import { Button } from "antd";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import loadData from "../../../api/CallApi";
import {
  PlusCircleTwoTone,
  DashOutlined,
  MailOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
const ManagerAcc = () => {
  const [account, setAccount] = useState();
  useEffect(() => {
    loadData("account", setAccount);
  }, []);

  const listAccount = account?.map((acc) => (
    <div
      key={acc.id}
      className="flex flex-col items-center h-[300px] p-2 shadow-lg "
    >
      <div className="w-full flex justify-end ">
        <DashOutlined className="hover:bg-gray-100 p-1 cursor-pointer rounded-full" />
      </div>
      <img
        className="w-[90px] h-[90px] rounded-full object-cover"
        src={acc.img}
        alt=""
      />
      <h3 className="text-base text-black font-bold mt-1">{acc.name}</h3>
      <span className="text-sm text-gray-500 font-medium">{acc.position}</span>
      <div className="mt-3 w-full flex-1 flex flex-col bg-slate-100 rounded-md p-2">
        <div className="flex items-center justify-between">
          <div className="w-[40%] flex flex-col">
            <span className="text-sm text-gray-500">Chi nhánh</span>
            <span className="text-sm text-gray-700 font-medium">
              {acc.branch}
            </span>
          </div>
          <div className="w-[40%] flex flex-col">
            <span className="text-sm text-gray-500">Ngày sinh</span>
            <span className="text-sm text-gray-700 font-medium">
              {acc.date}
            </span>
          </div>
        </div>
        <div className="w-full flex items-center gap-2 mt-3 overflow-hidden">
          <MailOutlined />
          <span className="text-sm">{acc.email}</span>
        </div>
        <div className="flex items-center gap-2 mt-1">
          <PhoneOutlined />
          <span className="text-sm">{acc.phone}</span>
        </div>
      </div>
    </div>
  ));

  return (
    <>
      <Helmet>
        <title>TEELAB - Danh sách tài khoản</title>
      </Helmet>
      <div className="w-[calc(100%-320px)] ms-[320px] mt-[56px] p-[30px]">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl mb-3">{account?.length} Employees</h3>
          <Button
            type="button"
            className="border-2 border-green-900 hover:opacity-50 rounded flex items-center"
          >
            <PlusCircleTwoTone twoToneColor="#52c41a" />
            <span className="text-green-900 ">Thêm mới nhân sự</span>
          </Button>
        </div>
        <div className="grid grid-cols-4 gap-3 mt-3">{listAccount}</div>
      </div>
    </>
  );
};

export default ManagerAcc;
