import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { CiHeart } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/CartSlice";
import { toggleWish } from "../features/wish/WishSlice";
const Products = ({ data }) => {
  const dispatch = useDispatch();

  return (
    <article>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 5,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          900: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
        className="mySwiper"
      >
        {data.map((product) => {
          const { id, name, price, discount, image, review, wish } = product;
          // console.log(wish);

          const { stars, rate } = review;
          const starsArray = (value) =>
            Array.from({ length: 5 }, (_, index) => {
              return (
                <span
                  key={index}
                  style={{ color: index < value ? "#FFD700" : "#ccc" }}
                >
                  ★
                </span>
              );
            });

          return (
            <SwiperSlide>
              {/* card */}
              <div
                className="flex flex-col gap-3 w-full h-full md:w-60 md:h-80 rounded "
                key={id}
              >
                <div className="bg-gray-200 flex justify-center items-center h-60 relative group  ">
                  <img src={image} alt="" className="w-44 h-36" />
                  {price && (
                    <span className="absolute w-14 h-8 bg-red-500 rounded text-white text-center text-sm flex justify-center items-center top-2 left-2 ">
                      {discount && ((discount / price) * 100).toFixed(0)}%
                    </span>
                  )}{" "}
                  <div className="absolute top-2 right-2 flex gap-2 flex-col">
                    <button
                      className={`${
                        wish ? "bg-red-400 text-white" : "bg-white "
                      }  rounded-full w-8 h-8 flex justify-center items-center hover:bg-red-400 hover:cursor-pointer transition duration-300`}
                      onClick={() => dispatch(toggleWish({ product: product }))}
                    >
                      <CiHeart className="w-6 h-6" aria-label="Wishlist" />
                    </button>
                    <button className=" bg-white rounded-full w-8 h-8 flex justify-center items-center hover:bg-red-400 hover:cursor-pointer transition duration-300 ">
                      <FaEye className="w-6 h-6" aria-label="Wishlist" />
                    </button>
                  </div>
                  <button
                    className="absolute bottom-0 opacity-0  transition duration-300 group-hover:opacity-100 w-full bg-black capitalize py-2 text-white cursor-pointer "
                    onClick={() =>
                      dispatch(
                        addToCart({
                          product: {
                            id,
                            name,
                            price,
                            discount: discount || price,
                            image,
                            amount: 1,
                          },
                        })
                      )
                    }
                  >
                    add to cart
                  </button>
                </div>
                <div>
                  <h1 className="">{name}</h1>
                  <div className="flex space-x-3">
                    <span className="tracking-wide text-red-400 font-semibold">
                      {discount}$
                    </span>
                    <span className="line-through text-gray-500 tracking-wide font-semibold">
                      {price}
                      {price && "$"}
                    </span>
                  </div>
                  <div className="flex gap-2 items-center">
                    <span className="stars">{starsArray(stars)}</span>
                    <span className="review">({rate})</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </article>
  );
};

export default Products;
