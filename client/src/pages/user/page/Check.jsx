import React, { useState, useEffect } from "react";
import Header from "../../../components/Header";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ExclamationCircleTwoTone } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import FormatPrice from "../../../utils/formatPrice";
import FormatString from "../../../utils/formatString";

const Check = () => {
  const navigate = useNavigate();
  const [api, SetApi] = useState([]);
  const { id } = useParams();
  console.log(id);
  const GetApi = async () => {
    await axios
      .get(`http://localhost:8080/order?id=${id}`)
      .then((response) => SetApi(response.data))
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    GetApi();
  }, []);

  if (api.length === 0) {
    navigate("/*");
  }

  const listCart = api[0]?.cart.map((item) => (
    <div key={item.id} className="flex justify-between py-[7px]">
      <div className="flex gap-2 items-center w-[51%]">
        <img
          className="w-[100px] h-[100px] object-cover"
          src={item.img}
          alt=""
        />
        <div className="flex flex-col items-start">
          <div>{item.name}</div>
          <div className="flex gap-1 items-center">
            <div>Trắng</div>
            <div>/</div>
            <div>M</div>
          </div>
        </div>
      </div>
      <div className="font-bold text-[#ff0000] flex justify-center items-center">
        {item?.price}
      </div>
      <div className="flex justify-center items-center">x{item?.num}</div>
      <div className="font-bold text-[#ff0000] flex justify-center items-center">
        {FormatPrice(FormatString(item.price) * item.num)}
      </div>
    </div>
  ));

  return (
    <>
      <Helmet>
        <title>Kiểm tra đơn hàng - TEELAB</title>
      </Helmet>
      <Header></Header>
      <div className="container">
        <div className="flex items-center gap-2 mb-2">
          <h2 className="font-semibold text-xl ">Kiểm tra đơn hàng</h2>
          <FontAwesomeIcon icon={faChevronRight} />
          <h2 className="font-semibold text-xl">Đơn hàng của bạn</h2>
        </div>
        <div className="flex items-center justify-between my-2">
          <h3 className="text-lg flex items-center gap-2">
            Chi tiết đơn hàng - Mã đơn hàng:
            <span className="font-bold text-xl">{api[0]?.id}</span>
          </h3>
          <h3 className="text-lg flex items-center gap-2">
            Tổng giá trị đơn hàng:{" "}
            <span className="font-bold text-xl text-[#ff0000]">
              {FormatPrice(api[0]?.price)}
            </span>
          </h3>
        </div>
        <hr />
        <div className="flex gap-10 p-3">
          <div className="flex flex-col gap-3 pe-10 border-e">
            <div className="flex items-center gap-2 ">
              <ExclamationCircleTwoTone twoToneColor="#52c41a" />
              <h3 className="">Thông tin nhận hàng</h3>
            </div>
            <div className="flex flex-col gap-2 ">
              <span>Họ và tên: {api[0]?.name}</span>
              <hr />
              <span>Email: {api[0]?.email}</span>
              <hr />
              <span>Số điện thoại: {api[0]?.phone}</span>
              <hr />
              <span>Đia chỉ: {api[0]?.address}</span>
              <hr />
              <span>Tỉnh thành: {api[0]?.city}</span>
              <hr />
              <span>Quận huyện: {api[0]?.district}</span>
              <hr />
              <span>Phường xã: {api[0]?.ward}</span>
              <hr />
              <span>Ghi chú: {api[0]?.note}</span>
              <hr />
            </div>
          </div>
          <div className="flex flex-col flex-1">
            <div className="flex items-center gap-2 mb-2">
              <ExclamationCircleTwoTone twoToneColor="#52c41a" />
              <h3 className="">Thông tin sản phẩm</h3>
            </div>
            <div className="flex flex-col gap-2">{listCart}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Check;
