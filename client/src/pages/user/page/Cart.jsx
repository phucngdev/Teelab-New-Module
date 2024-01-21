import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../../components/pay/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { Helmet } from "react-helmet";
import FormatString from "../../../utils/formatString";
import FormatPrice from "../../../utils/formatPrice";
import { Button, Modal } from "antd";
import Icon_Incart from "/icon-header/icon_incart.svg";

const Cart = () => {
  const [cartLocal, setcartLocal] = useState(() => {
    const carts = JSON.parse(localStorage.getItem("listcart")) || [];
    return carts;
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [idDelete, setIdDelete] = useState(null);

  const showModal = (id) => {
    setIdDelete(id);
    setIsModalOpen(true);
  };

  // xoá sản phẩm
  const handleRemove = () => {
    const filterCart = cartLocal.filter((job) => job.id !== idDelete);
    localStorage.setItem("listcart", JSON.stringify(filterCart));
    setcartLocal(filterCart);
  };
  const handleOk = () => {
    handleRemove();
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const navigate = useNavigate();

  // hàm tăng giảm số lượng sản phẩm
  const handleIscrease = (index) => {
    const updatedCart = [...cartLocal];
    updatedCart[index].num += 1;
    setcartLocal(updatedCart);
  };

  const handleMinus = (index) => {
    const updatedCart = [...cartLocal];
    if (updatedCart[index].num > 1) {
      updatedCart[index].num -= 1;
      setcartLocal(updatedCart);
    }
  };

  // tính tổng tiền
  const calculateTotalPrice = () => {
    return cartLocal.reduce((total, cartItem) => {
      const itemTotal = cartItem.num * FormatString(cartItem.price);
      return total + itemTotal;
    }, 0);
  };
  const total = calculateTotalPrice();

  // click thanh toán
  const handlePay = () => {
    localStorage.setItem("listcart", JSON.stringify(cartLocal));
    navigate("/thanh-toan");
  };

  const printCart = cartLocal.map((cart, index) => (
    <div key={index} className="flex justify-between py-[7px]">
      <div className="flex gap-2 items-center w-[51%]">
        <img
          className="w-[100px] h-[100px] object-cover"
          src={cart.img}
          alt=""
        />
        <div className="flex flex-col items-start">
          <div>{cart.name}</div>
          <div className="flex gap-1 items-center">
            <div>Trắng</div>
            <div>/</div>
            <div>M</div>
          </div>
          <Button onClick={() => showModal(cart.id)}>
            <span className="text-[#ff0000]">Xoá</span>
          </Button>
        </div>
      </div>
      <div className="font-bold text-[#ff0000] flex justify-center items-center w-[16%]">
        {cart.price}
      </div>
      <div className="flex justify-center items-center w-[16%]">
        <button
          className="px-2 border"
          type="button"
          onClick={() => handleMinus(index)}
        >
          <FontAwesomeIcon icon={faMinus} />
        </button>
        <span className="w-8 text-center border">{cart.num}</span>
        <button
          className="px-2 border"
          type="button"
          onClick={() => handleIscrease(index)}
        >
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
      <div className="font-bold text-[#ff0000] flex justify-center items-center w-[16%]">
        {FormatPrice(cart.num * FormatString(cart.price))}
      </div>
    </div>
  ));

  return (
    <>
      <Helmet>
        <title>TEELAB - Giỏ hàng</title>
      </Helmet>
      <Header></Header>
      <Modal
        title="Xác nhận xoá sản phẩm"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okText={<p className="text-white">Xác nhận xoá</p>}
        cancelText="Huỷ"
        okButtonProps={{ style: { background: "#ff0000" } }}
      >
        <p>Bạn có muốn xoá sản phẩm này khỏi giỏ hàng?</p>
      </Modal>
      <form className="container">
        <h2 className="text-2xl font-light my-4">Giỏ hàng của bạn</h2>
        <div className="border border-[#ebebeb] p-[7px]">
          <div className="flex justify-between pb-[7px] border-b">
            <div className="font-bold w-[51%]">Thông tin sản phẩm</div>
            <div className="font-bold text-center w-[16%]">Đơn giá</div>
            <div className="font-bold text-center w-[16%]">Số lượng</div>
            <div className="font-bold text-center w-[16%]">Thành tiền</div>
          </div>
          {cartLocal.length > 0 ? (
            <>{printCart}</>
          ) : (
            <div className="flex flex-col justify-center items-center">
              <img className="w-20 m-[15px]" src={Icon_Incart} alt="" />
              <p className="mb-2">
                Không có sản phẩm nào trong giỏ hàng của bạn
              </p>
            </div>
          )}
        </div>
        <div className="flex justify-end mt-5">
          <div className="flex flex-col">
            <div className="flex justify-between items-center">
              <div>Tổng tiền:</div>
              <div className="font-bold text-2xl text-[#ff0000]">
                {FormatPrice(total)}
              </div>
            </div>
            <button
              onClick={handlePay}
              className="w-[360px] bg-black text-white py-2 rounded-sm hover:opacity-75 mt-1"
            >
              Thanh toán
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Cart;
