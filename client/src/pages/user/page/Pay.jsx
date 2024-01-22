import React, { useState } from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import Form from "react-bootstrap/Form";
import CitySelector from "../../../api/Geographical";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleDot,
  faMoneyBillAlt,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import Header from "../../../components/pay/Header";
import FormatString from "../../../utils/formatString";
import FormatPrice from "../../../utils/formatPrice";
import { InfoCircleTwoTone, CheckCircleTwoTone } from "@ant-design/icons";
import { Modal, notification } from "antd";
import PostDataToApi from "../../../api/postApi";

const Pay = () => {
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalSucces, setIsModalSucces] = useState(false);
  const [api, contextHolder] = notification.useNotification();
  const openNotification = () => {
    api.open({
      message: "Cảnh báo!",
      description: (
        <div className="flex items-center gap-2">
          <CheckCircleTwoTone
            twoToneColor="#eb2f4b"
            style={{ fontSize: "40px" }}
          />
          <p className="">
            Vui lòng điền đầy đủ thông tin nhận hàng, xin cảm ơn
          </p>
        </div>
      ),
      duration: 4,
      style: {
        backgroundColor: "#ffb8c3",
        borderRadius: "8px",
      },
    });
  };

  const [cartLocal, setcartLocal] = useState(() => {
    const listCart = JSON.parse(localStorage.getItem("listcart")) || [];
    return listCart;
  });

  const [parentAddressSelect, setParentAddressSelect] = useState({
    city: "",
    district: "",
    ward: "",
  });

  const [quantity, setQuantity] = useState(() => {
    const quantityCart = cartLocal.reduce((sum, cart) => sum + cart.num, 0);
    return quantityCart;
  });

  const calculateTotalPrice = () => {
    return cartLocal.reduce((total, cartItem) => {
      const itemTotal = cartItem.num * FormatString(cartItem.price);
      return total + itemTotal;
    }, 0);
  };
  const total = calculateTotalPrice();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [note, setNote] = useState("");
  const [notifi, setNotifi] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleNoteChange = (e) => {
    setNote(e.target.value);
  };

  const validateOrder = () => {
    if (
      !name ||
      !phoneNumber ||
      !address ||
      !email ||
      parentAddressSelect.city === "" ||
      parentAddressSelect.district === "" ||
      parentAddressSelect.ward === ""
    ) {
      setNotifi(true);
      openNotification();
      return false;
    }
    return true;
  };

  function generateRandomID() {
    const randomSixDigitNumber = Math.floor(100000 + Math.random() * 900000);
    const generatedID = "TL" + randomSixDigitNumber;
    return generatedID;
  }

  const handleOrder = () => {
    if (validateOrder()) {
      const newOrder = {
        id: generateRandomID(),
        name: name,
        email: email,
        phone: phoneNumber,
        address: address,
        city: parentAddressSelect.city,
        district: parentAddressSelect.district,
        ward: parentAddressSelect.ward,
        note: note,
        cart: cartLocal,
        price: total,
        createTime: new Date(),
      };
      PostDataToApi(newOrder);
      setNotifi(false);
      setIsModalOpen(true);
    }
  };

  const handleOk = () => {
    setIsModalOpen(false);
    setIsModalSucces(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const continueShopping = () => {
    navigate("/");
  };

  const printCart = cartLocal.map((cart) => (
    <div
      key={cart.id}
      className="border border-gray-500 rounded-lg p-2 flex gap-3 items-center justify-between"
    >
      <img src={cart.img} alt="" className="w-10 h-10" />
      <div className="flex flex-1 justify-between items-center">
        <div className="flex flex-col max-w-[80%]">
          <b className="text-sm">{cart.name}</b>
          <p className="font-bold text-xs text-[#969696]">Kem/M</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-sm">{cart.price}</p>
          <p className="text-sm">x{cart.num}</p>
        </div>
      </div>
    </div>
  ));
  return (
    <>
      <Helmet>
        <title>TEELAB - Thanh toán</title>
      </Helmet>
      <Header></Header>
      {contextHolder}
      {isModalOpen && (
        <Modal
          title={
            <div className="flex items-center gap-2">
              <CheckCircleTwoTone twoToneColor="#eb2f4b" />
              <p className="">Xác nhận</p>
            </div>
          }
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          okText={<p className="text-white">Xác nhận</p>}
          cancelText="Huỷ"
          okButtonProps={{ style: { background: "#ff0000" } }}
        >
          <p className="py-3">
            Chúng tôi đã nhận thông tin đặt hàng của bạn. Vui lòng xác nhận để
            hoàn tất quá trình đặt hàng. <br />
            <hr className="py-1" />
            Chú ý: Bạn sẽ nhận được một Mã đơn hàng chi tiết qua email sau khi
            đơn hàng của bạn đã được xác nhận. Bạn có thể kiểm tra đơn hàng
            thông qua đó
          </p>
        </Modal>
      )}
      {isModalSucces && (
        <Modal
          title={
            <div className="flex items-center gap-2">
              <CheckCircleTwoTone twoToneColor="#52c41a" />
              <p className="">Xác nhận đơn hàng thành công</p>
            </div>
          }
          open={isModalSucces}
          closeIcon={false}
          onOk={continueShopping}
          // onCancel={handleCancel}
          okText={<p className="text-white">Tiếp tục mua sắm</p>}
          cancelText="Kiểm tra đơn hàng"
          okButtonProps={{ style: { background: "#52c41a" } }}
        >
          <p className="py-3">
            Đơn hàng của bạn đang được chuẩn bị <br />
            Cảm ơn bạn đã tin tưởng và sử dụng dịch vụ của TEELAB
          </p>
        </Modal>
      )}
      <form className="container flex flex-col lg:flex-row">
        <main className="lg:w-[65%] ps-0 p-[28px] pt-3">
          <div className="flex flex-col lg:flex-row justify-between gap-[28px] ">
            <div className="lg:w-[50%]">
              <h3 className="font-semibold text-xl mb-2">
                Thông tin nhận hàng
              </h3>
              <FloatingLabel
                label="Họ và tên"
                className="mb-2 border rounded-lg"
              >
                <Form.Control
                  type="text"
                  placeholder="Họ và tên"
                  value={name}
                  onChange={handleNameChange}
                />
              </FloatingLabel>
              <FloatingLabel label="Email" className="mb-2 border rounded-lg">
                <Form.Control
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={handleEmailChange}
                />
              </FloatingLabel>
              <FloatingLabel
                className="mb-2 border rounded-lg"
                label="Số điện thoại"
              >
                <Form.Control
                  type="number"
                  placeholder="Số điện thoại"
                  value={phoneNumber}
                  onChange={handlePhoneNumberChange}
                />
              </FloatingLabel>
              <FloatingLabel className="mb-2 border rounded-lg" label="Địa chỉ">
                <Form.Control
                  type="text"
                  placeholder="Địa chỉ"
                  value={address}
                  onChange={handleAddressChange}
                />
              </FloatingLabel>
              <CitySelector
                parentAddressSelect={parentAddressSelect}
                setParentAddressSelect={setParentAddressSelect}
              />
              <FloatingLabel
                className="mb-2 border rounded-lg"
                label="Ghi chú(Không bắt buộc)"
              >
                <Form.Control
                  type="text"
                  placeholder="Ghi chú"
                  value={note}
                  onChange={handleNoteChange}
                />
              </FloatingLabel>
            </div>
            <div className="lg:w-[50%]">
              <h3 className="font-semibold text-xl mb-2">Vận chuyển</h3>
              <div className="border border-gray-500 rounded-lg p-3 flex gap-3 items-center justify-between">
                <FontAwesomeIcon icon={faCircleDot} />
                <div className="flex flex-1 justify-between items-center">
                  <p>Giao hàng thông thường</p>
                  <b>20.000đ</b>
                </div>
              </div>
              <h3 className="font-semibold text-xl mb-2">Thanh toán</h3>
              <div className="border border-gray-500 rounded-lg p-3 flex gap-3 items-center justify-between">
                <FontAwesomeIcon icon={faCircleDot} />
                <div className="flex flex-1 justify-between items-center">
                  <p>Thanh toán khi nhận hàng</p>
                  <FontAwesomeIcon icon={faMoneyBillAlt} />
                </div>
              </div>
              {notifi && (
                <div className="border-[1px] border-solid border-[#eb2f4b] text-[#eb2f4b] mt-2 rounded-lg p-3 flex gap-3 items-center justify-between">
                  <InfoCircleTwoTone twoToneColor="#eb2f4b" />
                  <h3>Vui lòng nhập đủ thông tin giao hàng</h3>
                </div>
              )}
            </div>
          </div>
        </main>
        <aside className="flex-1 bg-[#fafafa] p-[28px] pt-3 border-l border-gray-300">
          <h3 className="font-semibold text-xl mb-2">
            Đơn hàng ({quantity} sản phẩm)
          </h3>
          <div className="max-h-[300px] overflow-scroll">{printCart}</div>
          <div className="flex gap-2 justify-between items-center pt-3 mt-3 border-t-[1px] border-gray-300">
            <FloatingLabel
              className="border rounded-lg w-[65%]"
              label="Nhập mã giảm giá"
            >
              <Form.Control type="text" placeholder="Nhập mã giảm giá" />
            </FloatingLabel>
            <button
              type="button"
              className="flex-1 px-6 py-3 bg-slate-700 rounded-md text-white hover:opacity-70"
            >
              Áp dụng
            </button>
          </div>
          <div className="flex flex-col gap-1 my-3 py-3 border-b-[1px] border-t-[1px] border-gray-300">
            <div className="flex justify-between items-center ">
              <p className="text-[#717171]">Tạm tính</p>
              <p className="text-[#717171]">{FormatPrice(total)}</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-[#717171]">Phí vận chuyển</p>
              <p className="text-[#717171]">20.000đ</p>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-[#717171] text-lg">Tổng cộng</p>
            <p className="font-bold text-xl">{FormatPrice(total + 20000)}</p>
          </div>
          <div className="flex gap-3 justify-between items-center mt-3 pt-3 border-t-[1px] border-gray-300">
            <Link to="/gio-hang" className="text-base flex gap-1 items-center">
              <FontAwesomeIcon icon={faArrowLeft} />
              Quay về giỏ hàng
            </Link>
            <button
              onClick={handleOrder}
              type="button"
              className="px-5 py-3 bg-black text-white rounded-md hover:opacity-70"
            >
              ĐẶT HÀNG
            </button>
          </div>
        </aside>
      </form>
    </>
  );
};

export default Pay;
