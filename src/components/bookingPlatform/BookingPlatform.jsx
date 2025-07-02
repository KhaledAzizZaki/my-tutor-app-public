import React from "react";
import { Fade } from "react-awesome-reveal";
import { FaArrowRight } from "react-icons/fa";
import {
  MdOutlineBookOnline,
  MdOutlinePayments,
  MdOutlineVerified,
} from "react-icons/md";

const BookingPlatform = () => {
  return (
    <div className="w-11/12 mx-auto px-10 bg-white dark:bg-gray-800 my-28 py-20">
      <Fade direction="right" triggerOnce>
        <h4 className="font-bold text-4xl max-w-[700px] pb-10">
          Discover Seamless Learning with Our Innovative Online Tutor Booking
          Platform
        </h4>
      </Fade>
      <div className="py-5 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        <Fade cascade direction="up" triggerOnce>
          {/*  */}
          <div className="bg-blue-800 p-10 text-white dark:bg-gray-600">
            <MdOutlineBookOnline size={30} />
            <h5 className="py-8 font-bold text-2xl">
              Experience the Future of Tutoring with Our User-Friendly Features
            </h5>
            <p>
              Easily book sessions with qualified tutors at your convenience.
            </p>
            <div className="flex items-center gap-2 pt-8">
              <p>Learn More</p>
              <FaArrowRight />
            </div>
          </div>
          {/*  */}
          <div className="bg-blue-800 p-10 text-white dark:bg-gray-600">
            <MdOutlineVerified size={30} />
            <h5 className="py-8 font-bold text-2xl">
              Connect with Verified Tutors for Quality Learning Experiences
            </h5>
            <p>
              All tutors are thoroughly vetted to ensure a high standard of
              education.
            </p>
            <div className="flex items-center gap-2 pt-8">
              <p>Sign Up</p>
              <FaArrowRight />
            </div>
          </div>
          {/*  */}
          <div className="bg-blue-800 p-10 text-white dark:bg-gray-600">
            <MdOutlinePayments size={30} />
            <h5 className="py-8 font-bold text-2xl">
              Secure Payments for Peace of Mind in Every Transaction
            </h5>
            <p>
              Enjoy safe and reliable payment options for your tutoring
              sessions.
            </p>
            <div className="flex items-center gap-2 pt-8">
              <p>Join Us</p>
              <FaArrowRight />
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default BookingPlatform;
