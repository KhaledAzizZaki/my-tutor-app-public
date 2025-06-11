import React from "react";
import { useLoaderData } from "react-router";
import BookedTutorCard from "../components/card/BookedTutorCard";

const MyBookedTutors = () => {
  const data = useLoaderData();
  const tutors = data.data;

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
