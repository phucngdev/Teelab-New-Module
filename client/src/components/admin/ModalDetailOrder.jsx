import { Button, Modal, Steps, message, theme } from "antd";
import React, { useState } from "react";

const ModalDetailOrder = ({ isModalOpen, setIsModalOpen, detailOrder }) => {
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const steps = [
    {
      title: "Xác nhận đơn hàng",
    },
    {
      title: "Vận chuyển",
    },
    {
      title: "Hoàn thành đơn hàng",
    },
  ];
  //   const [current, setCurrent] = useState(detailOrder?.status);

  const next = () => {
    detailOrder?.status + 1;
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
            Order Details #{detailOrder?.id}
          </h3>
          <div>
            {detailOrder?.status > 1 ? (
              <span className="text-green-600 bg-green-200 py-1 px-2 rounded">
                Hoàn thành
              </span>
            ) : detailOrder?.status < 1 ? (
              <span className="text-red-600 bg-red-200 py-1 px-2 rounded">
                Chờ xử lý
              </span>
            ) : (
              <span className="text-blue-600 bg-blue-200 py-1 px-2 rounded">
                Vận chuyển
              </span>
            )}
          </div>
        </div>
        <div>Date: {detailOrder?.createTime}</div>
        <Steps current={detailOrder?.status} items={items} />
        {detailOrder?.status < 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {detailOrder?.status === 1 && (
          <Button
            type="primary"
            onClick={() => message.success("Processing complete!")}
          >
            Done
          </Button>
        )}
      </Modal>
    </>
  );
};

export default ModalDetailOrder;
