import { FcGoogle } from "react-icons/fc";
import beatsnoop from "../assets/beatsnoop.png";
import { Link } from "react-router-dom";
const Register = () => {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="hidden md:block">
          <img src={beatsnoop} alt="" />
        </div>
        <form className="flex flex-col justify-center items-start px-20">
          <h1 className="text-3xl capitalize font-semibold">
            create an account
          </h1>
          <h3 className="capitalize pb-8 pt-6">enter your details below </h3>
          <input
            type="text"
            className="border-b border-gray-400 w-full capitalize p-4 focus:outline-none"
            placeholder="name"
          />
          <input
            type="email"
            className="border-b border-gray-400 w-full capitalize p-4 focus:outline-none"
            placeholder="email"
          />
          <input
            type="password"
            className="border-b border-gray-400 w-full capitalize p-4 focus:outline-none"
            placeholder="password"
          />
          <button className="w-full bg-red-500 px-5 py-3 capitalize mt-5 cursor-pointer">
            register
          </button>
          <button className="w-full  px-5 py-3 capitalize mt-5 flex gap-x-3 justify-center items-center border rounded border-gray-400 cursor-pointer">
            <FcGoogle />
            sign in with google
          </button>
          <p className="mt-5 capitalize mx-auto">
            already have an account?
            <Link to="/login" className="text-red-500 cursor-pointer">
              sign in
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Register;
