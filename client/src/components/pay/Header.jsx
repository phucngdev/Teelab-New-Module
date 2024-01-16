import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "/logo.png";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const location = useLocation();

  const isCartPage = location.pathname === "/gio-hang";
  const isCheckoutPage = location.pathname === "/thanh-toan";

  return (
    <>
      <header className="container mt-4 w-full flex items-center">
        <Link to="/" className="py-3">
          <img src={logo} alt="" />
        </Link>
        <Link
          to="/gio-hang"
          className={`ms-4 px-3 py-2 ${
            isCartPage
              ? "border-b border-black"
              : "hover:border-b hover:border-black"
          }`}
        >
          <h3>Giỏ hàng</h3>
        </Link>
        <FontAwesomeIcon icon={faChevronRight} />
        <Link
          to="/thanh-toan"
          className={`px-3 py-2 ${
            isCheckoutPage
              ? "border-b border-black"
              : "hover:border-b hover:border-black"
          }`}
        >
          <h3>Thanh toán</h3>
        </Link>
      </header>
    </>
  );
};

export default Header;
