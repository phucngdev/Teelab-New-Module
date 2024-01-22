import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { Carousel, Button } from "antd";
import { useNavigate } from "react-router-dom";

const Check_order = () => {
  const navigate = useNavigate();
  const [idOrder, setIdOrder] = useState("");
  const handleIdOrder = (e) => {
    setIdOrder(e.target.value);
  };
  const checkId = (id) => {
    navigate(`/kiem-tra-don-hang/${id}`);
  };
  return (
    <>
      <Helmet>
        <title>Kiểm tra đơn hàng | TEELAB</title>
      </Helmet>
      <Header></Header>
      <div className="container p-6 flex gap-3">
        <div className="w-[30%] px-[15px] rounded-md shadow-lg ">
          <h5 className=" text-[#333] text-xl font-medium pt-4">
            Kiểm tra đơn hàng
          </h5>
          <hr className="my-[18px] border-t-2" />
          <form className="w-full flex flex-col gap-2 mx-auto">
            <h3>Nhập mã đơn hàng</h3>
            <input
              className="px-3 py-1 rounded-md my-2 border"
              type="text"
              placeholder="Nhập tại đây..."
              value={idOrder}
              onChange={handleIdOrder}
            />
            <Button
              onClick={() => checkId(idOrder)}
              className="mb-4 bg- rounded-md bg-blue-600 hover:bg-blue-500"
              type="button"
            >
              <span className="text-[13px] text-white font-normal text-center">
                Kiểm tra
              </span>
            </Button>
            <hr />
            <h3 className="text-center mt-2">
              Liên hệ với TEELAB qua email TEELAB@gmail.com để biết thêm chi
              tiết
            </h3>
          </form>
        </div>
        <div className="flex-1 h-full overflow-hidden">
          <Carousel autoplay>
            <div>
              <img
                src="https://bizweb.dktcdn.net/100/415/697/themes/902041/assets/slider_3.jpg?1705474695254"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://bizweb.dktcdn.net/100/415/697/themes/902041/assets/slider_4.jpg?1705474695254"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://bizweb.dktcdn.net/100/415/697/themes/902041/assets/slider_5.jpg?1705474695254"
                alt=""
              />
            </div>
          </Carousel>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Check_order;
