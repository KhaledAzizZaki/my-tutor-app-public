import React, { use, useEffect, useState } from "react";
import { NavLink, useParams } from "react-router";
import { AuthContext } from "../provider/AuthContext";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { Bounce, toast } from "react-toastify";

const TutorDetails = () => {
  const [data, setData] = useState([]);
  const { user } = use(AuthContext);
  const axiosSecure = useAxiosSecure();

  const { id } = useParams();
  // console.log(id);

  //
  useEffect(() => {
    axiosSecure.get(`/tutor/${id}`).then((result) => {
      setData(result.data);
    });
  }, [axiosSecure, id]);

  //   console.log(data.data);
  const { _id, name, language, description, price, review, image, email } =
    data;

  const handleBooking = () => {
    if (user.email === email) {
      return toast.warn("You added this tutor", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }

    const bookingData = {
      tutorId: _id,
      image: image,
      language: language,
      price: price,
      tutorEmail: email,
      email: user.email,
    };
    // console.log(bookingData);

    axiosSecure.post("/booking", bookingData).then((data) => {
      //   console.log(data.data);
      if (data.data.insertedId) {
        toast.success("Booking successful", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      } else {
        toast.info("You Already booked", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      }
    });
  };

  return (
    <div className="m-5 bg-blue-800 dark:bg-gray-800 p-10  text-white my-10 w-11/12 mx-auto">
      <div className="sm:flex  gap-5">
        <div>
          <img
            src={image}
            alt=""
            className="h-[300px] w-[300px] object-cover"
          />
        </div>
        <div className="flex-1 pt-3">
          <h1 className="font-medium text-2xl">Name: {name}</h1>
          <p className="py-5">Language: {language}</p>
        </div>
      </div>
      <div className="pt-10">
        <p>Description: {description}</p>
        <p className="py-5">Price: {price} $</p>
        <p className="pb-5 font-medium">Review: {review}</p>
        <NavLink
          onClick={handleBooking}
          className={"border px-5 py-2 hover:bg-white hover:text-blue-600"}
        >
          Book Now
        </NavLink>
      </div>
    </div>
  );
};

export default TutorDetails;
