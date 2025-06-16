import { Frown } from "lucide-react";
import React from "react";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="text-center flex flex-col justify-center items-center border h-screen bg-gray-200">
      <div className="">
        <Frown className="mx-auto text-gray-500" size={200} />
        <h2 className="text-7xl text-gray-500">404</h2>
        <p className="text-2xl py-3 text-gray-500">Page not found</p>
        <Link to="/" className="btn bg-blue-800 text-white  border-0">
          Go back to Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
