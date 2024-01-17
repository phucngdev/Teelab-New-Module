import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Slide } from "react-slideshow-image";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "react-slideshow-image/dist/styles.css";
import Header from "./Header";
import Footer from "./Footer";
import axios from "axios";

const Item = () => {
  const [fakeApi, setFakeApi] = useState([]);
  const [selectedIcon, setSelectedIcon] = useState("");
  const [selectedItemIcon, setSelectedItemIcon] = useState("");

  // lấy id fakeApi[0] và render api
  const { id } = useParams();

  // gọi api bằng axios
  const loadData = async () => {
    await axios
      .get(`http://localhost:8080/ao-thun?id=${id}`)
      .then((response) => setFakeApi(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    loadData();
  }, []);

  // thuộc tính của slide
  const properties = {
    transitionDuration: 200,
    arrows: true,
    infinite: true,
    easing: "ease",
    autoplay: false,
  };

  // lấy name của img icon -- lable
  const handleRadioChange = (e, itemId) => {
    setSelectedItemIcon(itemId);
    setSelectedIcon(e.target.value);
  };

  // lấy size
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedItemSize, setSelectedItemSize] = useState("");
  const handleRadioChangeSize = (e, itemId) => {
    setSelectedItemSize(itemId);
    setSelectedSize(e.target.value);
  };

  // tạo ô tăng giảm số lượng
  const [count, setCount] = useState(1);
  const increaseCount = () => {
    setCount(count + 1);
  };
  const decreaseCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    fakeApi[0] && (
      <>
        <Header></Header>
        <Helmet>
          <title>{fakeApi[0].name}</title>
        </Helmet>
        <div className="item mt-[56px] mb-[30px] md:mt-[30px]">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row sm:justify-between sm:flex-wrap">
              <div className="w-full lg:w-[60%] flex-grow-0 flex-shrink-0 px-[15px]">
                <Slide {...properties}>
                  {fakeApi[0].imgItem.map((img, index) => (
                    <div
                      key={index}
                      className="h-[360px] md:h lg:h-[500px] flex justify-center items-center"
                    >
                      <img
                        className="object-cover h-full"
                        src={img.item}
                        alt=""
                      />
                    </div>
                  ))}
                </Slide>
              </div>
              <div className="w-full lg:w-[40%] flex-grow-0 flex-shrink-0 px-[15px]">
                <h1 className="text-[22px] text-[#333] font-sans leading-8 mb-[10px] pb-[10px] border-b-2 border-solid border-[#000]">
                  {fakeApi[0].name}
                </h1>
                <div className="flex items-center gap-3">
                  <span className="text-[30px] text-[#f81f1f] font-sans ">
                    {fakeApi[0].price}
                  </span>
                  <span className="text-xl text-[#949494] line-through">
                    {fakeApi[0].priceBefore}
                  </span>
                </div>
                <form action="">
                  <div className="flex items-center gap-2 mb-2">
                    <span>Màu sắc:</span>
                    <span>
                      {selectedItemIcon === fakeApi[0].id
                        ? selectedIcon
                        : fakeApi[0].imgIcon[0].iconName}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex justify-center items-center gap-[10px] mb-[10px]">
                      {fakeApi[0].imgIcon.map((icon, iconIndex) => (
                        <div key={iconIndex} className="relative w-8 h-8">
                          <input
                            name={fakeApi[0].name}
                            id={icon.icon}
                            type="radio"
                            className="w-full h-full absolute z-10"
                            checked={icon.iconName === selectedIcon}
                            onChange={(e) =>
                              handleRadioChange(e, fakeApi[0].id)
                            }
                            value={icon.iconName}
                          />
                          <label
                            htmlFor={icon.icon}
                            className="w-full h-full absolute z-20 cursor-pointer"
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
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <span>Kích thước:</span>
                    <span>
                      {selectedItemSize === fakeApi[0].id
                        ? selectedSize
                        : fakeApi[0].size[0].sizeItem}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex justify-center items-center gap-[10px] mb-[10px]">
                      {fakeApi[0].size.map((size, sizeIndex) => (
                        <div key={sizeIndex} className="relative w-8 h-8">
                          <input
                            name={fakeApi[0].id}
                            id={size.sizeItem}
                            type="radio"
                            className="w-full h-full absolute z-10"
                            checked={size.sizeItem === selectedSize}
                            onChange={(e) =>
                              handleRadioChangeSize(e, fakeApi[0].id)
                            }
                            value={size.sizeItem}
                          />
                          <label
                            htmlFor={size.sizeItem}
                            className="w-full h-full absolute z-20 cursor-pointer "
                          >
                            <span className="w-7 h-7 bg-white rounded-[100%] object-cover absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex justify-center items-center">
                              {size.sizeItem}
                            </span>
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                  <Link
                    to="/bang-size"
                    target="blank"
                    className="text-base text-[#0158da] hover:text-[#f81f1f]"
                  >
                    + Hướng dẫn chọn size
                  </Link>
                  <div className="my-[10px]">
                    <span>Số lượng</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center">
                      <button
                        onClick={decreaseCount}
                        type="button"
                        className="w-[30px] h-[35px] border-[1px] border-solid border-[#000] px-3 flex justify-center items-center rounded-s-lg"
                      >
                        -
                      </button>
                      <span className="w-[90px] h-[35px] border-[1px] border-x-0 border-solid border-[#000] flex justify-center items-center">
                        {count}
                      </span>
                      <button
                        onClick={increaseCount}
                        type="button"
                        className="w-[30px] h-[35px] border-[1px] border-solid border-[#000] px-3 flex justify-center items-center rounded-e-lg"
                      >
                        +
                      </button>
                    </div>
                    <span>
                      {fakeApi[0].quantity > 0 ? "Còn hàng" : "Hết hàng"}
                    </span>
                  </div>
                  <button
                    type="button"
                    className="h-[47px] w-full rounded-md bg-black mt-[15px] text-white uppercase hover:opacity-80"
                  >
                    THÊM VÀO GIỎ HÀNG
                  </button>
                </form>
              </div>
              <div className="my-[30px]">
                <div className="w-full lg:w-[50%] h-[52px] border-1 border-solid border-black rounded-md text-center cursor-pointer uppercase leading-[50px] text-black">
                  Mô tả sản phẩm
                </div>
                <div className="py-[15px]">
                  <p className="text-[#333] text-sm leading-6">
                    Thông tin sản phẩm
                  </p>
                  <p className="text-[#333] text-sm leading-6">
                    {/* in chất liệu */}- Chất liệu: {fakeApi[0].material}{" "}
                    <br />- Màu sắc:{" "}
                    {fakeApi[0].imgIcon
                      .map((color) => {
                        return `
                        ${color.iconName}
                        `;
                      })
                      .join("/")}{" "}
                    <br />
                    {/* in form */}- form: {fakeApi[0].form} <br />
                    {/* in thiết kế */}- Thiết kế: {fakeApi[0].design}
                    <img
                      src={fakeApi[0].imgInDetail}
                      alt=""
                      className="h-full w-[790px] my-1 border-x-[1px] border-solid border-[#b9b9b9]"
                    />
                    Về TEELAB:
                  </p>
                  <br />
                  <p className="text-[#333] text-sm leading-6">
                    You will never be younger than you are at this very moment
                    “Enjoy Your Youth!”
                    <br />
                    <br />
                    Không chỉ là thời trang, TEELAB còn là “phòng thí nghiệm”
                    của tuổi trẻ - nơi nghiên cứu và cho ra đời năng lượng mang
                    tên “Youth”. Chúng mình luôn muốn tạo nên những trải nghiệm
                    vui vẻ, năng động và trẻ trung.
                    <br />
                    <br />
                    Lấy cảm hứng từ giới trẻ, sáng tạo liên tục, bắt kịp xu
                    hướng và phát triển đa dạng các dòng sản phẩm là cách mà
                    chúng mình hoạt động để tạo nên phong cách sống hằng ngày
                    của bạn. Mục tiêu của TEELAB là cung cấp các sản phẩm thời
                    trang chất lượng cao với giá thành hợp lý.
                    <br />
                    Chẳng còn thời gian để loay hoay nữa đâu youngers ơi! Hãy
                    nhanh chân bắt lấy những những khoảnh khắc tuyệt vời của
                    tuổi trẻ. TEELAB đã sẵn sàng trải nghiệm cùng bạn!
                    <br />
                    <br />
                    “Enjoy Your Youth”, now!
                    <br />
                    <br />
                    Hướng dẫn sử dụng sản phẩm Teelab:
                    <br />
                    - Ngâm áo vào NƯỚC LẠNH có pha giấm hoặc phèn chua từ trong
                    2 tiếng đồng hồ
                    <br />
                    - Giặt ở nhiệt độ bình thường, với đồ có màu tương tự.
                    <br />
                    - Không dùng hóa chất tẩy.
                    <br />- Hạn chế sử dụng máy sấy và ủi (nếu có) thì ở nhiệt
                    độ thích hợp.
                    <br />
                    <br />
                    Chính sách bảo hành:
                    <br />
                    - Miễn phí đổi hàng cho khách mua ở TEELAB trong trường hợp
                    bị lỗi từ nhà sản xuất, giao nhầm hàng, bị hư hỏng trong quá
                    trình vận chuyển hàng.
                    <br />
                    - Sản phẩm đổi trong thời gian 3 ngày kể từ ngày nhận hàng
                    <br />- Sản phẩm còn mới nguyên tem, tags và mang theo hoá
                    đơn mua hàng, sản phẩm chưa giặt và không dơ bẩn, hư hỏng
                    bởi những tác nhân bên ngoài cửa hàng sau khi mua hàng.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </>
    )
  );
};

export default Item;
