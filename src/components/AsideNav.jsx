import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const AsideNav = () => {
  const { t, i18n } = useTranslation();
  return (
    <aside className="hidden md:block">
      <ul
        className={`${
          i18n.language === "ar" ? "border-l" : "border-r"
        }   flex flex-col gap-3 py-6  border-gray-200`}
      >
        <li className="hover:cursor-pointer hover:text-red-400 transition duration-300 flex justify-between">
          <Link to="#">{t("Woman’s Fashion")}</Link>
          {i18n.language === "ar" ? (
            <MdOutlineKeyboardArrowLeft />
          ) : (
            <MdOutlineKeyboardArrowRight />
          )}
        </li>
        <li className="hover:cursor-pointer hover:text-red-400 transition duration-300 flex justify-between">
          <Link to="#">{t("men’s Fashion")}</Link>
          {i18n.language === "ar" ? (
            <MdOutlineKeyboardArrowLeft />
          ) : (
            <MdOutlineKeyboardArrowRight />
          )}
        </li>
        <li className="hover:cursor-pointer hover:text-red-400 transition duration-300">
          <Link to="#">{t("Electronics")}</Link>
        </li>
        <li className="hover:cursor-pointer hover:text-red-400 transition duration-300">
          <Link to="#">{t("home & lifestyle")}</Link>
        </li>
        <li className="hover:cursor-pointer hover:text-red-400 transition duration-300">
          <Link to="#">{t("medicine")}</Link>
        </li>
        <li className="hover:cursor-pointer hover:text-red-400 transition duration-300">
          <Link to="#">{t("sports & outdoors")}</Link>
        </li>
        <li className="hover:cursor-pointer hover:text-red-400 transition duration-300">
          <Link to="#">{t("baby's & toys")}</Link>
        </li>
        <li className="hover:cursor-pointer hover:text-red-400 transition duration-300">
          <Link to="#">{t("grocery & pets")}</Link>
        </li>
        <li className="hover:cursor-pointer hover:text-red-400 transition duration-300">
          <Link to="#">{t("health & beauty")}</Link>
        </li>
      </ul>
    </aside>
  );
};

export default AsideNav;
