import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="text-6xl font-bold text-red-500">Something went wrong!</h1>
      <div className="mt-6">
        <Link
          to="/"
          className="bg-brand px-4 py-2 rounded-md text-white mt-10 inline-block"
        >
          Go to Home page
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
