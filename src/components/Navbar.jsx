import { Link } from "react-router-dom"
import Button from "./Button"
import { useState } from "react"
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {

  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };
  return (
    <div className="z-10 relative w-full">
      <div>
        <div className=" flex flex-row justify-between p-5 md:px-32 px-5 bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
          <div className=" flex flex-row items-center cursor-pointer">

            <h1 className=" text-xl font-semibold">Nakinsige Holdings</h1>
          </div>

          <ul className="hidden md:flex flex-row items-center text-lg font-medium gap-8">
            <li>
              <Link
                to="/"
                className="hover:text-[#28406D] transition-all cursor-pointer"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/research"
                className="hover:text-[#28406D] transition-all cursor-pointer"
              >
                Research and Publications
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-[#28406D] transition-all cursor-pointer"
              >
                About
              </Link></li>
            <li>
              <Link
                to="/news"
                className="hover:text-[#28406D] transition-all cursor-pointer"
              >
                In the News
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className=" bg-[#28406D]  font-bold text-2xl my-auto mx-auto p-3 text-white capitalize"
              >
                Book Free Consultation
              </Link>

            </li>

          </ul>

          <div className="md:hidden flex items-center">
            {menu ? (
              <AiOutlineClose size={25} onClick={handleChange} />
            ) : (
              <AiOutlineMenuUnfold size={25} onClick={handleChange} />
            )}
          </div>
        </div>
        <div
          className="lg:hidden flex flex-col absolute bg-black text-white left-0 top-20 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}
        ">
          <Link
            to="/home"
            className="hover:text-brightColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            to="/research"
            className="hover:text-brightColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Research and Publications
          </Link>
          <Link
            to="/about"
            className="hover:text-brightColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            About
          </Link>
          <Link
            to="/news"
            className="hover:text-brightColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            In the News
          </Link>
          <Link
            to="/contact"
            className=" hover:text-brightColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Book Free Consultation
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
