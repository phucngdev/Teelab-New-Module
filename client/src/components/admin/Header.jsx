import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSignOutAlt,
  faEnvelopeOpen,
} from "@fortawesome/free-solid-svg-icons";
import { Tooltip } from "antd";

const Header = () => {
  return (
    <>
      <div className="w-full h-[56px] border-b flex justify-between items-center px-8">
        <h3>Admin</h3>
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
          <div className="flex items-center gap-2 border-x px-3 cursor-pointer">
            <img
              className="w-9 h-9 rounded-full"
              src="https://firebasestorage.googleapis.com/v0/b/module-1-62bdd.appspot.com/o/uploads%2Fabc.jpeg?alt=media&token=2f4569d7-b502-4bab-98ca-c40e6b78c1c3"
              alt=""
            />
            <span>admin</span>
          </div>
          <Tooltip title="Đăng xuất">
            <FontAwesomeIcon
              icon={faSignOutAlt}
              className="w-7 border border-black py-1 rounded-sm cursor-pointer"
            />
          </Tooltip>
        </div>
      </div>
    </>
  );
};

export default Header;
