import React, { useState } from "react";
import { message, Drawer, Input, Button, Modal } from "antd";
import {
  ExclamationCircleTwoTone,
  CheckCircleTwoTone,
  UserOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
  MailOutlined,
} from "@ant-design/icons";
import PatchDataToApi from "../../api/patchApi";

const SettingAcc = ({
  admin,
  open,
  openUpdateAcc,
  openUpdate,
  openCheckPass,
  setOpenUpdateAcc,
  setOpenUpdate,
  setOpenCheckPass,
  confirm,
}) => {
  const [checkPass, setCheckPass] = useState("");
  const [newInfo, setNewInfo] = useState({
    username: "",
    password: "",
    checkpass: "",
  });
  const [newContact, setNewContact] = useState({
    name: `${admin.name}`,
    email: `${admin.email}`,
  });
  const success = () => {
    Modal.success({
      content: "Vui lòng đăng nhập lại",
      onOk() {
        confirm();
      },
    });
  };
  const handleOpenUpdateAcc = () => {
    setOpenUpdateAcc(true);
  };
  const handleCancelAcc = () => {
    setOpenUpdateAcc(false);
  };
  const handleOpenCheckPass = () => {
    setOpenCheckPass(true);
  };
  const handleChangeNewContact = (e) => {
    const { value, name } = e.target;
    setNewContact({
      ...newContact,
      [name]: value,
    });
  };
  const handleSubmitNewContact = () => {
    message.success({
      content: "Lưu thông tin thành công",
      icon: <CheckCircleTwoTone twoToneColor="#52c41a" />,
    });
    PatchDataToApi(newContact, admin.id);
    setOpenUpdate(false);
  };
  const handleCheckPass = (e) => {
    e.preventDefault();
    if (checkPass === admin.password) {
      setOpenUpdate(true);
      setOpenCheckPass(false);
    } else {
      message.error({
        content: "Mật khẩu không chính xác",
        icon: <ExclamationCircleTwoTone twoToneColor="#ff0000" />,
      });
    }
  };
  const handleChangeNewUpdate = (e) => {
    const { value, name } = e.target;
    setNewInfo({
      ...newInfo,
      [name]: value,
    });
  };
  const handleSubmitUpdate = () => {
    if (newInfo.password !== newInfo.checkpass) {
      message.error({
        content: "Mật khẩu không khớp",
        icon: <ExclamationCircleTwoTone twoToneColor="#ff0000" />,
      });
      return;
    }
    message.success({
      content: "Lưu thông tin thành công",
      icon: <CheckCircleTwoTone twoToneColor="#52c41a" />,
    });
    PatchDataToApi(newInfo, admin.id);
    setOpenUpdate(false);
    success();
  };
  const handleCancelUpdate = () => {
    setOpenUpdate(false);
  };
  const handleCloseUpdate = () => {
    if (open) {
      setOpenUpdateAcc(false);
      setOpenCheckPass(false);
      setOpenUpdate(false);
    }
  };
  const validate = () => {};
  return (
    <>
      <div className="flex items-center gap-3 border-x px-2">
        <div className="w-[60px] h-[60px] rounded-full flex justify-center items-center border">
          {admin?.img !== "" ? (
            <img
              className="w-full h-full rounded-full"
              src={admin?.img}
              alt=""
            />
          ) : (
            <UserOutlined />
          )}
        </div>
        <div className="flex flex-col gap-0">
          <span className="text-lg">{admin?.name}</span>
          <span className="text-sm font-light">{admin.email}</span>
        </div>
      </div>
      <div
        onClick={handleOpenUpdateAcc}
        className="flex justify-center items-center py-2 border my-2 cursor-pointer hover:bg-[#f0f0f0]"
      >
        Chỉnh sửa thông tin tài khoản
      </div>
      {openUpdateAcc && (
        <form className="mt-2 pt-2 border-t">
          <h3 className="text-base text-center">Nhập thông tin tài khoản</h3>
          <div className="flex items-center justify-between">
            <div className="w-[100px] h-[100px] flex justify-center items-center rounded-xl border cursor-pointer">
              {admin?.img !== "" ? (
                <img
                  className="w-full h-full object-cover"
                  src={admin?.img}
                  alt=""
                />
              ) : (
                <UserOutlined />
              )}
            </div>
            <div>
              <label
                htmlFor="fileAvt"
                className="w-[100px] h-[100px] flex justify-center items-center rounded-xl border !border-dashed cursor-pointer"
              >
                + Upload
              </label>
              <input hidden id="fileAvt" type="file" />
            </div>
            <span>Thay đổi ảnh</span>
          </div>
          <div>
            <label htmlFor="" className="mt-2">
              Tên tài khoản
            </label>
            <Input
              placeholder="tên người sử dụng"
              prefix={<UserOutlined />}
              defaultValue={admin.name}
              name="name"
              onChange={handleChangeNewContact}
            />
            <label htmlFor="" className="mt-2">
              Email
            </label>
            <Input
              placeholder="email"
              type="email"
              prefix={<MailOutlined />}
              defaultValue={admin.email}
              name="email"
              onChange={handleChangeNewContact}
            />
            <div className="flex items-center justify-between my-2 pb-2 border-b">
              <Button
                type="button"
                onClick={handleCancelAcc}
                className="bg-red-600 hover:bg-red-500"
              >
                <span className="text-white">Huỷ</span>
              </Button>
              <Button
                type="submit"
                className="bg-blue-600 hover:bg-blue-500"
                onClick={handleSubmitNewContact}
              >
                <span className="text-white">Lưu</span>
              </Button>
            </div>
          </div>
        </form>
      )}
      <div
        onClick={handleOpenCheckPass}
        className="flex justify-center items-center py-2 border my-2 cursor-pointer hover:bg-[#f0f0f0]"
      >
        Chỉnh sửa thông tin đăng nhập
      </div>
      {openCheckPass && (
        <form
          className="flex flex-col gap-2 border-x p-2"
          onSubmit={handleCheckPass}
        >
          <label htmlFor="checkPass">Nhập mật khẩu hiện tại</label>
          <Input.Password
            placeholder="mật khẩu"
            className="border p-2 rounded-lg"
            value={checkPass}
            onChange={(e) => setCheckPass(e.target.value)}
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
          />
          <div className="flex items-center justify-between">
            <label
              htmlFor="submitCheck"
              className="px-3 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-md cursor-pointer"
            >
              Check
            </label>
            <input type="submit" id="submitCheck" hidden />
            <span className=" hover:border-b hover:border-black cursor-pointer">
              Quên mật khẩu?
            </span>
          </div>
        </form>
      )}
      {openUpdate && (
        <form className="mt-2 border-t pt-2">
          <h3 className="text-base text-center">
            Nhập thông tin đăng nhập mới
          </h3>
          <label htmlFor="usernameUpdate" className="mt-2">
            Tên đăng nhập
          </label>
          <Input
            id="usernameUpdate"
            count={{
              show: true,
              max: 10,
            }}
            onChange={handleChangeNewUpdate}
            name="username"
          />
          <label htmlFor="passwordUpdate" className="mt-2">
            Mật khẩu mới
          </label>
          <Input
            id="passwordUpdate"
            count={{
              show: true,
              max: 15,
            }}
            onChange={handleChangeNewUpdate}
            name="password"
          />
          <label htmlFor="" className="mt-2">
            Nhập lại mật khẩu
          </label>
          <Input
            count={{
              show: true,
              max: 15,
            }}
            onChange={handleChangeNewUpdate}
            name="checkpass"
          />
          <div className="flex items-center justify-between my-2 pb-2 border-b">
            <Button
              type="button"
              onClick={handleCancelUpdate}
              className="bg-red-600 hover:bg-red-500"
            >
              <span className="text-white">Huỷ</span>
            </Button>
            <Button
              type="submit"
              className="bg-blue-600 hover:bg-blue-500"
              onClick={handleSubmitUpdate}
            >
              <span className="text-white">Lưu</span>
            </Button>
          </div>
        </form>
      )}
    </>
  );
};

export default SettingAcc;
