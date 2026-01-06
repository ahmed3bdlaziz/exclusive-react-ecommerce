import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

const Header = () => {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  useEffect(() => {
    document.body.dir = i18n.language === "ar" ? "rtl" : "ltr";
  }, [i18n.language]);

  return (
    <header className="bg-black text-white py-1 ">
      <div className="align-element">
        <div className="flex items-center justify-center space-x-6 relative flex-wrap">
          <span className="text-xs md:text-xl">
            {t(
              "Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!"
            )}
          </span>
          <Link
            to="#"
            className="font-bold underline hover:no-underline transition duration-300"
          >
            {t("shop now")}
          </Link>
          <select
            className="bg-black border text-white text-sm px-2 py-1 rounded focus:outline-none md:absolute right-0 border-none "
            value={i18n.language}
            onChange={handleLanguageChange}
          >
            <option value="en">English</option>
            <option value="ar">العربية</option>
          </select>
        </div>
      </div>
    </header>
  );
};

export default Header;
