import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Fade } from "react-awesome-reveal";

const Stats = () => {
  const [user, setUser] = useState([]);
  const [tutors, setTutors] = useState([]);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    axiosSecure.get(`/tutor`).then((result) => {
      if (Array.isArray(result.data)) {
        setTutors(result.data);
      } else {
        console.error("Expected tutor data as array:", result.data);
        setTutors([]);
      }
    });
  }, [axiosSecure]);

  useEffect(() => {
    axiosSecure.get(`/user`).then((result) => {
      if (Array.isArray(result.data)) {
        setUser(result.data);
      } else {
        console.error("Expected user data as array:", result.data);
        setUser([]);
      }
    });
  }, [axiosSecure]);

  const totalReview = (Array.isArray(tutors) ? tutors : []).reduce(
    (sum, tutor) => sum + Number(tutor.review || 0),
    0
  );

  const uniqueLanguages = new Set(
    (Array.isArray(tutors) ? tutors : [])
      .map((tutor) => tutor.language)
      .filter(Boolean)
  );
  const totalLanguages = uniqueLanguages.size;

  return (
    <div className="grid md:grid-cols-4 grid-cols-2 w-11/12 mx-auto py-20 text-center text-gray-200 gap-5">
      <Fade direction="up" triggerOnce>
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
      </Fade>
    </div>
  );
};

export default Stats;
