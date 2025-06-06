import React, { useEffect, useState } from "react";
import TutorCard from "../components/card/tutorCard";
import useAxiosSecure from "../hooks/useAxiosSecure";

const FindTutors = () => {
  const [tutors, setTutors] = useState([]);
  const axiosSecure = useAxiosSecure();

  //
  useEffect(() => {
    axiosSecure.get(`/tutor`).then((result) => {
      setTutors(result.data);
    });
  }, [axiosSecure]);

  console.log(tutors);
  //
  return (
    <div>
      <h4>length: {tutors.length}</h4>
      <div>
        {tutors.map((tutor) => (
          <TutorCard key={tutor._id} tutor={tutor}></TutorCard>
        ))}
      </div>
    </div>
  );
};

export default FindTutors;
