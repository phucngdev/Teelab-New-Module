import React, { useState } from "react";
import { NavLink, useLocation, Link } from "react-router-dom";
import logo from "/logo.png";
import {
  AppstoreOutlined,
  LineChartOutlined,
  CarryOutOutlined,
  ShoppingOutlined,
  CarOutlined,
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
      <Link to="/admin">Tổng quan</Link>
    </>,
    "sub1",
    <AppstoreOutlined />
  ),
  getItem("Báo cáo", "sub2", <LineChartOutlined />, [
    getItem(
      <>
        <Link to="/doanh-thu-chi-tiet">Doanh thu chi tiết</Link>
      </>,
      "5"
    ),
    getItem(
      <>
        <Link to="/doanh-so-ban-hang">Doanh số bán hàng</Link>
      </>,
      "6"
    ),
  ]),
  getItem("Quản lý đơn hàng", "sub3", <CarryOutOutlined />, [
    getItem(
      <>
        <Link to="/danh-sach-don-hang">Danh sách đơn hàng</Link>
      </>,
      "7"
    ),
    getItem("Đơn hàng đã xác nhận", "8"),
    getItem("Đơn hàng chưa xác nhận", "9"),
    getItem("Đơn hàng bị huỷ", "10"),
    getItem("Đơn hàng bị trả lại", "11"),
    getItem("Đơn hàng đang vận chuyển", "12"),
  ]),
  getItem("Quản lý sản phẩm", "sub4", <ShoppingOutlined />, [
    getItem("Danh sách sản phẩm", "13"),
    getItem("Quản lý kho", "14"),
    getItem("Kiểm hàng", "15"),
    getItem("Chuyển hàng", "16"),
    getItem("Điều chỉnh giá vốn", "17"),
  ]),
  getItem("Dịch vụ vận chuyển", "sub5", <CarOutlined />),
  getItem("Đặt hàng", "sub6", <CalendarOutlined />),
  getItem("Sổ quỹ", "sub7", <AccountBookOutlined />),
  getItem("Quản lý tài khoản", "sub8", <UserOutlined />, [
    getItem("Danh sách tài khoản", "18"),
    getItem("Danh sách chặn", "19"),
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
