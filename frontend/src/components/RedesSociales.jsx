import React from "react";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

const RedesSociales = () => {
  return (
    <div className="flex gap-5">
      <a href="" className="text-white">
        <FaTiktok />
      </a>
      <a href="" className="text-white">
        <FaInstagram />
      </a>
      <a href="" className="text-white">
        <FaFacebookF />
      </a>
    </div>
  );
};

export default RedesSociales;
