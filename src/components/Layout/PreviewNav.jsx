import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const PreviewNav = () => {
  const userData = useSelector((state) => state.isLoggedUser.user);

  const handelCopyShareLink = () => {
    navigator.clipboard.writeText(
     `https://link-sharing-app-eb.vercel.app/profile/${userData._id}`
    );
    toast.success("Link Copied", {
      position: "top-right",
      autoClose: 5000,
      closeOnClick: true,
      theme: "light",
    });
  };
  return (
    <nav className="absolute top-6 left-1/2 -translate-x-1/2 w-[95%] z-50 p-6 bg-white rounded-xl flex justify-between items-center">
      <Link
        to="/"
        className="inline-block font-sans font-semibold text-brand border border-brand px-6 py-2 rounded-lg"
      >
        Back to Editor
      </Link>
      <ToastContainer />
      <button
        onClick={handelCopyShareLink}
        className="inline-block rounded-md bg-brand px-6 py-2 text-xs font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Share Link
      </button>
    </nav>
  );
};

export default PreviewNav;
