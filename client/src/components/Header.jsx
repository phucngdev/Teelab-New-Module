import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Icon_search from "/icon-header/icon-search.svg";
import Icon_cart from "/icon-header/icon-cart.svg";
import Icon_Incart from "/icon-header/icon_incart.svg";
import logo from "/logo.png";
import axios from "axios";
import debounce from "lodash.debounce";

export const menuItem = [
  {
    key: "Tất cả sản phẩm",
    link: "/tat-ca-san-pham",
  },
  {
    key: "Áo thun",
    link: "/ao-thun",
  },
  {
    key: "Baby Tee",
    link: "/baby-tee",
  },
  {
    key: "Áo polo",
    link: "/ao-polo",
  },
  {
    key: "Áo sơ mi",
    link: "/ao-so-mi",
  },
  {
    key: "Áo khoác",
    link: "/ao-khoac",
  },
  {
    key: "Hoodie",
    link: "/hoodie",
  },
  {
    key: "Quần",
    link: "/quan",
  },
  {
    key: "Quần nữ",
    link: "/quan-nu",
  },
  {
    key: "Phụ kiện",
    link: "/phu-kien",
  },
];

export const listMenu = menuItem.map((item, index) => (
  <li key={index} className="">
    <Link
      to={item.link}
      className="pt-[15px] px-[15px] pb-[17px] hover:text-[#707070]"
    >
      {item.key}
    </Link>
  </li>
));

const Header = () => {
  const [searchText, setSearcText] = useState("");
  const [products, setProducts] = useState([]);
  const [showMenu, setShowMenu] = useState(false);

  const handleClose = () => setShowMenu(false);
  const handleShow = () => setShowMenu(true);

  // sửa phần này
  const loadData = async () => {
    await axios
      .get(`http://localhost:8000/tlat?&name_like=${searchText}`)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    const delaySearch = debounce(loadData, 500);
    delaySearch();
    return delaySearch.cancel;
  }, [searchText]);

  return (
    <header className="header w-full">
      <div className="hidden md:block w-full py-[5px] bg-[#f5f5f5]">
        <div className="container mx-auto flex justify-end">
          <form className="relative h-10 flex items-center">
            <input
              value={searchText}
              onChange={(e) => setSearcText(e.target.value)}
              id="input_search"
              type="search"
              className="border border-solid border-gray-400 border-r-0 h-full px-3 rounded-l-md"
              placeholder="Tìm kiếm sản phẩm"
            />
            <button
              type="button"
              className="w-[45px] h-[40px] bg-[#545457] flex justify-center items-center rounded-md"
            >
              <img src={Icon_search} alt="" />
            </button>
            <div className="w-[200px] h-10 bg-black absolute top-[100%]"></div>
          </form>
          <div className="h-full w-11 ms-2 relative">
            <div className="cart">
              <Link to="" className="">
                <div className="w-5 h-5 flex items-center justify-center text-white bg-[#d64646] rounded-[100rem] absolute right-0">
                  0
                </div>
                <img src={Icon_cart} className="h-full w-full" alt="" />
              </Link>
            </div>
            <div className="showcart rounded-sm shadow-lg bg-white absolute z-10 top-[90%] right-0 hidden">
              <div className="w-[340px] flex flex-col items-center  text-center">
                <img className="w-20 m-[15px]" src={Icon_Incart} alt="" />
                <p className="mb-2">
                  Không có sản phẩm nào trong giỏ hàng của bạn
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[46px] flex items-center fixed top-0 py-[5px] md:hidden bg-[#f5f5f5] z-50">
        <ul className="container flex justify-between items-center">
          <li>
            <Button
              className="border-0 rotate-[180deg]"
              variant="primary"
              onClick={handleShow}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="12"
                viewBox="0 0 18 12"
                fill="none"
              >
                <path d="M6 2V0H18V2H6Z" fill="#666"></path>
                <path d="M0 7H18V5H0V7Z" fill="#666"></path>
                <path d="M6 12H18V10H6V12Z" fill="#666"></path>
              </svg>
            </Button>
            <Offcanvas
              show={showMenu}
              onHide={handleClose}
              style={{ maxWidth: "45%" }}
            >
              <Offcanvas.Header closeButton className="pb-0">
                <Offcanvas.Title className="sm:text-[40px]">
                  Menu
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className="">
                <ul className="menu list-disc text-base ps-3 sm:text-2xl">
                  <li className="my-[5px]">
                    <Link to="/">Trang chủ</Link>
                  </li>
                  <li className="my-[5px]">
                    <Link to="/tat-ca-san-pham" className="">
                      Tất cả sản phẩm
                      <ul className="ms-[15px] sm:ps-5 list-disc">
                        <li className="my-[5px]">
                          <Link to="/ao-thun">Áo thun</Link>
                        </li>
                        <li className="my-[5px]">
                          <Link to="/ao-polo">Áo polo</Link>
                        </li>
                        <li className="my-[5px]">
                          <Link to="/baby-tee">Baby Tee</Link>
                        </li>
                        <li className="my-[5px]">
                          <Link to="/ao-so-mi">Áo sơ mi</Link>
                        </li>
                        <li className="my-[5px]">
                          <Link to="/ao-khoac">Áo khoác</Link>
                        </li>
                        <li className="my-[5px]">
                          <Link to="/hoodie">Hoodie</Link>
                        </li>
                        <li className="my-[5px]">
                          <Link to="/quan">Quần</Link>
                        </li>
                        <li className="my-[5px]">
                          <Link to="/quan-nu">Quần nữ</Link>
                        </li>
                        <li className="my-[5px]">
                          <Link to="/phu-kien">Phụ kiện</Link>
                        </li>
                      </ul>
                    </Link>
                  </li>
                  <li className="my-[5px]">
                    <Link to="/chinh-sach-doi-tra">Chính sách Đổi trả</Link>
                  </li>
                  <li className="my-[5px]">
                    <Link to="/bang-size">Bảng Size</Link>
                  </li>
                  <li className="my-[5px]">
                    <Link to="/kiem-tra-don-hang">Kiểm tra đơn hàng</Link>
                  </li>
                  <li className="my-[5px]">
                    <Link to="/he-thong-cua-hang">Hệ thống Cửa hàng</Link>
                  </li>
                </ul>
              </Offcanvas.Body>
            </Offcanvas>
          </li>
          <li className="w-[150px]">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </li>
          <li className="flex items-center gap-2">
            <div className="w-5 h-5">
              <svg
                class="svg-inline--fa fa-search fa-w-16"
                aria-hidden="true"
                data-prefix="fa"
                data-icon="search"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                data-fa-i2svg=""
              >
                <path
                  fill="currentColor"
                  d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                ></path>
              </svg>
            </div>
            <div className="w-6 h-6 relative">
              <div className="w-3 h-3 flex items-center justify-center text-xs text-white bg-[#d64646] rounded-[100rem] absolute right-0">
                0
              </div>
              <img src={Icon_cart} className="h-full w-full" alt="" />
            </div>
          </li>
        </ul>
      </div>
      <div className="hidden md:block container mx-auto">
        <ul className="flex justify-evenly items-center h-[77px] border-b-[1px] border-solid border-gray-300 md:text-sm lg:text-base">
          <li>
            <Link to="/">TRANG CHỦ</Link>
          </li>
          <li>
            <Link to="/chinh-sach-doi-tra">CHÍNH SÁCH ĐỔI TRẢ</Link>
          </li>
          <li className="md:w-[160px] lg:w-[200px]">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </li>
          <li>
            <Link to="/bang-size">BẢNG SIZE</Link>
          </li>
          <li>
            <Link to="/he-thong-cua-hang">HỆ THỐNG CỬA HÀNG</Link>
          </li>
        </ul>
        <div className="container mx-auto flex items-center justify-center md:h-[112px] lg:h-[56px]">
          <ul className="flex flex-wrap justify-center items-center h-full md:text-sm">
            {listMenu}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
