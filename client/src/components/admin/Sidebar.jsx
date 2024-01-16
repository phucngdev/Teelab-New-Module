import React from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHotel,
  faListAlt,
  faBox,
  faChartBar,
  faUsers,
  faTags,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, message, Space } from "antd";

const onClick = ({ key }) => {
  message.info(`Click on item ${key}`);
};

const items = [
  {
    label: "1st menu item",
    key: "1",
  },
  {
    label: "2nd menu item",
    key: "2",
  },
  {
    label: "3rd menu item",
    key: "3",
  },
];

const Sidebar = () => {
  const listSideBar = [
    {
      icon: faHotel,
      title: "Tổng quan",
      link: "/admin/tong-quan",
    },
    {
      icon: faListAlt,
      title: "Đơn hàng",
      link: "/admin/don-hang",
      icon_drop: faChevronDown,
    },
    {
      icon: faBox,
      title: "Sản phẩm",
      link: "/admin/san-pham",
      icon_drop: faChevronDown,
    },
    {
      icon: faChartBar,
      title: "Báo cáo",
      link: "/admin/bao-cao",
    },
    {
      icon: faUsers,
      title: "Quản lý tài khoản",
      link: "/admin/quan-ly-tai-khoan",
    },
    {
      icon: faTags,
      title: "Khuyến mãi",
      link: "/admin/khuyen-mai",
    },
  ];

  const printListSideBar = listSideBar.map((item, index) => (
    <li key={index}>
      <NavLink
        to={item.link}
        exact
        activeClassName="bg-[#e3e3e3]"
        className="w-[300px] h-[60px] p-[15px] flex justify-between items-center rounded-md hover:bg-[#e3e3e3] "
      >
        <div className="flex items-center gap-2">
          <FontAwesomeIcon icon={item.icon} className="w-5" />
          <div>
            <span className="text-[19px] font-light text-black">
              {item.title}
            </span>
          </div>
        </div>
        <div className="">
          <FontAwesomeIcon icon={item.icon_drop} className="w-5 " />
        </div>
      </NavLink>
    </li>
  ));
  return (
    <>
      <div className="w-[320px] h-[100vh] bg-white fixed left-0 top-0 border-e  border-[#ccc]">
        <div className="flex justify-center mt-[38px]">
          <img src={logo} alt="" />
        </div>
        <ul className="w-full flex items-center flex-col mt-[38px]">
          {printListSideBar}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
