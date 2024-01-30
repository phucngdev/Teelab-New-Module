import { Modal } from "antd";
import React from "react";

const ModalProduct = ({ isModalOpen, setIsModalOpen }) => {
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Modal
        open={isModalOpen}
        width={900}
        onCancel={handleCancel}
        footer={null}
      ></Modal>
    </>
  );
};

export default ModalProduct;
