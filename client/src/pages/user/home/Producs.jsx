import React, { useState } from "react";
import { Link } from "react-router-dom";
import List_item from "../../../components/user/List_item";
import loadData from "../../../api/CallApi";

const Producs = () => {
  const [fakeApi, setFakeApi] = useState([]);
  loadData("ao-thun", setFakeApi);
  return (
    <>
      <div className="container mx-auto mb-[50px]">
        <div className="flex justify-between items-center">
          <h2 className="text-[20px] text-[#333] font-mono ps-3 hover:opacity-60 lg:text-[40px] lg:ps-0">
            <Link to="/ao-thun">Áo thun</Link>
          </h2>
          <h4 className="text-[20px] text-red-400 hover:underline hidden lg:block">
            <Link to="/ao-thun">Xem thêm</Link>
          </h4>
        </div>
        <div className="">{List_item(fakeApi)}</div>
        <Link
          to="/ao-thun"
          className="block text-center text-base text-[#333] underline decoration-1 mt-4 lg:hidden"
        >
          Xem thêm
        </Link>
      </div>
    </>
  );
};

export default Producs;
