import { Breadcrumbs } from "../components";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="container mx-auto px-4 md:px-0 mb-20">
      <Breadcrumbs title="Contact" />
      <div className="flex flex-col md:flex-row gap-8 mt-10">
        {/* Contact Info Section */}
        <div className="w-full md:w-1/3 bg-white shadow-sm rounded-sm p-8">
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-red-500 text-white p-3 rounded-full">
                <FaPhoneAlt />
              </div>
              <h3 className="text-base font-medium">Call To Us</h3>
            </div>
            <p className="text-sm mb-4">
              We are available 24/7, 7 days a week.
            </p>
            <p className="text-sm">Phone: +8801611112222</p>
          </div>

          <hr className="border-gray-300 mb-8" />

          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-red-500 text-white p-3 rounded-full">
                <FaEnvelope />
              </div>
              <h3 className="text-base font-medium">Write To Us</h3>
            </div>
            <p className="text-sm mb-4">
              Fill out our form and we will contact you within 24 hours.
            </p>
            <p className="text-sm mb-2">Emails: customer@exclusive.com</p>
            <p className="text-sm">Emails: support@exclusive.com</p>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="w-full md:w-2/3 bg-white shadow-sm rounded-sm p-8">
          <form className="flex flex-col gap-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input
                type="text"
                placeholder="Your Name *"
                className="bg-gray-100 rounded px-4 py-3 focus:outline-none focus:ring-1 focus:ring-gray-300"
                required
              />
              <input
                type="email"
                placeholder="Your Email *"
                className="bg-gray-100 rounded px-4 py-3 focus:outline-none focus:ring-1 focus:ring-gray-300"
                required
              />
              <input
                type="tel"
                placeholder="Your Phone *"
                className="bg-gray-100 rounded px-4 py-3 focus:outline-none focus:ring-1 focus:ring-gray-300"
                required
              />
            </div>
            <textarea
              placeholder="Your Message"
              rows="8"
              className="bg-gray-100 rounded px-4 py-3 focus:outline-none focus:ring-1 focus:ring-gray-300 w-full"
            ></textarea>
            <div className="flex justify-end mt-4">
              <button
                type="submit"
                className="bg-red-500 text-white px-12 py-4 rounded hover:bg-red-600 transition"
              >
                Send Massage
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Map Section */}
      <div className="mt-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.8868878494322!2d31.2896807745683!3d30.011404120137154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458397e0c788f61%3A0x9384619f8bf9106!2sCairo%20development!5e0!3m2!1sen!2sbd!4v1767468303247!5m2!1sen!2sbd"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;
