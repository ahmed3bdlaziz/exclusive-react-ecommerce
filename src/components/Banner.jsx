import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import logo from "../assets/Hero.png";
import { FaApple } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useTranslation } from "react-i18next";

const Banner = () => {
  const { t, i18n } = useTranslation();
  return (
    <div div className="col-span-4 p-4 md:p-8">
      <div className=" bg-black text-white">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* right slide */}
              <div className="flex gap-4 flex-col justify-center items-start p-6 md:p-12  ">
                <p className=" flex gap-4 justify-center items-center">
                  <FaApple className="text-4xl" /> {t("iphone 15 series")}
                </p>
                <h1 className="text-4xl md:text-5xl font-bold">
                  {t("up to 10% off voucher")}
                </h1>

                <button className=" flex items-center gap-2 uppercase px-4 py-2 hover:text-gray-200 hover:cursor-pointer transition duration-300 ">
                  {t("shop now")}
                  {i18n.language === "ar" ? (
                    <MdOutlineArrowBackIos />
                  ) : (
                    <MdOutlineArrowForwardIos />
                  )}
                </button>
              </div>
              {/* left slide */}
              <div>
                <img src={logo} alt="" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* right slide */}
              <div className="flex gap-4 flex-col justify-center items-start p-6 md:p-12  ">
                <p className=" flex gap-4 justify-center items-center">
                  <FaApple className="text-4xl" /> {t("iphone 15 series")}
                </p>
                <h1 className="text-4xl md:text-5xl font-bold">
                  {t("up to 10% off voucher")}
                </h1>

                <button className=" flex items-center gap-2 uppercase px-4 py-2 hover:text-gray-200 hover:cursor-pointer transition duration-300 ">
                  {t("shop now")}
                  {i18n.language === "ar" ? (
                    <MdOutlineArrowBackIos />
                  ) : (
                    <MdOutlineArrowForwardIos />
                  )}
                </button>
              </div>
              {/* left slide */}
              <div>
                <img src={logo} alt="" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* right slide */}
              <div className="flex gap-4 flex-col justify-center items-start p-6 md:p-12  ">
                <p className=" flex gap-4 justify-center items-center">
                  <FaApple className="text-4xl" /> {t("iphone 15 series")}
                </p>
                <h1 className="text-4xl md:text-5xl font-bold">
                  {t("up to 10% off voucher")}
                </h1>

                <button className=" flex items-center gap-2 uppercase px-4 py-2 hover:text-gray-200 hover:cursor-pointer transition duration-300 ">
                  {t("shop now")}{" "}
                  {i18n.language === "ar" ? (
                    <MdOutlineArrowBackIos />
                  ) : (
                    <MdOutlineArrowForwardIos />
                  )}
                </button>
              </div>
              {/* left slide */}
              <div>
                <img src={logo} alt="" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* right slide */}
              <div className="flex gap-4 flex-col justify-center items-start p-6 md:p-12  ">
                <p className=" flex gap-4 justify-center items-center">
                  <FaApple className="text-4xl" /> {t("iphone 15 series")}
                </p>
                <h1 className="text-4xl md:text-5xl font-bold">
                  {t("up to 10% off voucher")}
                </h1>

                <button className=" flex items-center gap-2 uppercase px-4 py-2 hover:text-gray-200 hover:cursor-pointer transition duration-300 ">
                  {t("shop now")}{" "}
                  {i18n.language === "ar" ? (
                    <MdOutlineArrowBackIos />
                  ) : (
                    <MdOutlineArrowForwardIos />
                  )}
                </button>
              </div>
              {/* left slide */}
              <div>
                <img src={logo} alt="" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* right slide */}
              <div className="flex gap-4 flex-col justify-center items-start p-6 md:p-12  ">
                <p className=" flex gap-4 justify-center items-center">
                  <FaApple className="text-4xl" /> {t("iphone 15 series")}
                </p>
                <h1 className="text-4xl md:text-5xl font-bold">
                  {t("up to 10% off voucher")}
                </h1>

                <button className=" flex items-center gap-2 uppercase px-4 py-2 hover:text-gray-200 hover:cursor-pointer transition duration-300 ">
                  {t("shop now")}{" "}
                  {i18n.language === "ar" ? (
                    <MdOutlineArrowBackIos />
                  ) : (
                    <MdOutlineArrowForwardIos />
                  )}
                </button>
              </div>
              {/* left slide */}
              <div>
                <img src={logo} alt="" />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Banner;
