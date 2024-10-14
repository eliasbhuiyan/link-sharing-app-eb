import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaYoutube,
  FaArrowRight,
} from "react-icons/fa6";

const icons = {
  Github: {
    icon: <FaGithub />,
    color: "black",
  },
  LinkedIn: {
    icon: <FaLinkedin />,
    color: "blue",
  },
  Youtube: {
    icon: <FaYoutube />,
    color: "red",
  },
  Facebook: {
    icon: <FaFacebook />,
    color: "blue",
  },
};
const MobilePreview = () => {
  const userData = useSelector((state) => state.isLoggedUser.user);
  return (
    <div className="hidden md:flex w-1/2 h-full sticky top-0 left-0 py-6 bg-white items-center justify-center rounded-xl">
      <div className="w-2/5 relative">
        <img src="/mobile.png" alt="mobileframe" className="w-full" />
        <div className="w-full h-full absolute top-0 left-0 flex flex-col items-center pt-20">
          <div className="w-24 h-24 rounded-full bg-gray-300 overflow-hidden">
            {userData?.avatar && (
              <img src={userData?.avatar} alt="profile" className="w-full" />
            )}
          </div>
          {userData?.fullName ? (
            <p className="font-bold text-primary mt-4 mb-2">
              {userData?.fullName}
            </p>
          ) : (
            <div className="w-3/5 h-4 bg-slate-200 rounded animate-pulse mt-4 mb-2"></div>
          )}
          <p className="text-primary text-xs">{userData?.email}</p>
          <div className="w-4/5 h-auto mt-10 flex flex-col gap-3">
            {userData?.links.length > 0 ? (
              userData?.links.map((item) => (
                <Link
                  key={item._id}
                  to={item?.url}
                  target="_blank"
                  style={{ backgroundColor: icons[item?.option].color }}
                  className="px-4 py-2 pl-10 rounded-lg flex items-center justify-between relative"
                >
                  <p className="text-white font-sans">{item?.option}</p>
                  <FaArrowRight className="text-white text-sm" />
                  <div className="absolute top-1/2 -translate-y-1/2 left-3 text-white">
                    {icons[item?.option].icon}
                  </div>
                </Link>
              ))
            ) : (
              <>
                <div className="h-10 bg-slate-200 rounded animate-pulse"></div>
                <div className="h-10 bg-slate-200 rounded animate-pulse"></div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobilePreview;
