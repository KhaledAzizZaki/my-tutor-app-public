import React from "react";
import { FaArrowRight } from "react-icons/fa";

const EveryLearner = () => {
  return (
    <div className=" bg-blue-800 dark:bg-gray-800 text-center">
      <div className="w-11/12 mx-auto py-20 ">
        <h4 className="font-bold text-4xl max-w-[700px] py-10 text-center text-white mx-auto">
          Explore Our Diverse Range of Tutoring Services for Every Learner
        </h4>
        <div className="py-5 grid sm:grid-cols-2 xl:grid-cols-3 gap-10">
          {/* 1st */}
          <div className="bg-white  dark:text-white dark:bg-gray-600">
            <img
              src="https://i.ibb.co/G4mSZgZR/Screenshot-2025-06-16-at-12-31-05-PM.png"
              alt=""
            />
            <div className="p-10">
              <h5 className="py-8 font-bold text-2xl">
                Unlock Your Potential with Expert Tutors in Various Subjects
              </h5>
              <p>
                Our platform connects you with skilled tutors in languages and
                subjects.
              </p>
              <div className="flex items-center justify-center gap-2 pt-8">
                <p>Learn More</p>
                <FaArrowRight />
              </div>
            </div>
          </div>
          {/* 2nd */}
          <div className="bg-white  dark:text-white dark:bg-gray-600">
            <img
              src="https://i.ibb.co/NdT5gQXH/Screenshot-2025-06-16-at-12-29-58-PM.png"
              alt=""
            />
            <div className="p-10">
              <h5 className="py-8 font-bold text-2xl">
                Personalized Language Learning with Experienced Tutors at Your
                Fingertips
              </h5>
              <p>
                Choose from a variety of languages and enhance your
                communication skills.
              </p>
              <div className="flex items-center justify-center gap-2 pt-8">
                <p>Sign Up</p>
                <FaArrowRight />
              </div>
            </div>
          </div>
          {/* 3rd */}
          <div className="bg-white  dark:text-white dark:bg-gray-600">
            <img
              src="https://i.ibb.co/qFLZhjMv/Screenshot-2025-06-16-at-12-31-53-PM.png"
              alt=""
            />
            <div className="p-10">
              <h5 className="py-8 font-bold text-2xl">
                Academic Support Tailored to Your Needs with Qualified Educators
              </h5>
              <p>
                Get help in subjects ranging from math to science and beyond.
              </p>
              <div className="flex items-center justify-center gap-2 pt-8">
                <p>Learn More</p>
                <FaArrowRight />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EveryLearner;
