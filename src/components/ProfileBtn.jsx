import { useState } from "react";
import { FaStar, FaUser } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import { IoBagHandle } from "react-icons/io5";
import { RxCrossCircled } from "react-icons/rx";
import { Link } from "react-router-dom";

const ProfileBtn = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => setIsOpen(!isOpen);

  return (
    <>
      <div class="relative inline-block text-left z-10">
        {/* <!-- Dropdown button --> */}
        <button
          class="inline-flex justify-center p-2 rounded-full bg-white text-xl font-medium   focus:outline-none transition duration-300 cursor-pointer focus:bg-red-500 focus:text-white"
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
          onClick={() => handleOpen()}
        >
          <FaUser />
        </button>

        <div
          class={`origin-top-right absolute right-0 mt-2 w-52 rounded-md shadow-lg bg-black/35 backdrop-blur-3xl  ring-black ring-opacity-5 ${
            isOpen ? "block" : "hidden"
          }`}
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
        >
          <div class="py-1" role="none">
            <Link
              to="#"
              class="flex items-center gap-3 px-4 capitalize py-2 text-md text-white hover:text-white hover:bg-red-400 transition duration-300"
              role="menuitem"
            >
              <FaUser /> Account settings
            </Link>
            <Link
              to="#"
              class="flex items-center gap-3 px-4 capitalize py-2 text-md text-white hover:text-white hover:bg-red-400 transition duration-300"
              role="menuitem"
            >
              <IoBagHandle />
              my order
            </Link>
            <Link
              to="#"
              class="flex items-center gap-3 px-4 capitalize py-2 text-md text-white hover:text-white hover:bg-red-500 transition duration-300"
              role="menuitem"
            >
              <RxCrossCircled />
              my cancellation
            </Link>
            <Link
              to="#"
              class="flex items-center gap-3 px-4 capitalize py-2 text-md text-white hover:text-white hover:bg-red-500 transition duration-300"
              role="menuitem"
            >
              <FaStar /> my reviews
            </Link>
            <form method="POST" action="#" role="none">
              <button
                type="submit"
                class="flex items-center gap-3 w-full text-left px-4 py-2 text-md text-white hover:bg-red-500 hover:text-white transition duration-300"
                role="menuitem"
              >
                <IoIosLogOut />
                sign out
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileBtn;
