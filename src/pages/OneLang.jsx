import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import TutorCard from "../components/card/tutorCard";

const OneLang = () => {
  const [lang, setLang] = useState([]);

  const data = useLoaderData();
  useEffect(() => {
    setLang(data.data); // only update state once after component mounts
  }, [data]);

  return (
    <div className="py-10 w-11/12 mx-auto">
      {lang.map((tutor) => (
        <TutorCard key={tutor._id} tutor={tutor}></TutorCard>
      ))}
    </div>
  );
};

export default OneLang;
