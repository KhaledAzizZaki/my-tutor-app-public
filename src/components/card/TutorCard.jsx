import React from "react";
import { NavLink } from "react-router";

const TutorCard = ({ tutor }) => {
  const { _id, name, language, review, description } = tutor;

  return (
    <div className="m-5 border-2 rounded-md p-5">
      <h1>{name}</h1>
      <p>{language}</p>
      <p>{review}</p>
      <p>{description}</p>
      <NavLink className="btn" to={`/tutor/${_id}`}>
        Details
      </NavLink>
    </div>
  );
};

export default TutorCard;
