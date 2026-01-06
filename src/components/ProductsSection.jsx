import React from "react";
import SectionTitle from "./SectionTitle";
import Products from "./Products";
import { flashSaleData } from "../data";
import { useTranslation } from "react-i18next";
const ProductsSection = () => {
  const { t } = useTranslation();
  return (
    <section>
      <SectionTitle
        title={t("our products")}
        mainTitle={t("explore our products")}
      />
      <div className="space-y-6">
        <Products data={flashSaleData} />
        <Products data={flashSaleData} />
      </div>
    </section>
  );
};

export default ProductsSection;
