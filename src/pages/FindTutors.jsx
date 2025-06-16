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
    <div className="py-10 w-11/12 mx-auto bg-white dark:bg-gray-800 my-10">
      <div className="text-center px-10">
        <h4 className="font-bold text-4xl pb-5">Find Tutors</h4>
        <p>
          Discover the perfect tutor for your learning needs. Browse qualified
          language instructors, compare their experience, teaching styles, and
          reviews to find your ideal match.
        </p>
      </div>
      <div className="p-10">
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          name="search"
          placeholder="search"
          className="input input-bordered w-full dark:bg-gray-700"
          required
        />
      </div>

      <div>
        {tutors.map((tutor) => (
          <TutorCard key={tutor._id} tutor={tutor}></TutorCard>
        ))}
      </div>
    </div>
  );
};

export default FindTutors;
