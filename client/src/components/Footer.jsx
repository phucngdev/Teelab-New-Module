import React from "react";
import { Link } from "react-router-dom";
import logo_footer from "/logo_footer.png";
import icon_address from "/icon-footer/icon-address.svg";
import icon_submit from "/icon-footer/icon-submit.svg";

const address = [
  "CS1 - Thái Nguyên: 235 Quang Trung, TP Thái Nguyên",
  "CS2 - Thái Nguyên: 599 Lương Ngọc Quyến, TP Thái Nguyên",
  "CS3 - Thái Bình: 161 Hai Bà Trưng, TP Thái Bình",
  "CS4 - Vĩnh Phúc: 06 Mê Linh, TP Vĩnh Yên",
  "CS5 - Hải Dương: 09 Nguyễn Thị Duệ, TP Chí Linh",
];

const listItems = address.map((item, index) => (
  <li key={index} className="relative mb-[15px]">
    <p className="ps-8 text-base text-[#999999]">
      <img src={icon_address} className="absolute top-0 left-0" alt="" />
      {item}
    </p>
  </li>
));

const aboutItem = [
  {
    key: "/",
    name: "Trang chủ",
  },
  {
    key: "/tat-ca-san-pham",
    name: "Tất cả sản phẩm",
  },
  {
    key: "/chinh-sach-doi-tra",
    name: "Chính sách đổi trả",
  },
  {
    key: "/bang-size",
    name: "Bảng size",
  },
  {
    key: "/kiem-tra-don-hang",
    name: "Kiểm tra đơn hàng",
  },
  {
    key: "/he-thong-cua-hang",
    name: "Hệ thống cửa hàng",
  },
];

const listAbout = aboutItem.map((item, index) => (
  <li key={index} className="mb-[15px] md:text-left">
    <Link to={item.key} className="text-sm md:text-base text-[#999999]">
      {item.name}
    </Link>
  </li>
));

const iconItem = [
  "/icon-mxh/facebook.svg",
  "/icon-mxh/instagram.svg",
  "/icon-mxh/tiktok.svg",
  "/icon-mxh/shopee.png",
  "/icon-mxh/lazada.png",
];

const iconList = iconItem.map((item, index) => (
  <li key={index} className="w-full h-full">
    <a href="">
      <img
        style={{ objectFit: "contain", height: "100%" }}
        src={item}
        key={index}
        alt="sample"
      />
    </a>
  </li>
));

const Footer = () => {
  return (
    <footer className="footer bg-black">
      <div className="container mx-auto pt-10">
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div>
            <div className="mb-[25px]">
              <a href="">
                <img src={logo_footer} alt="" />
              </a>
            </div>
            <ul className="pe-[80px]">{listItems}</ul>
          </div>
          <div className="flex flex-col items-center px-[15px]">
            <h4 className="text-lg text-[#999999] font-bold mt-[2px] mb-6">
              ĐĂNG KÝ
            </h4>
            <form action="" className="w-full h-10 relative mb-5">
              <input
                id="input_email"
                className="w-full h-full border-0 ps-2"
                type="email"
                placeholder="Nhập địa chỉ email"
              />
              <button
                className="w-[34px] h-[34px] flex items-center justify-center bg-[#646464] absolute right-[3px] top-[50%] translate-y-[-50%] rounded-sm"
                type="submit"
              >
                <img src={icon_submit} alt="" />
              </button>
            </form>
            <p className="mb-3 text-[#999999] text-base font-light">
              Theo dõi Teelab từ các nền tảng khác nhau nhé!
            </p>
            <ul className="flex gap-4 mb-[10px]">{iconList}</ul>
          </div>
          <div className="md:ps-[100px]">
            <h4 className="text-lg flex justify-center text-[#999999] font-bold mt-[2px] mb-6 md:block">
              ABOUT US
            </h4>
            <ul className="grid grid-cols-3 items-center text-center gap-2 md:block">
              {listAbout}
              <li>
                <Link to="/admin">admin</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
