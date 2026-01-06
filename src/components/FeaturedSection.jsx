import SectionTitle from "./SectionTitle";
import playstation from "../assets/Featured/playstation.png";
import perfume from "../assets/Featured/perfume.png";
import speaker from "../assets/Featured/speaker.png";
import womanImg from "../assets/Featured/WomanCollection.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const FeaturedSection = () => {
  const { t } = useTranslation();
  return (
    <section className="my-10">
      <SectionTitle title={t("Featured")} mainTitle={t("new arrival")} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 md:gap-y-0 gap-x-0 md:gap-x-5  text-white  ">
        {/* left side */}
        <div className="relative flex justify-center items-center bg-black rounded">
          <img src={playstation} alt="" className="w-full object-contain " />
          <div className="absolute left-10 bottom-8 max-w-xs">
            <h1 className="font-bold capitalize ">play station 5</h1>
            <p className="py-2 text-sm">
              Black and White version of the PS5 coming out on sale.
            </p>
            <Link
              to="/"
              className="underline hover:no-underline capitalize underline-offset-4 font-medium"
            >
              shop now
            </Link>
          </div>
        </div>
        {/* right side */}
        <div className="flex flex-col items-center gap-y-4 md:gap-y-5 justify-center w-full h-full md:w-auto ">
          <div className="bg-black rounded relative w-full px-10  md:w-auto flex justify-center items-center ">
            <div className=" absolute bottom-6 left-4">
              <h1 className="capitalize font-bold">Women’s Collections</h1>
              <p>Featured woman collections that give you another vibe.</p>
              <Link
                to="/"
                className=" font-medium underline hover:no-underline underline-offset-4 capitalize"
              >
                shop now
              </Link>
            </div>
            <img src={womanImg} alt="" className="object-cover" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 md:gap-y-0 items-center w-full md:w-auto gap-x-5 h-full  ">
            <div className="bg-black relative px-6 py-8 h-full rounded">
              <img src={speaker} alt="" />
              <div className="absolute left-4 bottom-6">
                <h1 className="capitalize font-bold">speaker</h1>
                <p>Amazon wireless speakers</p>
                <Link
                  to="/"
                  className="underline hover:no-underline underline-offset-4 font-medium  capitalize"
                >
                  shop now
                </Link>
              </div>
            </div>
            <div className="bg-black relative px-6 py-8 h-full rounded">
              <img src={perfume} alt="" />
              <div className="absolute left-4 bottom-6">
                <h1 className="capitalize font-bold">Perfume</h1>
                <p>GUCCI INTENSE OUD EDP</p>
                <Link
                  to="/"
                  className="underline hover:no-underline underline-offset-4 font-medium  capitalize"
                >
                  shop now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
