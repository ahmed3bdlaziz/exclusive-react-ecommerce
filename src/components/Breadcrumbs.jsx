import React from "react";
import { Link } from "react-router-dom";

const Breadcrumbs = ({ title }) => {
  return (
    <div className="my-20">
      <ul className="flex gap-x-2 justify-start items-center text-xl capitalize font-semibold">
        <li>
          <Link to="/" className="text-gray-500">
            Home
          </Link>
        </li>
        <li>
          <span>/</span>
        </li>
        <li>
          <p>{title}</p>
        </li>
      </ul>
    </div>
  );
};

export default Breadcrumbs;
