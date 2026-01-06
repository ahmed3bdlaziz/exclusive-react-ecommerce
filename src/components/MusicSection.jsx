import { FlashTimer } from "../utility";
import JBL from "../assets/JBL.png";
import { useTranslation } from "react-i18next";
// import JBL from "../assets/JBL_BOOMBOX_2_HERO_020_x1 (1) 1 (1).png";
const MusicSection = () => {
  const { seconds, minutes, hours, days } = FlashTimer();
  const { t } = useTranslation();

  return (
    <section className="bg-black grid grid-cols-1 md:grid-cols-2 min-h-96 text-white px-6 md:px-12 py-8 md:py-14 my-10">
      {/* info */}
      <div className="flex gap-y-5 flex-col justify-between md:justify-start items-start  ">
        <p className="capitalize text-green-500">categories</p>
        <h1 className="text-3xl md:text-4xl my-5 lg:text-5xl font-semibold ">
          {t("Enhance Your Music Experience")}
        </h1>
        {/* timer */}
        <div className="text-black flex gap-5 items-center">
          <div className="rounded-full bg-white w-20 h-20 flex gap-2 flex-col justify-center items-center  ">
            <p className="font-bold text-xl">{String(days).padStart(2, "0")}</p>
            <p className="text-sm capitalize">{t("days")}</p>
          </div>
          <div className="rounded-full bg-white w-20 h-20 flex gap-2 flex-col justify-center items-center  ">
            <p className="font-bold text-xl">
              {String(hours).padStart(2, "0")}
            </p>
            <p className="text-sm capitalize">{t("hours")}</p>
          </div>
          <div className="rounded-full bg-white w-20 h-20 flex gap-2 flex-col justify-center items-center  ">
            <p className="font-bold text-xl">
              {String(minutes).padStart(2, "0")}
            </p>
            <p className="text-sm capitalize">{t("minutes")}</p>
          </div>
          <div className="rounded-full bg-white w-20 h-20 flex gap-2 flex-col justify-center items-center  ">
            <p className="font-bold text-xl">
              {String(seconds).padStart(2, "0")}
            </p>
            <p className="text-sm capitalize">{t("seconds")}</p>
          </div>
        </div>
        <button className="btn bg-green-500 px-7 py-3 rounded capitalize cursor-pointer hover:bg-green-600 transition duration-300">
          {t("buy now")}
        </button>
      </div>
      {/* image */}
      <div className="flex justify-center items-center  ">
        <img
          src={JBL}
          alt=""
          className="w-full p-10 md:p-8 sm:max-w-xl  md:max-w-3xl lg:scale-110 "
        />
      </div>
    </section>
  );
};

export default MusicSection;
