import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
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
  faBoxes,
  faBoxOpen,
  faTruckLoading,
  faClipboardList,
  faClipboardCheck,
  faClipboard,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  const [displayIndex, setDisplayIndex] = useState(false);
  const location = useLocation();

  const listActive = [
    "/admin/tong-quan",
    "/admin/bao-cao",
    "/admin/quan-ly-tai-khoan",
    "/admin/khuyen-mai",
    "/admin/tat-ca-don-hang",
    "/admin/don-huy",
    "/admin/don-tra-hang",
  ];

  const handleDisplay = (index) => {
    setDisplayIndex((pathIndex) => (pathIndex === index ? false : index));
  };

  const listSideBar = [
    {
      icon: faHotel,
      title: "Tổng quan",
      link: "/admin/tong-quan",
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

  const listDrop = [
    {
      icon: faListAlt,
      title: "Đơn hàng",
      icon_drop: faChevronDown,
      categoty: [
        {
          item: "Tất cả đơn hàng",
          linkCategory: "/admin/tat-ca-don-hang",
          icon: faBoxes,
        },
        { item: "Đơn bị huỷ", linkCategory: "/admin/don-huy", icon: faBoxOpen },
        {
          item: "Đơn bị trả",
          linkCategory: "/admin/don-tra-hang",
          icon: faTruckLoading,
        },
      ],
    },
    {
      icon: faBox,
      title: "Sản phẩm",
      icon_drop: faChevronDown,
      categoty: [
        {
          item: "Tất cả sản phẩm",
          linkCategory: "/admin/tat-ca-san-pham",
          icon: faClipboardList,
        },
        {
          item: "Kiểm hàng",
          linkCategory: "/admin/kiem-hang",
          icon: faClipboardCheck,
        },
        {
          item: "Sản phẩm hết hàng",
          linkCategory: "/admin/san-pham-het-hang",
          icon: faClipboard,
        },
      ],
    },
  ];

  const printListSideBar = listSideBar.map((item, index) => {
    return (
      <li key={index}>
        <NavLink
          to={item.link}
          className={`w-[300px] h-[60px] p-[15px] flex justify-between items-center rounded-md ${
            location.pathname === item.link
              ? "bg-[#e3e3e3]"
              : "hover:bg-[#e3e3e3]"
          }`}
        >
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={item.icon} className="w-5" />
            <div>
              <span className="text-[19px] font-light text-black">
                {item.title}
              </span>
            </div>
          </div>
        </NavLink>
      </li>
    );
  });

  const printDrop = (data) => {
    return data.map((item) => (
      <NavLink to={item.linkCategory}>
        <div
          className={`w-[300px] h-[60px] ps-10 p-[15px] flex justify-between items-center rounded-md ${
            location.pathname === item.linkCategory
              ? "bg-[#e3e3e3]"
              : "hover:bg-[#e3e3e3]"
          }`}
        >
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={item.icon} className="w-5" />
            <div>
              <span className="text-[19px] font-light text-black">
                {item.item}
              </span>
            </div>
          </div>
        </div>
      </NavLink>
    ));
  };

  const printListDrop = listDrop.map((item, index) => (
    <div key={index}>
      <li onClick={() => handleDisplay(index)}>
        <div className="w-[300px] h-[60px] cursor-pointer p-[15px] flex justify-between items-center rounded-md hover:bg-[#e3e3e3] ">
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
        </div>
      </li>
      <div className="border w-[300px]">
        {displayIndex === index && printDrop(item.categoty)}
      </div>
    </div>
  ));

  return (
    <>
      <div className="w-[320px] h-[100vh] bg-white border-e border-[#ccc]">
        <div className="flex justify-center mt-[30px]">
          <NavLink to="/admin/tong-quan">
            <img src={logo} alt="" />
          </NavLink>
        </div>
        <ul className="w-full flex items-center flex-col mt-[38px]">
          {printListSideBar}
          {printListDrop}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
