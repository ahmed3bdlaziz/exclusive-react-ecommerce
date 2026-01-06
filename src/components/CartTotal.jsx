import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { formatPrice } from "../utility";

const CartTotal = () => {
  const { orderTotal, shippingFees, total, tax } = useSelector(
    (state) => state.cart
  );
  return (
    <div className="flex flex-col md:flex-row justify-between items-start mt-10 gap-10">
      <div className="flex gap-4">
        <Link
          to="/"
          className="px-8 py-3 border border-gray-400 rounded hover:bg-red-500 transition duration-300 hover:text-white"
        >
          Return To Shop
        </Link>
      </div>

      <div className="border border-gray-400 rounded p-6 w-full md:w-96">
        <h3 className="text-xl font-medium mb-4">Cart Total</h3>
        <div className="flex justify-between border-b border-gray-300 pb-2 mb-2">
          <span>Subtotal:</span>
          <span>${total}</span>
        </div>
        <div className="flex justify-between border-b border-gray-300 pb-2 mb-2">
          <span>Shipping:</span>
          <span>{shippingFees === 0 ? "Free" : `$${shippingFees}`}</span>
        </div>
        <div className="flex justify-between border-b border-gray-300 pb-2 mb-2">
          <span>Tax:</span>
          <span>{formatPrice(tax)}</span>
        </div>

        <div className="flex justify-between mb-6">
          <span>Total:</span>
          <span>{formatPrice(orderTotal)}</span>
        </div>
        <button className="w-full bg-red-500 text-white py-3 rounded hover:bg-red-600 transition duration-300 cursor-pointer">
          Proceed to checkout
        </button>
      </div>
    </div>
  );
};

export default CartTotal;
