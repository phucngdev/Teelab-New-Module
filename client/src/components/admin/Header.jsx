import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSignOutAlt,
  faEnvelopeOpen,
} from "@fortawesome/free-solid-svg-icons";
import { message, Popconfirm, Tooltip, Drawer, Input, Typography } from "antd";
import {
  ExclamationCircleTwoTone,
  CheckCircleTwoTone,
  UserOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import Table_size from "../../pages/user/page/Table_size";

const Header = ({ admin }) => {
  const navigate = useNavigate();
  const confirm = () => {
    message.success({
      content: "Đăng xuất thành công",
      icon: <CheckCircleTwoTone twoToneColor="#52c41a" />,
    });
    navigate("/dang-nhap");
  };
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const handleCheckPass = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <header className="w-[calc(100%-320px)] h-[56px] bg-white border-b flex justify-between items-center px-8 fixed top-0 left-[320px] shadow-md">
        <h3 className="flex items-center">Admin</h3>
        <div className="flex items-center gap-4">
          <div className="relative">
            <Tooltip title="Email">
              <FontAwesomeIcon
                icon={faEnvelopeOpen}
                className="w-10 h-5 cursor-pointer"
              />
              <span className="absolute top-0 right-0 w-4 h-4 text-sm flex justify-center items-center rounded-full bg-red-600 text-white">
                0
              </span>
            </Tooltip>
          </div>
          <Tooltip title="Thông tin admin">
            <div
              className="flex items-center gap-2 border-x px-3 cursor-pointer"
              onClick={showDrawer}
            >
              <div className="w-9 h-9 rounded-full flex justify-center items-center border">
                {admin?.img !== "" ? (
                  <img
                    className="w-9 h-9 rounded-full"
                    src={admin?.img}
                    alt=""
                  />
                ) : (
                  <UserOutlined />
                )}
              </div>
              <span>{admin?.name}</span>
            </div>
          </Tooltip>
          <Drawer title="Thông tin tài khoản" onClose={onClose} open={open}>
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
            <div className="flex justify-center items-center py-2 border my-2 cursor-pointer hover:bg-[#f0f0f0]">
              Chỉnh sửa thông tin tài khoản
            </div>
            <form
              className="flex flex-col gap-2 border-x p-2"
              onSubmit={handleCheckPass}
            >
              <label htmlFor="checkPass">Nhập mật khẩu hiện tại</label>
              <Input.Password
                placeholder="mật khẩu"
                className="border p-2 rounded-lg"
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
            <form className="">
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
                <label htmlFor="usernameUpdate" className="mt-2">
                  Tên đăng nhập
                </label>
                <Input
                  id="usernameUpdate"
                  count={{
                    show: true,
                    max: 10,
                  }}
                  defaultValue={admin.username}
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
                />
                <label htmlFor="" className="mt-2">
                  Nhập lại mật khẩu
                </label>
                <Input
                  count={{
                    show: true,
                    max: 15,
                  }}
                />
                <label htmlFor="" className="mt-2">
                  Tên tài khoản
                </label>
                <Input
                  placeholder="tên người sử dụng"
                  prefix={<UserOutlined />}
                  defaultValue={admin.name}
                />
              </div>
            </form>
          </Drawer>
          <Popconfirm
            placement="topLeft"
            icon={<ExclamationCircleTwoTone twoToneColor="#eb2f96" />}
            title="Xác nhân"
            description="Bạn chắc chắn muốn đăng xuất khỏi thiết bị"
            okText={<span className="text-white">Đăng xuất</span>}
            cancelText="Huỷ"
            onConfirm={confirm}
            okButtonProps={{
              className: "bg-red-500 text-white hover:bg-red-400",
              type: "button",
            }}
          >
            <Tooltip title="Đăng xuất">
              <FontAwesomeIcon
                icon={faSignOutAlt}
                className="w-7 border border-black py-1 rounded-sm cursor-pointer"
              />
            </Tooltip>
          </Popconfirm>
        </div>
      </header>
    </>
  );
};

export default Header;
