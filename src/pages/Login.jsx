import { FcGoogle } from "react-icons/fc";
import beatsnoop from "../assets/beatsnoop.png";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="hidden md:block">
          <img src={beatsnoop} alt="" />
        </div>
        <form className="flex flex-col justify-center items-start px-20">
          <h1 className="text-3xl capitalize font-semibold">
            login to exclusive
          </h1>
          <h3 className="capitalize pb-8 pt-6">enter your details below </h3>
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
          <div className=" w-full flex justify-between items-center my-5">
            <button className=" bg-red-500 px-5 py-3 capitalize  cursor-pointer">
              register
            </button>
            <Link to="#" className="capitalize text-red-500 ">
              forget password?
            </Link>
          </div>
          <p className="capitalize mx-auto ">
            don't have an account?
            <Link to="/register" className="text-red-500">
              register
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Login;
