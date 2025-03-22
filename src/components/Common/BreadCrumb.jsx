import React from "react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <nav className="text-sm py-4 px-6 bg-gray-100">
      <ul className="flex space-x-2">
        <li>
          <Link to="/" className="text-blue-600 hover:underline">
            Home
          </Link>
        </li>
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;

          return (
            <li key={name} className="flex items-center">
              <span className="mx-2 text-gray-500">›</span>
              {isLast ? (
                <span className="text-gray-700 capitalize">
                  {name.replace("-", " ")}
                </span>
              ) : (
                <Link
                  to={routeTo}
                  className="text-blue-600 hover:underline capitalize"
                >
                  {name.replace("-", " ")}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Breadcrumb;
