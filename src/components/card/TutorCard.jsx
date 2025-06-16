import React from "react";
import { NavLink } from "react-router";

const TutorCard = ({ tutor }) => {
  const { _id, name, language, review, description, image } = tutor;

  return (
    <div className="m-5 bg-blue-800 dark:bg-gray-700 p-5 sm:flex gap-5 text-white">
      <div className="w-[200px]">
        <img src={image} alt="" className="w-[200px] h-[200px] object-cover" />
      </div>
      <div className="flex-1">
        <h1 className="font-medium text-xl pt-2">{name}</h1>
        <p className="py-2">{language}</p>
        <p>Review: {review}</p>
        <p className="py-3">{description}</p>
        <NavLink
          className="border px-5 py-2 hover:bg-white hover:text-blue-600"
          to={`/tutor/${_id}`}
        >
          Details
        </NavLink>
      </div>
    </div>
  );
};

export default TutorCard;
