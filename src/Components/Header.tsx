import { useState } from "react";
import { Link } from "react-router-dom";
import ResponsiveNav from "./ResponsiveNav";
const Header = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const handleMobileNav = () => {
    setIsMobileNavOpen((prev) => !prev);
  };
  return (
    <header className="sticky pt-5 top-0 z-20">
      <div className="max-w-[800px] m-auto h-[52px] w-full md:rounded-[100px] md:border md:border-[rgba(229,231,235,0.2)] flex justify-between items-center px-6 py-2 md:shadow-sm md:backdrop-blur-lg md:bg-[#0a0c0f]/70">
        <div className="z-40">
          <Link to={"/"} className="text-[#e11d48]">
            Aman
          </Link>
        </div>
        {/* nav links */}
        <div className="hidden md:flex justify-center items-center gap-4 text-[#EDEDED] font-semibold ">
          <Link to={"#"} onClick={(e) => e.preventDefault()}>
            About
          </Link>
          <Link to={"#"} onClick={(e) => e.preventDefault()}>
            Uses
          </Link>
          <Link to={"#"} onClick={(e) => e.preventDefault()}>
            Post
          </Link>
          <Link to={"#"} onClick={(e) => e.preventDefault()}>
            Work
          </Link>
        </div>
        {/* contact button */}
        <div className="hidden md:block">
          <button className="bg-[#EDEDED] active:border-[#F97316] text-black font-semibold px-6 py-2 rounded-4xl">
            Contact
          </button>
        </div>
        {/* ham button */}
        <div className="md:hidden z-40">
          <button
            onClick={handleMobileNav}
            className="border border-[rgba(229,231,235,0.2)] p-2 rounded-full flex flex-col justify-center items-center gap-1.5 px-3 py-3 backdrop:blur-3xl "
          >
            <div
              className={`block h-[2px] w-5 bg-white rounded-full transition-transform duration-300 ease-in-out ${
                isMobileNavOpen ? "rotate-45 translate-y-1" : ""
              }`}
            ></div>
            <div
              className={`block h-[2px] bg-white rounded-full transition-transform duration-300 ease-in-out ${
                isMobileNavOpen
                  ? "-rotate-45 -translate-y-1 w-5"
                  : "w-3 self-start"
              }`}
            ></div>
          </button>
        </div>
      </div>
      <ResponsiveNav isMobileNavOpen={isMobileNavOpen} />
    </header>
  );
};

export default Header;
