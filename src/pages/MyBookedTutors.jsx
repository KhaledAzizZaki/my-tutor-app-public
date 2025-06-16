import React, { use, useEffect, useState } from "react";
import BookedTutorCard from "../components/card/BookedTutorCard";
import { AuthContext } from "../provider/AuthContext";
import useAxiosSecure from "../hooks/useAxiosSecure";

const MyBookedTutors = () => {
  const { user } = use(AuthContext);
  const [tutors, setTutors] = useState([]);
  const axiosSecure = useAxiosSecure();

  //
  useEffect(() => {
    axiosSecure.get(`/my-booked-tutor/${user.email}`).then((result) => {
      setTutors(result.data);
    });
  }, [axiosSecure, user]);

  return (
    <div className="bg-white w-11/12 mx-auto my-10 p-10  dark:bg-gray-800">
      <div className="text-center ">
        <h1 className="font-bold text-4xl pb-5">My Booked Tutors</h1>
        <p>
          Review and manage your upcoming tutoring sessions. Access tutor
          details, session times, and stay organized with all your booked
          lessons in one place.
        </p>
      </div>
      <div>
        {tutors.map((tutor) => (
          <BookedTutorCard key={tutor._id} tutor={tutor}></BookedTutorCard>
        ))}
      </div>
    </div>
  );
};

export default MyBookedTutors;
