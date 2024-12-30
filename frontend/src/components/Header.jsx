import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import MobileNav from "./MobileNav";
import RedesSociales from "./RedesSociales";
import { Link } from "react-router-dom";

const Header = () => {
  const [headerColor, setHeaderColor] = useState("bg-black");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setHeaderColor("bg-blue-500");
      } else {
        setHeaderColor("bg-black");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 w-full p-4 h-[90px] transition-colors duration-500 z-50 ${headerColor}`}
    >
      <div className="flex max-w-7xl items-center justify-between container mx-auto h-full flex-row-reverse lg:flex-row ">
        <div className="">
          <Link to="/">
            <img src="" alt="" className="w-[50px]" />
            <h1 className="text-white">Logo</h1>
          </Link>
        </div>
        <div className="">
          <Navbar />
          <MobileNav />
        </div>
        <div className="hidden lg:flex">
          <RedesSociales />
        </div>
      </div>
    </header>
  );
};

export default Header;
