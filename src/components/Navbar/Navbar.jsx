import { useState } from "react";
import Link from "../Link/Link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [open, setOpen] = useState(false);

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
    <nav className="bg-yellow-200 text-black p-6">
      <div className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
        {open === true ? (
          <AiOutlineClose></AiOutlineClose>
        ) : (
          <AiOutlineMenu></AiOutlineMenu>
        )}
      </div>

      <ul
        className={`md:flex p-6 duration-1000 ${
          open ? "top-16" : "-top-64"
        } bg-yellow-200 absolute md:static`}
      >
        {routesData.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

// Navbar.propTypes = {
//   routes: propTypes.array,
// };

export default Navbar;
