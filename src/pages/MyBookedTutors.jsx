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
    <div>
      <h1>this is booked</h1>
      {tutors.map((tutor) => (
        <BookedTutorCard key={tutor._id} tutor={tutor}></BookedTutorCard>
      ))}
    </div>
  );
};

export default MyBookedTutors;
