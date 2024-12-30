import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="">
      <ul className="lg:flex hidden items-center justify-between gap-5 w-full">
        <li>
          <Link to="/" className="text-white text-[18px]">
            Home
          </Link>
        </li>
        <li>
          <Link to="/About" className="text-white text-[18px]">
            About
          </Link>
        </li>
        <li>
          <Link to="/Contact" className="text-white text-[18px]">
            Contact
          </Link>
        </li>
        <li>
          <Link to="/Contact" className="text-white text-[18px]">
            Contact
          </Link>
        </li>
        <li>
          <Link to="/Contact" className="text-white text-[18px]">
            Contact
          </Link>
        </li>
        <li>
          <Link to="/Contact" className="text-white text-[18px]">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
