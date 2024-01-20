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
import { Collapse } from "antd";
import { DownCircleTwoTone, ShoppingTwoTone } from "@ant-design/icons";
import Nav from "./Nav";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";

const Sidebar = () => {
  const location = useLocation();

  const listSideBar = [
    {
      id: 1,
      icon: faHotel,
      title: "Tổng quan",
      link: "/admin/tong-quan",
      drop: false,
    },
    {
      id: 2,
      icon: faListAlt,
      title: "Đơn hàng",
      icon_drop: faChevronDown,
      drop: true,
      categoty: [
        {
          item: "Tất cả đơn hàng",
          linkCategory: "/admin/don-hang/tat-ca-don-hang",
          icon: faBoxes,
        },
        {
          item: "Đơn bị huỷ",
          linkCategory: "/admin/don-hang/don-bi-huy",
          icon: faBoxOpen,
        },
        {
          item: "Đơn bị trả",
          linkCategory: "/admin/don-hang/don-bi-tra",
          icon: faTruckLoading,
        },
      ],
    },
    {
      id: 3,
      icon: faBox,
      title: "Sản phẩm",
      icon_drop: faChevronDown,
      drop: true,
      categoty: [
        {
          item: "Tất cả sản phẩm",
          linkCategory: "/admin/san-pham/tat-ca-san-pham",
          icon: faClipboardList,
        },
        {
          item: "Kiểm hàng",
          linkCategory: "/admin/san-pham/kiem-hang",
          icon: faClipboardCheck,
        },
        {
          item: "Sản phẩm hết hàng",
          linkCategory: "/admin/san-pham/san-pham-het-hang",
          icon: faClipboard,
        },
      ],
    },
    {
      id: 4,
      icon: faChartBar,
      title: "Báo cáo",
      link: "/admin/bao-cao",
      drop: false,
    },
    {
      id: 5,
      icon: faUsers,
      title: "Quản lý tài khoản",
      link: "/admin/quan-ly-tai-khoan",
      drop: false,
    },
    {
      id: 6,
      icon: faTags,
      title: "Khuyến mãi",
      link: "/admin/khuyen-mai",
      drop: false,
    },
  ];

  const printDrop = () => {
    return categoty.map((item, index) => (
      <NavLink to={item.linkCategory} key={index}>
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

  const printListSideBar = listSideBar.map((item, index) => {
    return (
      <div key={item.id}>
        {item.drop ? (
          <>
            <div>
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
            </div>
          </>
        ) : (
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
        )}
      </div>
    );
  });

  // const printListDrop = listDrop.map((item, index) => (
  //   <div key={index}>
  //     <li onClick={() => handleDisplay(index)}>
  //       <div className="w-[300px] h-[60px] cursor-pointer p-[15px] flex justify-between items-center rounded-md hover:bg-[#e3e3e3] ">
  //         <div className="flex items-center gap-2">
  //           <FontAwesomeIcon icon={item.icon} className="w-5" />
  //           <div>
  //             <span className="text-[19px] font-light text-black">
  //               {item.title}
  //             </span>
  //           </div>
  //         </div>
  //         <div className="">
  //           <FontAwesomeIcon icon={item.icon_drop} className="w-5 " />
  //         </div>
  //       </div>
  //     </li>
  //     <div className="border w-[300px]">
  //       {displayIndex === index && printDrop(item.categoty)}
  //     </div>
  //   </div>
  // ));

  return (
    <>
      <div className="w-[320px] h-[100vh] fixed top-0 left-0 bg-white border-e border-[#ccc]">
        <div className="flex justify-center mt-[30px]">
          <NavLink to="/admin/tong-quan">
            <img src={logo} alt="" />
          </NavLink>
        </div>
        <div className="w-full flex items-center flex-col mt-[38px]"></div>
      </div>
    </>
  );
};

export default Sidebar;
