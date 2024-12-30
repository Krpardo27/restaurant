import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { RiMenu2Line, RiCloseLine } from "react-icons/ri";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="relative">
      <div className="lg:hidden flex items-center justify-between p-4">
        <button onClick={handleClick} className="text-white text-[18px]">
          <RiMenu2Line className="w-[25px] h-[25px]" />
        </button>
      </div>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40"></div>
      )}
      <div
        className={`fixed top-0 left-0 h-full bg-gray-800 transition-transform duration-300 ease-in-out ${
          isOpen ? "transform translate-x-0" : "transform -translate-x-full"
        } lg:hidden w-64 p-4 z-50`}
      >
        <div className="p-4">
          <button onClick={handleClick} className="text-white text-[18px] mb-4">
            <RiCloseLine className="w-[30px] h-[30px]" />
          </button>
          <Link
            to="/"
            className="text-white text-[18px] my-2 block"
            onClick={handleLinkClick}
          >
            Home
          </Link>
          <Link
            to="/About"
            className="text-white text-[18px] my-2 block"
            onClick={handleLinkClick}
          >
            About
          </Link>
          <Link
            to="/Contact"
            className="text-white text-[18px] my-2 block"
            onClick={handleLinkClick}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default MobileNav;
