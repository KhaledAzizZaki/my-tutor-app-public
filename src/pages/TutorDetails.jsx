import React, { use } from "react";
import { NavLink, useLoaderData } from "react-router";
import { AuthContext } from "../provider/AuthContext";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { Bounce, toast } from "react-toastify";

const TutorDetails = () => {
  const data = useLoaderData();
  const { user } = use(AuthContext);
  const axiosSecure = useAxiosSecure();

  //   console.log(data.data);
  const { _id, name, language, description, price, review, image, email } =
    data.data;

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
        toast.info("Already booked", {
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
    <div className="m-5 border p-5">
      <h1>Name: {name}</h1>
      <p>{language}</p>
      <p>{description}</p>
      <p>{price}</p>
      <p>{review}</p>
      <NavLink onClick={handleBooking} className={"btn"}>
        Book Now
      </NavLink>
    </div>
  );
};

export default TutorDetails;
