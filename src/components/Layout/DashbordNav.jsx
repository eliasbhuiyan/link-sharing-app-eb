import { Link, useLocation } from "react-router-dom";
import { FaLink } from "react-icons/fa6";
import { FaRegUserCircle } from "react-icons/fa";
import { RiLinksFill } from "react-icons/ri";
import { FaRegEye } from "react-icons/fa";

const DashbordNav = () => {
  const path = useLocation().pathname;
  return (
    <nav className="p-6 bg-white rounded-xl flex justify-between">
      <Link to="/" className="flex items-center gap-2">
        <RiLinksFill className=" bg-brand py-1.5 h-8 w-8 font-extrabold rounded-lg text-white" />
        <span className="text-2xl font-extrabold text-primary hidden sm:block">
          devLinks
        </span>
      </Link>
      <ul className="flex items-center md:gap-6 text-secondary font-sans font-semibold">
        <li>
          <Link
            to="/"
            className={`px-6 py-2 flex items-center gap-2 ${
              path === "/" ? "bg-[#e4e0fd] text-brand" : ""
            } rounded-lg`}
          >
            <FaLink />
            <span className="hidden sm:block">Links</span>
          </Link>
        </li>
        <li>
          <Link
            to="/profiledetails"
            className={`px-6 py-2 flex items-center gap-2 ${
              path === "/profiledetails" ? "bg-[#e4e0fd] text-brand" : ""
            } rounded-lg`}
          >
            <FaRegUserCircle />
            <span className="hidden sm:block">Profile Details</span>
          </Link>
        </li>
      </ul>
      <Link
        to="/preview"
        className="font-sans font-semibold text-brand border border-brand hover:bg-brand hover:text-white transition-all px-6 py-2 rounded-lg"
      >
        <FaRegEye className="block sm:hidden" />
        <span className="hidden sm:block">Preview</span>
      </Link>
    </nav>
  );
};

export default DashbordNav;
