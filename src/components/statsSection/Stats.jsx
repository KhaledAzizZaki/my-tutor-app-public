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
  }, [axiosSecure]);

  //
  useEffect(() => {
    axiosSecure.get(`/user`).then((result) => {
      setUser(result.data);
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
    <div className="grid md:grid-cols-4 grid-cols-2 w-11/12 mx-auto py-10 text-center text-gray-200 gap-5">
      <div className="bg-blue-800 shadow-xl flex flex-col items-center justify-center p-10">
        <h1 className=" font-black text-3xl">{tutors.length}</h1>
        <p>Total Tutor</p>
      </div>
      <div className="bg-orange-700 shadow-xl flex flex-col items-center justify-center p-10">
        <h1 className="font-black text-3xl">{totalReview}</h1>
        <p>Total Review</p>
      </div>
      <div className="bg-green-700 shadow-xl flex flex-col items-center justify-center p-10">
        <h1 className="font-black text-3xl">{totalLanguages}</h1>
        <p>Total Language</p>
      </div>
      <div className="bg-gray-800 shadow-xl flex flex-col items-center justify-center p-10">
        <h1 className="font-black text-3xl">{user.length}</h1>
        <p>Total User</p>
      </div>
    </div>
  );
};

export default Stats;
