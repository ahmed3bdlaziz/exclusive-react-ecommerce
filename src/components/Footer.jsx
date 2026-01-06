import { useTranslation } from "react-i18next";
import { BsQrCode } from "react-icons/bs";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import { IoMdSend } from "react-icons/io";
import { Link } from "react-router-dom";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer>
      <div className="bg-black text-white w-full ">
        <div className="grid grid-cols-1 items-start md:grid-cols-5 gap-y-6 px-6 md:px-12 py-12 gap-x-0 md:gap-x-12 ">
          <div className="flex flex-col justify-between  gap-y-6 max-w-[250px] ">
            <p className="capitalize text-xl">Exclusive</p>
            <Link to="#" className="capitalize">
              {t("subscribe")}
            </Link>
            <div>
              <p className="capitalize">get 10% off your first purchase</p>
              <div className="">
                <input
                  type="text"
                  className="w-full px-2 py-1 border border-gray-400 my-3 rounded capitalize"
                  placeholder="enter your email"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between items-start gap-y-6 max-w-[250px]">
            <p className="capitalize text-xl">{t("support")}</p>
            <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
            <p>exclusive@gmail.com</p>
            <p>+88015-88888-9999</p>
          </div>
          <div className="flex flex-col justify-between items-start gap-y-6 max-w-[250px]">
            <p className="capitalize text-xl">{t("account")}</p>
            <Link to="#" className="capitalize">
              {t("my account")}
            </Link>
            <Link to="#" className="capitalize">
              {t("login / register")}
            </Link>
            <Link to="#" className="capitalize">
              {t("cart")}
            </Link>
            <Link to="#" className="capitalize">
              {t("wishlist")}
            </Link>
            <Link to="#" className="capitalize">
              {t("shop")}
            </Link>
          </div>
          <div className="flex flex-col justify-between items-start gap-y-6 max-w-[250px]">
            <p className="capitalize text-xl">{t("quick link")}</p>
            <Link to="#" className="capitalize">
              {t("privacy policy")}
            </Link>
            <Link to="#" className="capitalize">
              {t("terms of use")}
            </Link>
            <Link to="#" className="capitalize">
              {t("faq")}
            </Link>
            <Link to="#" className="capitalize">
              {t("Contact")}
            </Link>
          </div>
          <div className="flex flex-col justify-between items-start gap-y-6 max-w-[250px]">
            <p className="capitalize text-xl">{t("download app")}</p>
            <p className="capitalize">{t("save with app")}</p>
            <div className="flex justify-between gap-3 items-center text-center">
              <div className="flex flex-col gap-y-1">
                <span className="flex items-center gap-2 border border-gray-400 p-2 rounded-xl">
                  <FaGooglePlay />
                  <p className="capitalize">{t("get in on google play")}</p>
                </span>
                <span className=" flex items-center gap-2 border border-gray-400 p-2 rounded-xl ">
                  <FaApple />
                  <p className="capitalize">{t("download on the app store")}</p>
                </span>
              </div>
            </div>
          </div>
        </div>
        <hr className="border-gray-800 border" />
        <p className="text-center capitalize py-5">
          &copy; {new Date().getFullYear()},
          {t(" exclusive, all rights reserved")}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
