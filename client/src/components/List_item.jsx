import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Icon_addcart from "/public/icon-product/icon_addcart.svg";

const List_item = (data) => {
  const [selectedIcon, setSelectedIcon] = useState();
  const [selectedItemId, setSelectedItemId] = useState();

  // thay đổi active của product
  const handleRadioChange = (e, itemId) => {
    setSelectedItemId(itemId);
    setSelectedIcon(e.target.value);
  };

  // điều hướng trang đến /id
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-2 gap-x-5 gap-y-7 xl:grid-cols-4 md:grid-cols-3">
      {data.map((item, index) => (
        <form
          key={index}
          className="grid-item flex flex-col items-center relative hover:cursor-pointer "
        >
          <div className="imgActive">
            <img
              className="w-full h-full object-contain hover:opacity-0"
              src={selectedItemId === item.id ? selectedIcon : item.img}
              alt={item.name}
            />
          </div>
          <div className="imgHover opacity-[0.01] transition-opacity duration-500 absolute z-50 top-0 left-0 hover:opacity-100">
            <button
              onClick={() => navigate(`/${item.id}`)}
              className="w-full h-full "
            >
              <img
                className="w-full h-full object-contain"
                src={item.imgHover}
                alt=""
              />
            </button>
          </div>
          <div className="w-[46px] h-[18px] bg-[#d52220] absolute top-[15px] left-[15px] text-center text-xs text-white">
            {item.sale}
          </div>
          <div className="icon-addcart absolute top-[10px] right-[15px] z-50 hidden animate-bounce">
            <button
              className="btn-addcart w-[35px] h-[35px] border-0 shadow-none bg-[#696969] rounded-[50%] flex justify-center items-center"
              title="Thêm vào giỏ hàng"
              type="button"
            >
              <img src={Icon_addcart} alt="" />
            </button>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex justify-center items-center gap-[10px] mb-[10px]">
              {item.imgIcon.map((icon, iconIndex) => (
                <div key={iconIndex} className="relative w-8 h-8">
                  <input
                    name={item.name}
                    id={icon.icon}
                    type="radio"
                    className="w-full h-full absolute z-10 "
                    checked={icon.icon === selectedIcon}
                    onChange={(e) => handleRadioChange(e, item.id)}
                    value={icon.icon}
                  />
                  <label
                    htmlFor={icon.icon}
                    className="w-full h-full absolute z-20 rounded-full border-[1px] border-red-500 cursor-pointer"
                  >
                    <img
                      className="w-7 h-7 rounded-[100%] object-cover absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
                      src={icon.icon}
                      alt=""
                    />
                  </label>
                </div>
              ))}
            </div>
            <h3 className="text-base font-normal text-[#333] text-center mb-[10px] hover:text-[#dc3545]">
              <button onClick={() => navigate(`/${item.id}`)}>
                {item.name}
              </button>
            </h3>
            <div className="flex items-center justify-center gap-[10px]">
              <span className="text-[#d52220] text-base">{item.price}</span>
              <span className="text-[#9e9e9e] text-base line-through">
                {item.priceBefore}
              </span>
            </div>
          </div>
        </form>
      ))}
    </div>
  );
};

export default List_item;
