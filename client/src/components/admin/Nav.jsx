import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBoxes,
  faBoxOpen,
  faTruckLoading,
} from "@fortawesome/free-solid-svg-icons";
const Nav = () => {
  const categoty = [
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
  ];
  return (
    <>
      {categoty.map((item, index) => (
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
      ))}
    </>
  );
};

export default Nav;
