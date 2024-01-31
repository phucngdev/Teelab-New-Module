import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSignOutAlt,
  faEnvelopeOpen,
} from "@fortawesome/free-solid-svg-icons";
import { message, Popconfirm, Tooltip, Drawer } from "antd";
import {
  ExclamationCircleTwoTone,
  CheckCircleTwoTone,
  UserOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import SettingAcc from "./SettingAcc";

const Header = ({ admin }) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [openUpdateAcc, setOpenUpdateAcc] = useState(false);
  const [openUpdate, setOpenUpdate] = useState(false);
  const [openCheckPass, setOpenCheckPass] = useState(false);
  const onClose = () => {
    setOpen(false);
    setOpenUpdateAcc(false);
    setOpenUpdate(false);
    setOpenCheckPass(false);
  };
  const confirm = () => {
    message.success({
      content: "Đăng xuất thành công",
      icon: <CheckCircleTwoTone twoToneColor="#52c41a" />,
    });
    localStorage.removeItem("isLogin");
    navigate("/dang-nhap");
  };
  const showDrawer = () => {
    setOpen(true);
  };

  return (
    <>
      <header className="w-[calc(100%-320px)] h-[56px] bg-white border-b flex justify-between items-center px-8 fixed top-0 left-[320px] z-[99] shadow-md">
        <h3 className="flex items-center">Quản trị viên</h3>
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
            <SettingAcc
              admin={admin}
              open={open}
              openUpdateAcc={openUpdateAcc}
              openUpdate={openUpdate}
              openCheckPass={openCheckPass}
              setOpenUpdateAcc={setOpenUpdateAcc}
              setOpenUpdate={setOpenUpdate}
              setOpenCheckPass={setOpenCheckPass}
              confirm={confirm}
            ></SettingAcc>
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
