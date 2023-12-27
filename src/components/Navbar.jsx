import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="relative z-10 flex justify-evenly items-center h-24  mx-24  ">
      <h1 className="w-[300px] text-3xl font-bold text-white">
        Nakinsige Holdings
      </h1>
        <nav className="hidden md:flex flex-row items-center text-2xl gap-8">
        <Link
              to="/"
              className="text-white  p-4 cursor-pointer hover:text-[#28406D]"
            >
              Home
            </Link>
        <Link
              to="/research"
              className="text-white  p-4 cursor-pointer hover:text-[#28406D]"
            >
              Research and Publications
            </Link>
        <Link
              to="/news"
              className="text-white  p-4 cursor-pointer hover:text-[#28406D]"
            >
              In the News
            </Link>
        <Link
              to="/about"
              className="text-white  p-4 cursor-pointer hover:text-[#28406D]"
            >
              About Us
            </Link>
        <Link
              to="contact"
              className="text-white  p-4 cursor-pointer hover:text-[#28406D]"
            >
              Contact Us
            </Link>
        </nav>

      <button className="bg-[#28406D]  font-bold text-2xl my-6 mx-auto p-3 text-white capitalize ">
        CALL (+256) 708 976 718
      </button>
    </div>
  );
};

export default Navbar;
