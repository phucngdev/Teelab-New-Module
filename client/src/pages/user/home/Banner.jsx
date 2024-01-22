import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const Banner = () => {
  const properties = {
    duration: 3000,
    transitionDuration: 500,
    arrows: false,
    infinite: true,
    easing: "ease",
    autoplay: true,
    pauseOnHover: false,
  };
  const slideImages = [
    "/banner/slider_1.webp",
    "/banner/slider_2.webp",
    "/banner/slider_3.webp",
    "/banner/slider_4.webp",
    "/banner/slider_5.webp",
  ];

  const showSlide = slideImages.map((each, index) => (
    <div key={index} className="">
      <img className="object-cover h-full" src={each} alt="" />
    </div>
  ));
  return (
    <div className="banner w-full mt-[55px] sm:mt-0 md:mt-0 lg:mt-0 xl:mt-0">
      <Slide {...properties}>{showSlide}</Slide>
      <div className="w-full">
        <div className="container mx-auto text-center py-[30px] px-[15px] lg:py-[60px]">
          <div className=" mb-[25px] text-[20px] lg:text-[35px]">
            Enjoy Your Youth!
          </div>
          <div className=" max-w-[685px] mx-auto mb-[25px] text-sm lg:text-base">
            Không chỉ là thời trang, TEELAB còn là “phòng thí nghiệm” của tuổi
            trẻ - nơi nghiên cứu và cho ra đời nguồn năng lượng mang tên
            “Youth”. Chúng mình luôn muốn tạo nên những trải nghiệm vui vẻ, năng
            động và trẻ trung.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
