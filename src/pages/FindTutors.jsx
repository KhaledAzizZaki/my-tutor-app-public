import React, { useEffect, useState } from "react";
import TutorCard from "../components/card/tutorCard";
import useAxiosSecure from "../hooks/useAxiosSecure";

const FindTutors = () => {
  const [tutors, setTutors] = useState([]);
  const [search, setSearch] = useState("");
  const axiosSecure = useAxiosSecure();

  //
  useEffect(() => {
    axiosSecure.get(`/tutor?searchParams=${search}`).then((result) => {
      setTutors(result.data);
    });
  }, [axiosSecure, search]);

  // console.log(search);
  //
  return (
    <div>
      <input
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        name="search"
        placeholder="search"
        className="input input-bordered w-full"
        required
      />

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
