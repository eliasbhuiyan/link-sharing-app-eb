import React from "react";
import PreviewNav from "../components/Layout/PreviewNav";
import { Link, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
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
const Preview = () => {
  const userData = useSelector((state) => state.isLoggedUser.user);

  if (!userData || !userData?.emailVerified) {
    return <Navigate to="/signin" />;
  }
  return (
    <>
      <PreviewNav />
      <section className="mb-8 relative after:absolute after:left-0 after:top-0 after:bg-brand after:w-full after:h-1/2 after:rounded-b-3xl after:-z-10 flex justify-center items-center">
        <div className="w-[300px] mt-60 shadow-2xl p-10 h-fit z-50 bg-white rounded-xl flex flex-col items-center">
          <div className="w-24 h-24 rounded-full bg-gray-300 overflow-hidden">
            {userData?.avatar && (
              <img src={userData?.avatar} alt="profile" className="w-full" />
            )}
          </div>
          {userData?.fullName ? (
            <p className="font-bold text-2xl text-primary mt-4 mb-2">
              {userData?.fullName}
            </p>
          ) : (
            <div className="w-3/5 h-4 bg-slate-200 rounded animate-pulse mt-4 mb-2"></div>
          )}
          <p className="text-primary ">{userData?.email}</p>
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
      </section>
    </>
  );
};

export default Preview;
