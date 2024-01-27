import React, { useState } from "react";
import { NavLink, useLocation, Link, useNavigate } from "react-router-dom";
import logo from "/logo.png";
import {
  AppstoreOutlined,
  LineChartOutlined,
  CarryOutOutlined,
  ShoppingOutlined,
  CarOutlined,
  MailOutlined,
  SettingOutlined,
  CalendarOutlined,
  AccountBookOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem(
    <>
      <NavLink to="/admin">Tổng quan</NavLink>
    </>,
    "sub1",
    <AppstoreOutlined />
  ),
  getItem("Sản phẩm", "sub2", <MailOutlined />, [
    getItem(
      <>
        <NavLink to="/admin/danh-sach-san-pham">Danh sách sản phẩm</NavLink>
      </>,
      "1",
      <AccountBookOutlined />
    ),
    getItem(
      <>
        <NavLink to="/admin">Sản phẩm hết hạn</NavLink>
      </>,
      "2",
      <AccountBookOutlined />
    ),
  ]),
  getItem("Tài khoản", "sub3", <MailOutlined />, [
    getItem(
      <>
        <NavLink to="/admin/danh-sach-tai-khoan">Danh sách tài khoản</NavLink>
      </>,
      "3",
      <AccountBookOutlined />
    ),
    getItem(
      <>
        <NavLink to="/admin">Tài khoản </NavLink>
      </>,
      "4",
      <AccountBookOutlined />
    ),
  ]),
];

// submenu keys of first level
const rootSubmenuKeys = ["sub1", "sub2", "sub4"];
const Sidebar = () => {
  const [openKeys, setOpenKeys] = useState(["sub1"]);
  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (latestOpenKey && rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };
  return (
    <>
      <div className="w-[320px] h-[100vh] fixed top-0 left-0 bg-white border-e border-[#ccc]">
        <div className="flex justify-center mt-[30px]">
          <NavLink to="/admin">
            <img src={logo} alt="" />
          </NavLink>
        </div>
        <div className="w-full flex items-center flex-col mt-[38px]">
          <Menu
            mode="inline"
            openKeys={openKeys}
            onOpenChange={onOpenChange}
            style={{
              width: 256,
            }}
            items={items}
          />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
