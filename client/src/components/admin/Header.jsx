import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSignOutAlt,
  faEnvelopeOpen,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { Tooltip } from "antd";

const Header = () => {
  const listPath = [
    { path: "/admin/tong-quan", text: "Tổng quan" },
    { path: "/admin/bao-cao", text: "Báo cáo" },
    { path: "/admin/quan-ly-tai-khoan", text: "Quản lý tài khoản" },
    { path: "/admin/khuyen-mai", text: "Khuyến mãi" },
    {
      path: "/admin/don-hang/tat-ca-don-hang",
      text: "Đơn hàng - Tất cả sản phẩm",
    },
    { path: "/admin/don-hang/don-bi-huy", text: "Đơn hàng - Đơn bị huỷ" },
    { path: "/admin/don-hang/don-bi-tra", text: "Đơn hàng - Đơn bị trả" },
    {
      path: "/admin/san-pham/tat-ca-san-pham",
      text: "Sản phẩm - Tất cả sản phẩm",
    },
    {
      path: "/admin/san-pham/kiem-hang",
      text: "Sản phẩm - Kiểm hàng",
    },
    {
      path: "/admin/san-pham/san-pham-het-hang",
      text: "Sản phẩm - Sản phẩm hết hàng",
    },
  ];

  const routePage = listPath.find((path) => path.path == location.pathname);

  return (
    <>
      <header className="w-[calc(100%-320px)] h-[56px] bg-white border-b flex justify-between items-center px-8 fixed top-0 left-[320px] shadow-md">
        <h3 className="flex items-center">
          Admin{" "}
          <FontAwesomeIcon
            icon={faChevronRight}
            className="w-10 h-5 cursor-pointer"
          />{" "}
          {routePage?.text}
        </h3>
        <div className="flex items-center gap-4">
          <div className="relative">
            <Tooltip title="Email">
              <FontAwesomeIcon
                icon={faEnvelopeOpen}
                className="w-10 h-5 cursor-pointer"
              />
              <span className="absolute top-0 right-0 w-4 h-4 text-sm flex justify-center items-center rounded-full bg-red-600 text-white">
                0
              </span>
            </Tooltip>
          </div>
          <div className="flex items-center gap-2 border-x px-3 cursor-pointer">
            <img
              className="w-9 h-9 rounded-full"
              src="https://firebasestorage.googleapis.com/v0/b/module-1-62bdd.appspot.com/o/uploads%2Fabc.jpeg?alt=media&token=2f4569d7-b502-4bab-98ca-c40e6b78c1c3"
              alt=""
            />
            <span>admin</span>
          </div>
          <Tooltip title="Đăng xuất">
            <FontAwesomeIcon
              icon={faSignOutAlt}
              className="w-7 border border-black py-1 rounded-sm cursor-pointer"
            />
          </Tooltip>
        </div>
      </header>
    </>
  );
};

export default Header;
