import React from "react";
import { CiHeart } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ButtonContainer = () => {
  const { amount } = useSelector((state) => state.cart);
  const { amount: wishAmount } = useSelector((state) => state.wish);

  return (
    <div className="flex items-center gap-3">
      <div className="relative">
        <Link to="/wishlist">
          <CiHeart className="w-8 h-8" aria-label="Wishlist" />
          <span className="absolute text-white top-0 right-0 w-4 h-4 bg-red-500 rounded-full flex justify-center items-center text-xs">
            {wishAmount}
          </span>
        </Link>
      </div>
      <div className="relative">
        <Link to="/cart">
          <FiShoppingCart className="w-8 h-8" aria-label="Cart" />
          <span className="absolute text-white top-0 right-0 w-4 h-4 bg-red-500 rounded-full flex justify-center items-center text-xs">
            {amount}
          </span>
        </Link>
      </div>
    </div>
  );
};

export default ButtonContainer;
