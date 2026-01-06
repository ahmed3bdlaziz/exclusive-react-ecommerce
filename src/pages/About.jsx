import { Breadcrumbs } from "../components";
import { ServicesSection } from "../components";
import {
  FaStore,
  FaDollarSign,
  FaShoppingBag,
  FaMoneyBillAlt,
} from "react-icons/fa";
import { FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import aboutImg from "../assets/beatsnoop.png";

const About = () => {
  return (
    <section className="container mx-auto px-4 md:px-0 mb-20">
      <Breadcrumbs title="About" />

      {/* Story Section */}
      <div className="flex flex-col md:flex-row items-center gap-10 mt-10 mb-20">
        <div className="w-full md:w-1/2">
          <h2 className="text-4xl font-semibold mb-6 text-justify">
            Our Story
          </h2>
          <p className="text-base mb-6 text-gray-700 leading-relaxed text-justify">
            Launced in 2015, Exclusive is South Asia’s premier online shopping
            marketplace with an active presence in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive
            has 10,500 sallers and 300 brands and serves 3 millioons customers
            across the region.
          </p>
          <p className="text-base text-gray-700 leading-relaxed text-justify">
            Exclusive has more than 1 Million products to offer, growing at a
            very fast. Exclusive offers a diverse assotment in categories
            ranging from consumer.
          </p>
        </div>
        <div className="w-full md:w-1/2">
          <img
            src={aboutImg}
            alt="Our Story"
            className="w-full h-[400px] object-contain rounded-sm"
          />
        </div>
      </div>

      {/* Team Section */}
    </section>
  );
};

export default About;
