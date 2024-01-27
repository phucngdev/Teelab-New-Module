import { Button } from "antd";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import loadData from "../../../api/CallApi";

const ManagerAcc = () => {
  const [account, setAccount] = useState();
  useEffect(() => {
    loadData("account", setAccount);
  }, []);

  const listAccount = account?.map((acc, index) => (
    <div
      key={index}
      className="flex items-center justify-between border border-t-0 text-center"
    >
      <div className="border-x py-3 w-[10%]">{acc.id}</div>
      <div className="border-x py-3 w-[15%]">{acc.name}</div>
      <div className="border-x py-3 w-[30%]">{acc.email}</div>
      <div className="border-x py-3 w-[15%]">{acc.username}</div>
      <div className="border-x py-3 w-[15%]">{acc.password}</div>
      <div className="flex items-center justify-around w-[15%]">
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
        <title>TEELAB - Danh sách tài khoản</title>
      </Helmet>
      <div className="w-[calc(100%-320px)] ms-[320px] mt-[56px] p-[30px]">
        <h3 className="text-2xl mb-3">danh sách tài khoản</h3>
        <div className="flex items-center justify-between">
          <span className="">Tất cả tài khoản</span>
          <Button type="button" className="bg-blue-600 hover:bg-blue-500">
            <span className="text-white">Thêm mới tài khoản</span>
          </Button>
        </div>
        <div className="flex items-center justify-between border text-center mt-3">
          <div className="border-x py-3 w-[10%]">id</div>
          <div className="border-x py-3 w-[15%]">Tên tài khoản</div>
          <div className="border-x py-3 w-[30%]">Email</div>
          <div className="border-x py-3 w-[15%]">Tên đăng nhập</div>
          <div className="border-x py-3 w-[15%]">Mật khẩu</div>
          <div className="border-x py-3 w-[15%]">Chức năng</div>
        </div>
        <div className="flex flex-col">{listAccount}</div>
      </div>
    </>
  );
};

export default ManagerAcc;
