import React, { useEffect, useState } from "react";
import LanguageCard from "./LanguageCard";
import { Fade } from "react-awesome-reveal";

const Language = () => {
  const [language, setLanguage] = useState([]);

  useEffect(() => {
    fetch("/languages.json")
      .then((data) => data.json())
      .then((result) => setLanguage(result));
  }, []);

  return (
    <div className="bg-blue-800 dark:bg-gray-800">
      <div className="w-11/12 mx-auto py-10">
        <Fade direction="right" delay={10} triggerOnce>
          <h1 className="text-white font-bold text-3xl py-10 max-w-3xl">
            Explore Language Categories to Enhance Your Multilingual
            Communication and Learning Experience
          </h1>
        </Fade>
        <div className="grid md:grid-cols-3 grid-cols-2 gap-5 pb-10">
          {language.map((lang) => (
            <LanguageCard key={lang.id} lang={lang}></LanguageCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Language;
