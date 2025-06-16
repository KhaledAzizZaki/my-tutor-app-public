import React from "react";

const Newsletter = () => {
  return (
    <div className="">
      <div className="w-11/12 mx-auto py-20 md:flex justify-between bg-white dark:bg-gray-800 mb-20 px-10 border-2">
        <div>
          <h4 className="text-3xl font-bold pb-5">
            Stay Updated with Our Newsletter
          </h4>
          <p className="pb-5">Get the latest news and exclusive offers!</p>
        </div>
        <div>
          <input
            type="text"
            placeholder="Your Email Here"
            className="border px-5 py-2 mr-4 "
          />
          <button className="px-5 py-2 bg-blue-700 text-white">
            Subscribe Now
          </button>
          <p className="text-[12px] pt-5">
            By clicking Subscribe Now, you agree to our Terms and Conditions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
