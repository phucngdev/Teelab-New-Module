import React from "react";
import { Helmet } from "react-helmet";

const ListItem = ({ title, texts }) => (
  <div>
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

const titles = [
  {
    title: "1. CHÍNH SÁCH ĐỔI SẢN PHẨM",
    texts: [
      "– Áp dụng 01 lần đổi /1 đơn hàng với các đơn hàng mua online và các đơn hàng mua tại cửa hàng.",
      "– Sản phẩm đổi trong thời gian 3 ngày kể từ ngày mua hàng trên hoá đơn (đối với khách mua hàng trực tiếp tại cửa hàng), 3 ngày kể từ ngày nhận hàng (Đối với khách mua online)",
      "– Sản phẩm còn mới nguyên tem, tags và mang theo hoá đơn mua hàng, sản phẩm chưa giặt và không dơ bẩn, hư hỏng bởi những tác nhân bên ngoài cửa hàng sau khi mua hàng.",
      "– Không áp dụng đối với các sản phẩm là phụ kiện",
    ],
  },
  {
    title: "2. PHƯƠNG THỨC ĐỔI SẢN PHẨM",
    texts: [
      "– Hàng mua trực tiếp tại cửa hàng: Đổi trả trực tiếp tại cửa hàng mua hàng",
      "– Hàng mua online (thông qua webiste, Shopee, Lazada): liên hệ fanpage Teelab để được hướng dẫn đổi trả",
    ],
  },
  {
    title: "3. CHI PHÍ ĐỔI HÀNG",
    texts: [
      "– Miễn phí đổi hàng cho khách mua ở TEELAB trong trường hợp bị lỗi từ nhà sản xuất, giao nhầm hàng, bị hư hỏng trong quá trình vận chuyển hàng.",
      "– Trong trường hợp không vừa size hay khách hàng không ưng sản phẩm không muốn nhận hàng phiền khách hàng trả ship hoàn đơn hàng về",
    ],
  },
];

const prinTitle = titles.map((item, index) => (
  <ListItem key={index} title={item.title} texts={item.texts} />
));

const Service = () => {
  return (
    <div className="service">
      <Helmet>
        <title>Chính sách Đổi trả | TEELAB</title>
      </Helmet>
      <div className="container mx-auto px-[15px] mt-[56px] mb-[30px]">
        <h1 className="text-[40px] text-[#333] mb-5 font-light">
          Chính sách Đổi trả
        </h1>
        <div>
          {prinTitle}
          <p className="mb-4">
            <span className="text-[#333] text-[14px] font-extrabold">
              TEELAB
            </span>
          </p>
          <p className="mb-4">
            <span className="text-[#333] text-[14px] font-extrabold">
              Experiment on Your Style
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;
