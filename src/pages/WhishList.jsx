import { useSelector } from "react-redux";
import { Products, SectionTitle } from "../components";

const WhishList = () => {
  const { wishItems } = useSelector((state) => state.wish);
  if (wishItems.length === 0)
    return (
      <section className="py-10 space-y-20">
        <SectionTitle title="wishlist" mainTitle="wishlist is empty" />
      </section>
    );

  return (
    <section className="py-10 space-y-20 ">
      <div className="flex flex-col gap-y-5">
        <div className="flex flex-col justify-between items-start md:items-center md:flex-row gap-y-5 md:gap-y-0   ">
          {/* <h2 className="capitalize"> wishlist (5)</h2> */}
          <SectionTitle
            title="wishlist"
            mainTitle={`wishlist (${wishItems.length})`}
          />
          <button className="border capitalize px-3 text-sm md:text-xl py-1 md:px-5 md:py-2 font-semibold rounded border-gray-400 hover:bg-red-500 cursor-pointer hover:text-white transition duration-300 hover:border-red-500 ">
            move all to bag
          </button>
        </div>
        <Products data={wishItems} wishData={true} />
      </div>
    </section>
  );
};

export default WhishList;
