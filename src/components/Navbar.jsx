import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Button from "./Button"
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { FaBars, FaXmark } from "react-icons/fa6";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [isActive, setIsActive] = useState(false);

  // menu btn toggle
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  // navItems
  const navItems = [
    { path: "/", link: "Home" },
    { path: "/research", link: "Research" },
    { path: "/about", link: "About Us" },
    { path: "/news", link: "In the News" },
    { path: "/contact", link: "Contact Us" },
  ]

  // for modal for login button
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };
  return (
    <header className="fixed z-50  bg-black top-0 left-0 right-0 text-white">
      <nav className="px-4 max-w-7xl mx-auto flex justify-between items-center py-4">
        <a href="/" className="text-xl font-bold text-white">
          Nakinsige Holdings
        </a>
        {/* navitems */}
        <ul className="md:flex gap-12 text-lg hidden ">
          {
            navItems.map(({ link, path }) => <li className="text-white" key={path}>
              <NavLink to={path} className={({ isActive, isPending }) =>
                isActive
                  ? "active"
                  : isPending
                    ? "pending"
                    : ""
              }>{link}</NavLink>
            </li>)
          }
        </ul>

        {/* mobile menu */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="cursor-pointer">
            {isMenuOpen ? <FaXmark className="w-5 h-5" /> : <FaBars className="w-5 h-5" />}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
