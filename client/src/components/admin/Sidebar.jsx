import React from "react";
import { NavLink, Link } from "react-router-dom";

import logo_footer from "/logo_footer.png";
import icon_1 from "../../../public/icon-sidebar-admin/icon_1.svg";
import icon_2 from "../../../public/icon-sidebar-admin/icon_2.svg";
import icon_3 from "../../../public/icon-sidebar-admin/icon_3.svg";
import icon_4 from "../../../public/icon-sidebar-admin/icon_4.svg";
import icon_5 from "../../../public/icon-sidebar-admin/icon_5.svg";
import icon_6 from "../../../public/icon-sidebar-admin/icon_6.svg";
import icon_7 from "../../../public/icon-sidebar-admin/icon_7.svg";
import icon_8 from "../../../public/icon-sidebar-admin/icon_8.svg";
import icon_9 from "../../../public/icon-sidebar-admin/icon_9.svg";

const listSideBar = [
  {
    icon: icon_1,
    title: "Tổng quan",
    link: "/tong-quan",
  },
  {
    icon: icon_2,
    title: "Đơn hàng",
    link: "/don-hang",
    icon_drop: icon_9,
  },
  {
    icon: icon_3,
    title: "Sản phẩm",
    link: "/san-pham",
    icon_drop: icon_9,
  },
  {
    icon: icon_4,
    title: "Báo cáo",
    link: "/bao-cao",
  },
  {
    icon: icon_5,
    title: "Quản lý tài khoản",
    link: "/quan-ly-tai-khoan",
  },
  {
    icon: icon_6,
    title: "Khuyến mãi",
    link: "/khuyen-mai",
  },
  {
    icon: icon_7,
    title: "Giao diện",
    link: "/giao-dien",
  },
  {
    icon: icon_8,
    title: "Kênh người bán",
    link: "/kenh-nguoi-ban",
  },
];

const printListSideBar = listSideBar.map((item, index) => (
  <li key={index}>
    <NavLink
      to={item.link}
      activeClassName="bg-[#007BFF]"
      className="w-[300px] h-[60px] p-[15px] flex justify-between items-center"
    >
      <div className="flex items-center gap-2">
        <img src={item.icon} alt="" />
        <div>
          <span className="text-[19px] font-light text-white">
            {item.title}
          </span>
        </div>
      </div>
      <div className="">
        <img src={item.icon_drop} alt="" />
      </div>
    </NavLink>
  </li>
));

const Sidebar = () => {
  return (
    <>
      <div className="w-[320px] h-[100vh] bg-[#686868] fixed left-0 top-0">
        <div className="flex justify-center mt-[38px]">
          <img src={logo_footer} alt="" />
        </div>
        <ul className="w-full flex items-center flex-col mt-[38px]">
          {printListSideBar}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
