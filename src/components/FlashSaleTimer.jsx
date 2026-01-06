import { useTranslation } from "react-i18next";
import { FlashTimer } from "../utility";

const FlashSaleTimer = () => {
  const { t } = useTranslation();
  // Set flash sale end time (example: ends in 3 days)
  const { seconds, minutes, hours, days } = FlashTimer();

  return (
    <div className="flex gap-3 items-center justify-start capitalize">
      <div>
        <p className="text-md md:text-xl">{t("days")}</p>
        <p className="font-bold text-3xl md:text-5xl">
          {String(days).padStart(2, "0")}
        </p>
      </div>
      <span className="text-red-400 text-3xl">:</span>
      <div>
        <p className="text-md md:text-xl ">{t("hours")}</p>
        <p className="font-bold text-3xl md:text-5xl">
          {String(hours).padStart(2, "0")}
        </p>
      </div>
      <span className="text-red-400 text-3xl">:</span>
      <div>
        <p className="text-md md:text-xl">{t("minutes")}</p>
        <p className="font-bold text-3xl md:text-5xl">
          {String(minutes).padStart(2, "0")}
        </p>
      </div>
      <span className="text-red-400 text-3xl">:</span>
      <div>
        <p className="text-md md:text-xl">{t("seconds")}</p>
        <p className="font-bold text-3xl md:text-5xl">
          {String(seconds).padStart(2, "0")}
        </p>
      </div>
      {/* <div className="hidden md:flex gap-3 justify-end">
          <button className=" rounded-full border border-gray-300 p-4 text-red-500 text-md md:text-xl cursor-pointer"> text-3xl
md:            <FaArrowLeft />
          </button>
          <button className="rounded-full border border-gray-300 p-4 text-red-500 text-md md:text-xl cursor-pointer"> text-3xl
md:            <FaArrowRight />
          </button>
        </div> */}
    </div>
  );
};

export default FlashSaleTimer;
