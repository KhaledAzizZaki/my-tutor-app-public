import React from "react";

const Start = () => {
  return (
    <div className="bg-white dark:bg-gray-800 mb-20">
      <div className="w-11/12 mx-auto py-20 md:flex justify-between">
        <div>
          <h4 className="text-3xl font-bold pb-5">
            Start Your Learning Journey Today
          </h4>
          <p className="pb-5">
            Connect with expert tutors and enhance your skills.
          </p>
        </div>
        <div>
          <button className="px-5 py-2 mr-4 bg-blue-700 text-white">
            Sign Up
          </button>
          <button className="border border-blue-500 px-5 py-2 text-blue-500">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Start;
