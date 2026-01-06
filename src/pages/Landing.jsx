import {
  BestSelling,
  CategorySection,
  FeaturedSection,
  FlashSaleSection,
  Hero,
  MusicSection,
  ProductsSection,
  ServicesSection,
} from "../components";

const Landing = () => {
  return (
    <div>
      <Hero />
      <hr className="border-gray-300 mt-10 mb-10" />
      <FlashSaleSection />
      <hr className="border-gray-300 mt-10 mb-10" />
      <CategorySection />
      <BestSelling />
      <MusicSection />
      <ProductsSection />
      <FeaturedSection />
      <ServicesSection />
    </div>
  );
};

export default Landing;
