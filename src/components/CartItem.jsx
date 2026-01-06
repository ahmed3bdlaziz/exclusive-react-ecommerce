import { useDispatch, useSelector } from "react-redux";
import { formatPrice } from "../utility";
import SectionTitle from "./SectionTitle";
import { removeItem, updateQuantity } from "../features/cart/CartSlice";
const CartItem = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);
  if (cartItems.length < 1) return <SectionTitle title="Your cart is empty" />;
  return (
    <div className="flex flex-col gap-10">
      {cartItems.map((item) => (
        <div
          key={item.id}
          className="grid grid-cols-4 gap-4 items-center bg-white shadow-sm rounded-sm py-6 px-10 relative group"
        >
          {/* Product Column */}
          <div className="flex flex-col md:flex-row items-center gap-4 text-left relative">
            <div className="relative">
              <img
                className="w-16 h-16 object-contain"
                src={item.image}
                alt={item.name}
              />
              {/* Remove Button */}
              <button
                className="absolute -top-2 -left-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                onClick={() => dispatch(removeItem(item.id))}
                aria-label="Remove item"
              >
                x
              </button>
            </div>
            <p className="text-sm truncate max-w-[150px] hidden md:block">
              {item.name}
            </p>
          </div>

          {/* Price Column */}
          <p className="text-base text-center md:text-left">${item.price}</p>

          {/* Quantity Column */}
          <div className="flex items-center justify-center md:justify-start">
            <input
              type="number"
              min="1"
              value={item.amount}
              onChange={(e) =>
                dispatch(
                  updateQuantity({
                    id: item.id,
                    amount: parseInt(e.target.value),
                  })
                )
              }
              className="w-16 border border-gray-300 rounded px-2 py-1 text-center focus:outline-none focus:border-red-500"
            />
          </div>

          {/* Subtotal Column */}
          <p className="text-base font-medium text-center md:text-left">
            {formatPrice(item.itemTotal)}
          </p>
        </div>
      ))}
    </div>
  );
};

export default CartItem;
