import React, { useState } from "react";
import {
  CheckCircleTwoTone,
  EnvironmentTwoTone,
  MailTwoTone,
  PhoneTwoTone,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Modal, message } from "antd";
import upload from "../../firebase/firebase.config";
import PostDataToApi from "../../api/postApi";

const ModalEmployees = ({ isModalOpen, setIsModalOpen }) => {
  const [info, setInfo] = useState({
    id: "",
    username: "",
    password: "",
    name: "",
    email: "",
    phone: "",
    date: "",
    address: "",
    position: "",
    branch: "",
    img: "",
  });
  const [url, setUrl] = useState("");

  const handleCancel = () => {
    setIsModalOpen(false);
    setUrl("");
    setInfo({
      id: "",
      img: "",
      username: "",
      password: "",
      name: "",
      email: "",
      phone: "",
      date: "",
      address: "",
      position: "",
      branch: "",
    });
  };

  const generateRandomID = () => {
    const Id = Math.floor(100000 + Math.random() * 900000);
    const IdEmployees = "TL" + Id;
    return IdEmployees;
  };

  const handleGetImage = async (e) => {
    const getUrl = await upload(e.target);
    setUrl(getUrl);
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setInfo({
      ...info,
      id: generateRandomID(),
      img: url,
      [name]: value,
    });
  };

  const validate = () => {
    const requiredFields = [
      "name",
      "date",
      "phone",
      "email",
      "address",
      "username",
      "password",
      "position",
      "branch",
    ];
    for (const field of requiredFields) {
      if (!info[field]) {
        Modal.error({
          title: "Validation Error",
          content: `Vui lòng nhập thông tin ${field}`,
        });
        return false;
      }
    }
    if (!url) {
      Modal.error({
        title: "Validation Error",
        content: "Vui lòng chọn ảnh",
      });
      return false;
    }
    return true;
  };
  const handleSubmit = () => {
    if (validate()) {
      PostDataToApi("account", info);
      setIsModalOpen(false);
      message.success({
        content: "Thêm mới thành công",
        icon: <CheckCircleTwoTone twoToneColor="#52c41a" />,
      });
    }
  };
  return (
    <>
      <Modal
        open={isModalOpen}
        width={900}
        onCancel={handleCancel}
        footer={null}
      >
        <div className="flex items-center justify-between gap-5 h-[430px]">
          <div className="flex flex-col w-[40%] h-full rounded-2xl p-4 bg-[#05b8b0] relative overflow-hidden">
            <h3 className="text-white text-lg font-bold">Thông tin liên hệ</h3>
            <span className="text-white text-xs leading-5">
              Vui lòng cung cấp tên, địa chỉ, số điện thoại, email, ngày tháng
              năm sinh và vị trí công việc.
            </span>
            <div className="flex items-center mt-10 gap-3">
              <PhoneTwoTone twoToneColor="#fff" style={{ fontSize: "20px" }} />
              <input
                type="text"
                name="phone"
                value={info.phone}
                onChange={handleChange}
                placeholder="+84"
                className="bg-transparent py-1 px-2 rounded-xl w-full placeholder-[#fff] text-white border border-[#fff]"
              />
            </div>
            <div className="flex items-center mt-10 gap-3">
              <MailTwoTone twoToneColor="#fff" style={{ fontSize: "20px" }} />
              <input
                type="email"
                name="email"
                value={info.email}
                onChange={handleChange}
                placeholder="email@gmail.com"
                className="bg-transparent py-1 px-2 rounded-xl w-full placeholder-[#fff] text-white border border-[#fff]"
              />
            </div>
            <div className="flex items-center mt-10 gap-3">
              <EnvironmentTwoTone
                twoToneColor="#fff"
                style={{ fontSize: "20px" }}
              />
              <input
                type="text"
                name="address"
                value={info.address}
                onChange={handleChange}
                placeholder="address"
                className="bg-transparent py-1 px-2 rounded-xl w-full placeholder-[#fff] text-white border border-[#fff]"
              />
            </div>
            <div className="absolute bottom-[-50px] right-[-50px] w-[200px] h-[200px] rounded-full bg-slate-50 opacity-50"></div>
          </div>
          <div className="flex flex-col w-[60%] h-full rounded-2xl p-4 ">
            <div className="flex items-center justify-between">
              <div className="flex flex-col border-b border-black w-[40%]">
                <span className="text-sm text-gray-500">Họ và tên</span>
                <input
                  className="text-xl"
                  type="text"
                  name="name"
                  value={info.name}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col border-b border-black w-[40%]">
                <span className="text-sm text-gray-500">Ngày sinh</span>
                <input
                  className="text-xl"
                  type="text"
                  name="date"
                  value={info.date}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="flex items-center justify-between mt-10">
              <div className="flex flex-col border-b border-black w-[40%]">
                <span className="text-sm text-gray-500">Username</span>
                <input
                  className="text-xl"
                  type="text"
                  name="username"
                  value={info.username}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col border-b border-black w-[40%]">
                <span className="text-sm text-gray-500">Password</span>
                <input
                  className="text-xl"
                  type="password"
                  name="password"
                  value={info.password}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex flex-col w-[40%]">
                <div className="flex flex-col border-b border-black mt-10">
                  <span className="text-sm text-gray-500">Vị trí</span>
                  <input
                    className="text-xl"
                    type="text"
                    name="position"
                    value={info.position}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col border-b border-black mt-10">
                  <span className="text-sm text-gray-500">
                    Địa điểm làm việc
                  </span>
                  <input
                    className="text-xl"
                    type="text"
                    name="branch"
                    value={info.branch}
                    onChange={handleChange}
                  />
                </div>
                <div className="mt-7">
                  <Button className="bg-[#05b8b0]" onClick={handleSubmit}>
                    <span className="text-white">Lưu thông tin</span>
                  </Button>
                </div>
              </div>
              <div className="flex w-[40%] justify-center items-center mt-3">
                <div className=" flex flex-col gap-2">
                  <div className="w-[100px] h-[100px] flex justify-center items-center rounded-xl border !border-dashed cursor-pointer">
                    {url !== "" ? (
                      <>
                        <img src={url} alt="" />
                      </>
                    ) : (
                      <UserOutlined />
                    )}
                  </div>
                  <label
                    htmlFor="getImg"
                    className="w-[100px] h-[100px] flex justify-center items-center rounded-xl border !border-dashed cursor-pointer"
                  >
                    + Upload
                  </label>
                  <input
                    hidden
                    id="getImg"
                    type="file"
                    onChange={handleGetImage}
                    name="img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ModalEmployees;
