import React from "react";
import SectionTitle from "./SectionTitle";
import Products from "./Products";
import { Link } from "react-router-dom";
import { flashSaleData as data } from "../data";
import { useTranslation } from "react-i18next";
function BestSelling() {
  const { t } = useTranslation();
  return (
    <section className="py-6 md:py-10">
      <div className="flex justify-between items-center flex-wrap mb-10 md:mb-0">
        <SectionTitle
          title={t("this month")}
          mainTitle={t("best selling products")}
        />
        <div>
          <Link
            to="/products"
            className="capitalize bg-red-500 text-white py-2.5 px-12 rounded hover:bg-red-400 transition duration-300 "
          >
            {t("view all")}
          </Link>
        </div>
      </div>
      <Products data={data} />
    </section>
  );
}

export default BestSelling;
