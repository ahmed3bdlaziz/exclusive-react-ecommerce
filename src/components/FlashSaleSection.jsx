import React from "react";
import SectionTitle from "./SectionTitle";
import FlashSaleTimer from "./FlashSaleTimer";
import { flashSaleData as data } from "../data";
import Products from "./Products";
import { useTranslation } from "react-i18next";
function FlashSaleSection() {
  const { t } = useTranslation();
  return (
    <section>
      <div className="flex flex-col gap-y-5 md:gap-y-0">
        <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] md:gap-x-3 items-center">
          <SectionTitle title={t("today's")} mainTitle={t("flash sales")} />
          <FlashSaleTimer />
        </div>
        <div className="flex flex-col gap-6">
          <Products data={data} />
          <button className="mx-auto block bg-red-400 p-4 rounded text-white capitalize cursor-pointer hover:bg-red-500 transition duration-300">
            {t("view all products")}
          </button>
        </div>
      </div>
    </section>
  );
}

export default FlashSaleSection;
