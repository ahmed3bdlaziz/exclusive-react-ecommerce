import { Breadcrumbs, CartSection } from "../components";

const Cart = () => {
  return (
    <section className="container mx-auto px-4 md:px-0 mb-20">
      <Breadcrumbs title="cart" />
      <CartSection />
    </section>
  );
};

export default Cart;
