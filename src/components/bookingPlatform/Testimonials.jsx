import React from "react";
import { FaStar } from "react-icons/fa";

const Testimonials = () => {
  return (
    <div className="w-11/12 mx-auto bg-white dark:bg-gray-800 my-28 p-10 py-20">
      <h1 className="font-bold text-4xl">Customer Testimonials</h1>
      <p className="pt-5">This platform transformed my learning experience!</p>
      <div className=" my-10 grid md:grid-cols-2 gap-5">
        <div className="p-10 border">
          <div className=" flex">
            <FaStar size={30} />
            <FaStar size={30} />
            <FaStar size={30} />
            <FaStar size={30} />
            <FaStar size={30} />
          </div>
          <h4 className="font-bold py-5 text-2xl">
            "The tutors are exceptional and incredibly supportive!"
          </h4>
          <div className="flex items-center gap-5">
            <img
              src="https://i.ibb.co/2YMkrnJY/olorunyomi-solomon-fkryc-VUdt-Nc-unsplash.jpg"
              alt=""
              className="size-25 object-cover"
            />
            <div>
              <h6 className="font-bold">Alice Johnson</h6>
              <p>Student, University</p>
            </div>
          </div>
        </div>
        <div className="p-10 border">
          <div className=" flex">
            <FaStar size={30} />
            <FaStar size={30} />
            <FaStar size={30} />
            <FaStar size={30} />
            <FaStar size={30} />
          </div>
          <h4 className="font-bold py-5 text-2xl">
            "Booking a session was so easy and quick!"
          </h4>
          <div className="flex items-center gap-5">
            <img
              src="https://i.ibb.co/VpCHgjrx/muhammad-faiz-zulkeflee-qj-Ijj-AV4j7-E-unsplash.jpg"
              alt=""
              className="size-25 object-cover"
            />
            <div>
              <h6 className="font-bold">Olivia</h6>
              <p>Parent, High School</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
