import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Stats = () => {
  const [user, setUser] = useState([]);
  const [tutors, setTutors] = useState([]);
  const axiosSecure = useAxiosSecure();

  //
  useEffect(() => {
    axiosSecure.get(`/tutor`).then((result) => {
      setTutors(result.data);
    });

    axiosSecure.get(`/user`).then((result) => {
      setUser(result.data);
    });
  }, [axiosSecure]);

  //
  useEffect(() => {
    axiosSecure.get(`/user`).then((result) => {
      console.log(result.data);
    });
  }, [axiosSecure]);

  // console.log(tutors);
  const totalReview = tutors.reduce(
    (sum, tutor) => sum + Number(tutor.review || 0),
    0
  );

  //
  const uniqueLanguages = new Set(tutors.map((tutor) => tutor.language));
  const totalLanguages = uniqueLanguages.size;

  return (
    <div className="flex justify-center pt-10">
      <div className="border p-5 m-5">
        <h1 className="text-center font-black">{tutors.length}</h1>
        <p>Total Tutor</p>
      </div>
      <div className="border p-5 m-5">
        <h1 className="text-center font-black">{totalReview}</h1>
        <p>Total Review</p>
      </div>
      <div className="border p-5 m-5">
        <h1 className="text-center font-black">{totalLanguages}</h1>
        <p>Total Language</p>
      </div>
      <div className="border p-5 m-5">
        <h1 className="text-center font-black">{user.length}</h1>
        <p>Total User</p>
      </div>
    </div>
  );
};

export default Stats;
