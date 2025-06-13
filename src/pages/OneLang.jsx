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
    <div>
      <h1>this is one language</h1>
      {lang.map((tutor) => (
        <TutorCard key={tutor._id} tutor={tutor}></TutorCard>
      ))}
    </div>
  );
};

export default OneLang;
