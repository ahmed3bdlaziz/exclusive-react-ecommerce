import SectionTitle from "./SectionTitle";
import CategoryList from "./CategoryList";
import { useTranslation } from "react-i18next";

const CategorySection = () => {
  const { t } = useTranslation();
  return (
    <section className="py-6 md:py-10 ">
      <SectionTitle
        title={t("categories")}
        mainTitle={t("explore our categories")}
      />
      <CategoryList />
    </section>
  );
};

export default CategorySection;
