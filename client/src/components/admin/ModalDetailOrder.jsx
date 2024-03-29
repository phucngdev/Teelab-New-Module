import { Button, Modal, Steps, message, theme } from "antd";
import React, { useEffect, useState } from "react";
import PatchApiOrder from "../../api/patchApiOrder";
import axios from "axios";
import FormatPrice from "../../utils/formatPrice";

const ModalDetailOrder = ({ isModalOpen, setIsModalOpen, detailOrderId }) => {
  const [orderDetail, setOrderDetail] = useState(null);
  const fetchData = async () => {
    if (!detailOrderId) {
      return;
    }
    const data = await axios
      .get(`http://localhost:8080/order/${detailOrderId}`)
      .then((response) => setOrderDetail(response.data))
      .catch((error) => console.log(error));
    if (!isModalOpen) {
      return;
    }
  };
  useEffect(() => {
    fetchData();
  }, [isModalOpen, detailOrderId]);

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const steps = [
    {
      title: "Xác nhận đơn hàng",
    },
    {
      title: "Chuẩn bị đơn",
    },
    {
      title: "Vận chuyển",
    },
    {
      title: "Hoàn thành đơn hàng",
    },
  ];

  const accept = () => {
    setOrderDetail({ ...orderDetail, status: 1 });
    console.log(orderDetail);
    PatchApiOrder(orderDetail, orderDetail?.id);
  };

  const next = () => {
    setOrderDetail({ ...orderDetail, status: 2 });
    console.log(orderDetail);
    PatchApiOrder(orderDetail, orderDetail?.id);
  };
  const ship = () => {
    setOrderDetail({ ...orderDetail, status: 3 });
    console.log(orderDetail);
    PatchApiOrder(orderDetail, orderDetail?.id);
  };

  const handleDone = () => {
    setOrderDetail({ ...orderDetail, status: 4 });
    console.log(orderDetail);
    PatchApiOrder(orderDetail, orderDetail?.id);
    message.success("Hoàn thành đơn hàng");
  };

  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));

  return (
    <>
      <Modal
        open={isModalOpen}
        width={900}
        onCancel={handleCancel}
        footer={null}
      >
        <div className="flex items-center gap-3">
          <h3 className="text-2xl font-bold">
            Order Details #{orderDetail?.id}
          </h3>
          <div>
            {orderDetail?.status === 0 ? (
              <span className="text-red-600 bg-red-200 py-1 px-2 rounded">
                Chờ xử lý
              </span>
            ) : orderDetail?.status === 1 ? (
              <span className="text-yellow-600 bg-yellow-200 py-1 px-2 rounded">
                Xác nhận đơn hàng
              </span>
            ) : orderDetail?.status === 2 ? (
              <span className="text-blue-600 bg-blue-200 py-1 px-2 rounded">
                Vận chuyển
              </span>
            ) : (
              <span className="text-green-600 bg-green-200 py-1 px-2 rounded">
                Hoàn thành
              </span>
            )}
          </div>
        </div>
        <div className="my-3">Ngày tạo đơn: {orderDetail?.createTime}</div>
        <Steps current={orderDetail?.status} items={items} />
        <div className="flex justify-between">
          <div className="w-[50%] flex flex-col gap-2">
            <h3 className="mt-3 text-lg font-semibold">Thông tin khách hàng</h3>
            <span>Họ và tên: {orderDetail?.name}</span>
            <span>Email: {orderDetail?.email}</span>
            <span>Số điện thoại: {orderDetail?.phone}</span>
            <span>Ghi chú: {orderDetail?.note}</span>
          </div>
          <div className="w-[50%] flex flex-col gap-2">
            <h3 className="mt-3 text-lg font-semibold">Địa chỉ giao hàng</h3>
            <span>Tỉnh - Thành phố: {orderDetail?.city}</span>
            <span>Quận - Huyện: {orderDetail?.district}</span>
            <span>Xã - Phường: {orderDetail?.ward}</span>
            <span>Số nhà: {orderDetail?.address}</span>
          </div>
        </div>
        <div className="flex flex-col mt-3">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Danh sách sản phẩm</h3>
            <h3 className="text-base">
              Tổng tiền đơn hàng:{" "}
              <span className="text-lg font-semibold text-red-500">
                {FormatPrice(orderDetail?.price)}
              </span>
            </h3>
          </div>
          <div className="flex flex-col gap-2 max-h-[200px] overflow-scroll p-3 bg-[#f8f9fb]">
            {orderDetail?.cart.map((product, index) => (
              <div key={index} className="flex items-center justify-between">
                <img
                  className="w-[80px] h-[80px] object-cover"
                  src={product?.img}
                  alt=""
                />
                <span className="w-[40%]">{product.name}</span>
                <span>x{product.num}</span>
                <span>{product.price}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-end mt-3">
          {orderDetail?.status === 0 && (
            <Button
              type="button"
              className="bg-red-500 hover:bg-red-400"
              onClick={() => accept()}
            >
              <span className="text-white">Xác nhận đơn</span>
            </Button>
          )}
          {orderDetail?.status === 1 && (
            <Button
              type="button"
              className="bg-yellow-500 hover:bg-yellow-400"
              onClick={() => next()}
            >
              <span className="text-white">Chuẩn bị đơn</span>
            </Button>
          )}
          {orderDetail?.status === 2 && (
            <Button
              type="button"
              className="bg-blue-500 hover:bg-blue-400"
              onClick={() => ship()}
            >
              <span className="text-white">Vận chuyển</span>
            </Button>
          )}
          {orderDetail?.status === 3 && (
            <Button
              type="button"
              className="bg-green-500 hover:bg-green-400"
              onClick={() => handleDone()}
            >
              <span className="text-white">Hoàn thành</span>
            </Button>
          )}
        </div>
      </Modal>
    </>
  );
};

export default ModalDetailOrder;
