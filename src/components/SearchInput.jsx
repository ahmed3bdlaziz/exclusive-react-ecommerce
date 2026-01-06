import React from "react";
import { CiSearch } from "react-icons/ci";
import { useTranslation } from "react-i18next";

const SearchInput = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="bg-gray-200 rounded relative space-x-3">
      <input
        type="text"
        className="px-6 py-2 focus:outline-none"
        placeholder={t("what are you looking for?")}
      />
      <CiSearch
        className={` ${
          i18n.language === "ar" ? "left-1" : "right-1"
        } absolute top-2.5 w-6 h-6 text-black`}
      />
    </div>
  );
};

export default SearchInput;
