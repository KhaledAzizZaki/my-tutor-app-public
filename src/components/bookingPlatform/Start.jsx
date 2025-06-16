import React from "react";

const Start = () => {
  return (
    <div
      className="bg-white dark:bg-gray-800 mb-20  bg-cover bg-no-repeat w-full"
      style={{
        backgroundImage: `url("https://i.ibb.co/bMcDCcZp/Screenshot-2025-06-16-at-5-40-50-PM.png")`,
      }}
    >
      <div className="w-11/12 mx-auto py-20 md:flex justify-between">
        <div className="text-black">
          <h4 className="text-3xl font-bold pb-5">
            Start Your Learning Journey Today
          </h4>
          <p className="pb-5">
            Connect with expert tutors and enhance your skills.
          </p>
        </div>
        <div>
          <button className="px-5 py-2 mr-4 bg-blue-700 text-white hover:bg-white hover:text-blue-600 hover:border">
            Sign Up
          </button>
          <button className="border border-blue-500 px-5 py-2 text-blue-500 hover:bg-blue-600 hover:text-white">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Start;
