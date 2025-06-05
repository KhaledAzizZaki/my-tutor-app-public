import axios from "axios";
import React, { useEffect, useState } from "react";
import TutorCard from "../components/card/tutorCard";

const FindTutors = () => {
  const [tutors, setTutors] = useState([]);

  //
  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/tutor`).then((result) => {
      setTutors(result.data);
    });
  }, []);

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
