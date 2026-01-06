import AsideNav from "./AsideNav";
import Banner from "./Banner";
const Hero = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-5">
      <AsideNav />
      <Banner />
    </section>
  );
};

export default Hero;
