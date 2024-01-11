import React from "react";
import { Helmet } from "react-helmet";
import iconMenu from "/icon-product/icon_menu.svg";
import { listMenu } from "../../../components/Header";
import { ao_polo } from "../../../data/data";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import List_item from "../../../components/List_item";

const Ao_polo = () => {
  return (
    <div className="">
      <Helmet>
        <title>Áo polo | TEELAB</title>
      </Helmet>
      <Header></Header>
      <div className="container mx-auto flex mt-[56px] mb-[30px] md:mt-[30px]">
        <aside className="w-[20%] h-[522px] p-[15px] hidden lg:block">
          <div className="flex items-center gap-2 font-bold text-2xl">
            <img className="" src={iconMenu} alt="" />
            Danh mục
          </div>
          <ul className="flex flex-col gap-3 mt-4 list-disc ms-5">
            {listMenu}
          </ul>
        </aside>
        <div className="w-full lg:w-[80%]">
          <h1 className="text-[40px] text-[#333] mb-5">Áo polo</h1>
          {List_item(ao_polo)}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Ao_polo;
