import React from "react";
import { Fade } from "react-awesome-reveal";

const Hero = () => {
  return (
    <div className="w-11/12 mx-auto grid md:grid-cols-2 bg-white mt-10 dark:bg-gray-800">
      <div className="p-10 flex flex-col justify-center">
        <Fade triggerOnce cascade damping={0.5} direction="up">
          <h4 className="font-black text-6xl">
            Unlock Your Learning Potential with{" "}
            <span className="text-blue-700">Expert Tutors</span>
          </h4>
          <p className="my-10 max-w-[600px] border-l-4 border-blue-700 pl-5">
            Our platform connects you with skilled tutors across various
            subjects and languages. Experience seamless booking, detailed
            profiles, and personalized learning tailored to your needs.
          </p>
          <div>
            <button className="px-5 py-2 mr-4 bg-blue-700 text-white hover:bg-white hover:text-blue-600 hover:border">
              Find
            </button>
            <button className="border border-blue-500 px-5 py-2 text-blue-500 hover:bg-blue-800 hover:text-white">
              Learn More
            </button>
          </div>
        </Fade>
      </div>
      <div>
        <img
          className=" p-10"
          src="https://i.ibb.co/C5xB4wYd/Gemini-Generated-Image-wd4juxwd4juxwd4j.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
