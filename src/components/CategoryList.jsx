import { useTranslation } from "react-i18next";
import { BsSmartwatch } from "react-icons/bs";
import { CiCamera, CiHeadphones } from "react-icons/ci";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { LuGamepad } from "react-icons/lu";
import { SlScreenSmartphone } from "react-icons/sl";
import { Link } from "react-router-dom";

const CategoryList = () => {
  const { t } = useTranslation();
  return (
    <article>
      <div className="flex flex-col gap-4 md:flex-row justify-between items-start md:items-center">
        <Link
          to="/"
          className="w-full md:w-44 h-36 border border-gray-300 rounded flex flex-col justify-center items-center gap-3 hover:bg-red-400 hover:text-white transition duration-300"
        >
          <SlScreenSmartphone className="w-12 h-12" />
          <p className="text-2xl capitalize">{t("phones")}</p>
        </Link>
        <Link
          to="/"
          className="w-full md:w-44 h-36 border border-gray-300 rounded flex flex-col justify-center items-center gap-3 hover:bg-red-400 hover:text-white transition duration-300"
        >
          <HiOutlineDesktopComputer className="w-12 h-12" />
          <p className="text-2xl capitalize">{t("computers")}</p>
        </Link>
        <Link
          to="/"
          className="w-full md:w-44 h-36 border border-gray-300 rounded flex flex-col justify-center items-center gap-3 hover:bg-red-400 hover:text-white transition duration-300"
        >
          <BsSmartwatch className="w-12 h-12" />
          <p className="text-2xl capitalize">{t("smart watches")}</p>
        </Link>
        <Link
          to="/"
          className="w-full md:w-44 h-36 border border-gray-300 rounded flex flex-col justify-center items-center gap-3 hover:bg-red-400 hover:text-white transition duration-300"
        >
          <CiCamera className="w-12 h-12" />
          <p className="text-2xl capitalize">{t("camera")}</p>
        </Link>
        <Link
          to="/"
          className="w-full md:w-44 h-36 border border-gray-300 rounded flex flex-col justify-center items-center gap-3 hover:bg-red-400 hover:text-white transition duration-300"
        >
          <CiHeadphones className="w-12 h-12" />
          <p className="text-2xl capitalize">{t("headphones")}</p>
        </Link>
        <Link
          to="/"
          className="w-full md:w-44 h-36 border border-gray-300 rounded flex flex-col justify-center items-center gap-3 hover:bg-red-400 hover:text-white transition duration-300"
        >
          <LuGamepad className="w-12 h-12" />
          <p className="text-2xl capitalize">{t("gaming")}</p>
        </Link>
      </div>
    </article>
  );
};

export default CategoryList;
