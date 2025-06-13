import React, { useEffect, useState } from "react";
import LanguageCard from "./LanguageCard";

const Language = () => {
  const [language, setLanguage] = useState([]);

  useEffect(() => {
    fetch("/languages.json")
      .then((data) => data.json())
      .then((result) => setLanguage(result));
  }, []);

  return (
    <div>
      <h1>this is language</h1>
      <div className="grid grid-cols-3 gap-5">
        {language.map((lang) => (
          <LanguageCard key={lang.id} lang={lang}></LanguageCard>
        ))}
      </div>
    </div>
  );
};

export default Language;
