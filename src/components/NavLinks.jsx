import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Contact",
    path: "/contact",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "SignUp",
    path: "/register",
  },
];

const NavLinks = () => {
  const { t } = useTranslation();
  return (
    <ul className="flex flex-col md:flex-row gap-y-5 md:gap-x-11 text-xl capitalize md:justify-center">
      {links.map((link) => (
        <li key={link.name}>
          <Link
            to={link.path}
            className=" hover:text-gray-800 transition duration-300 "
          >
            {t(link.name)}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
