import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

const titles = [
  {
    title: "T E E L A B",
    texts: [
      "▪️Website: https://teelab.vn",
      "▪️Shopee Mall: https://shopee.vn/teelab_official",
      "▪️Lazada Mall: https://lazada.vn/shop/teelab",
    ],
  },
  {
    title: "HỆ THỐNG CỬA HÀNG",
    texts: [
      "▪️CS1 - Thái Nguyên: 235 Quang Trung, TP Thái Nguyên",
      "▪️CS2 - Thái Nguyên: 599 Lương Ngọc Quyến, TP Thái Nguyên",
      "▪️CS3 - Thái Bình: 161 Hai Bà Trưng, TP Thái Bình",
      "▪️CS4 - Vĩnh Phúc: 06 Mê Linh, TP Vĩnh Yên",
      "▪️CS5 - Hải Dương: 09 Nguyễn Thị Duệ, TP Chí Linh",
    ],
  },
];

const ListItem = ({ title, texts }) => (
  <div className=" md:ms-10">
    <p key={title} className="mb-4">
      <span className="text-[#333] text-[14px] font-extrabold">{title}</span>
    </p>
    {texts.map((text, index) => (
      <p key={index} className="mb-4">
        <span className="text-[#333] text-[14px] font-normal">{text}</span>
      </p>
    ))}
  </div>
);

const prinTitle = titles.map((item, index) => (
  <ListItem key={index} title={item.title} texts={item.texts} />
));

const Shop_system = () => {
  return (
    <div className="system">
      <Helmet>
        <title>Hệ thống cửa hàng | TEELAB</title>
      </Helmet>
      <Header></Header>
      <div className="container mx-auto px-[15px] mt-[56px] mb-[30px]">
        <h1 className="text-[40px] text-[#333] mb-5 font-light">
          Hệ thống cửa hàng
        </h1>
        <div>{prinTitle}</div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Shop_system;
