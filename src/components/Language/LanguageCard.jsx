import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router";

const LanguageCard = ({ lang }) => {
  return (
    <Link
      to={`/oneLang/${lang.name}`}
      className="p-5 border flex justify-between items-center"
    >
      <div>
        <h4>{lang.name}</h4>
        <img src={lang.logo} alt="" width={50} />
      </div>
      <FaArrowRight />
    </Link>
  );
};

export default LanguageCard;
