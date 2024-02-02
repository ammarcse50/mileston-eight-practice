import React from "react";
import PropTypes from "prop-types";

const Navbar = () => {
  const routesData = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "About Us",
      path: "/about",
    },
    {
      id: 3,
      name: "Services",
      path: "/services",
    },
    {
      id: 4,
      name: "Contact",
      path: "/contact",
    },
    {
      id: 5,
      name: "404 Not Found",
      path: "*",
    },
  ];

  return (
    <div>
      <ul>
        {routesData.map((route) => (
          <li key={route.id}>
            <a href={route.path}>{route.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Navbar.propTypes = {
//   routes: propTypes.array,
// };

export default Navbar;
