import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router";

const LanguageCard = ({ lang }) => {
  return (
    <Link
      to={`/oneLang/${lang.name}`}
      className="px-5 py-10 flex justify-between items-center bg-white dark:bg-gray-600"
    >
      <div className="flex gap-5 items-center">
        <img src={lang.logo} alt="" width={80} className="p-3 bg-white" />
        <h4>{lang.name}</h4>
      </div>
      <FaArrowRight />
    </Link>
  );
};

export default LanguageCard;
