import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import iconMenu from "../../public/icon-product/icon_menu.svg";
import { listMenu } from "./Header";
import Header from "./Header";
import Footer from "./Footer";
import List_item from "./List_item";
import loadData from "../api/CallApi";

const ProductPage = (page, titlePage, title) => {
  const [fakeApi, setFakeApi] = useState([]);

  useEffect(() => {
    loadData(page, setFakeApi);
  }, []);
  return (
    <>
      <Helmet>
        <title>{titlePage}</title>
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
          <h1 className="text-[30px] md:text-[40px] text-[#333] mb-5">
            {title}
          </h1>
          {List_item(fakeApi)}
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default ProductPage;
