import { useTranslation } from "react-i18next";
import { AiOutlineSafety } from "react-icons/ai";
import { FaHeadset } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";

const ServicesSection = () => {
  const { t } = useTranslation();
  return (
    <section className="my-25">
      <div className="flex justify-around items-center  flex-wrap gap-y-10 md:gap-y-0">
        <div className="flex flex-col items-center gap-y-3">
          <span className="text-3xl rounded-full bg-black text-white p-4 border-10 border-gray-400">
            <TbTruckDelivery />
          </span>
          <h1 className="font-bold text-xl uppercase">
            {t("FREE AND FAST DELIVERY")}
          </h1>
          <p className="capitalize">
            {t("Free delivery for all orders over $140")}
          </p>
        </div>
        <div className="flex flex-col items-center gap-y-3">
          <span className="text-3xl rounded-full bg-black text-white p-4 border-10 border-gray-400">
            <FaHeadset />
          </span>
          <h1 className="font-bold text-xl uppercase">
            {t("24/7 customer services")}
          </h1>
          <p className="capitalize">{t("friendly 24/7 customer services")}</p>
        </div>
        <div className="flex flex-col items-center gap-y-3">
          <span className="text-3xl rounded-full bg-black text-white p-4 border-10 border-gray-400">
            <AiOutlineSafety />
          </span>
          <h1 className="font-bold text-xl uppercase">
            {t("money back guarantee")}
          </h1>
          <p className="capitalize">{t("we return money with in 30 days")}</p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
