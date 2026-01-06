import CartItem from "./CartItem";
import { useState } from "react";
import { flashSaleData } from "../data";
import CartTotal from "./CartTotal";

const CartSection = () => {
  const [items, setItems] = useState(
    flashSaleData.slice(0, 2).map((item) => ({ ...item, quantity: 1 }))
  );

  const handleQuantityChange = (index, newQuantity) => {
    if (newQuantity < 1) return;
    const newItems = [...items];
    newItems[index].quantity = newQuantity;
    setItems(newItems);
  };

  const removeItem = (index) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
  };

  const calculateSubtotal = (price, quantity) => price * quantity;

  const calculateTotal = () =>
    items.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="mt-10">
      {/* Top Headers */}
      <div className="grid grid-cols-4 gap-4 bg-white shadow-sm rounded-sm py-6 px-10 mb-10">
        <p className="text-base font-medium capitalize">Product</p>
        <p className="text-base font-medium capitalize">Price</p>
        <p className="text-base font-medium capitalize">Quantity</p>
        <p className="text-base font-medium capitalize">Subtotal</p>
      </div>

      {/* Cart Items */}
      <CartItem
        items={items}
        handleQuantityChange={handleQuantityChange}
        removeItem={removeItem}
        calculateSubtotal={calculateSubtotal}
      />
      {/* Bottom Actions & Total */}
      <CartTotal calculateTotal={calculateTotal} />
    </div>
  );
};

export default CartSection;
