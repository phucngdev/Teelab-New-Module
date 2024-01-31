import React, { useEffect, useState } from "react";
import loadData from "../../api/CallApi";
import {
  CarTwoTone,
  DeleteTwoTone,
  EditOutlined,
  EyeTwoTone,
} from "@ant-design/icons";
import { Checkbox, Tooltip } from "antd";
import FormatPrice from "../../utils/formatPrice";
import ModalDetailOrder from "./ModalDetailOrder";

const OrdersList = (status) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [detailOrder, setDetailOrder] = useState();
  const showModal = (order) => {
    setDetailOrder(order);
    setIsModalOpen(true);
  };
  const [order, setOrder] = useState();
  useEffect(() => {
    loadData("order", setOrder);
  }, []);
  const CheckboxGroup = Checkbox.Group;
  const [checkedList, setCheckedList] = useState([]);
  const checkAll = order?.length === checkedList?.length;
  const indeterminate =
    checkedList?.length > 0 && checkedList?.length < order?.length;
  const onChange = (list) => {
    setCheckedList(list);
  };
  const onCheckAllChange = (e) => {
    setCheckedList(e.target.checked ? order?.map((order) => order.id) : []);
  };

  const checkboxOptions = (
    status == "all" ? order : order?.filter((st) => st.status === status)
  )?.map((order) => ({
    label: (
      <>
        <div
          key={order.id}
          className="flex-1 text-center flex items-center justify-between h-full border-s py-3"
        >
          <div className="w-[10%] border-e">{order.id}</div>
          <div className="w-[15%] border-e">{order.name}</div>
          <div className="w-[11%] border-e">{order.phone}</div>
          <div className="w-[14%] border-e">
            {order.status > 1 ? (
              <span className="text-green-600 bg-green-200 py-2 px-3 rounded-xl">
                Hoàn thành
              </span>
            ) : order.status < 1 ? (
              <span className="text-red-600 bg-red-200 py-2 px-3 rounded-xl">
                Chờ xử lý
              </span>
            ) : (
              <span className="text-blue-600 bg-blue-200 py-2 px-3 rounded-xl">
                Vận chuyển
              </span>
            )}
          </div>
          <div className="w-[11%] border-e">{order.note}</div>
          <div className="w-[14%] border-e">{order.createTime}</div>
          <div className="w-[11%] border-e">{FormatPrice(order.price)}</div>
          <div className="w-[14%] flex items-center justify-evenly">
            <Tooltip title="Xem chi tiết">
              <button onClick={() => showModal(order)}>
                <EyeTwoTone className="p-2 rounded-lg hover:bg-blue-200" />
              </button>
            </Tooltip>
            <Tooltip title="Vận chuyển">
              <button>
                <CarTwoTone
                  className="p-2 rounded-lg hover:bg-green-200"
                  twoToneColor="#52c41a"
                />
              </button>
            </Tooltip>
            <Tooltip title="Xoá">
              <button>
                <DeleteTwoTone
                  className="p-2 rounded-lg hover:bg-red-200"
                  twoToneColor="#ff0000"
                />
              </button>
            </Tooltip>
          </div>
        </div>
      </>
    ),
    value: order.id,
  }));

  return (
    <>
      <ModalDetailOrder
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        detailOrder={detailOrder}
      />
      <div className="flex items-center gap-2 border border-b-0 text-center mt-3">
        <div className="py-3">
          <Checkbox
            className="border-0"
            indeterminate={indeterminate}
            onChange={onCheckAllChange}
            checked={checkAll}
          ></Checkbox>
        </div>
        <div className="flex-1 flex items-center justify-between h-full border-s">
          <div className="w-[10%] border-e">Mã đơn</div>
          <div className="w-[15%] border-e">Họ tên</div>
          <div className="w-[11%] border-e">Điện thoại</div>
          <div className="w-[14%] border-e">Trang thái</div>
          <div className="w-[11%] border-e">Ghi chú</div>
          <div className="w-[14%] border-e">Ngày tạo</div>
          <div className="w-[11%] border-e">Tổng tiền</div>
          <div className="w-[14%]">Quản lý</div>
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <CheckboxGroup
          options={checkboxOptions}
          value={checkedList}
          onChange={onChange}
        />
      </div>
    </>
  );
};

export default OrdersList;
