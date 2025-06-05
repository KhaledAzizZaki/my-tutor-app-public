import React from "react";

const TutorCard = ({ tutor }) => {
  const { name, imgae, language, review, description } = tutor;

  return (
    <div className="m-5 border-2 rounded-md p-5">
      <h1>{name}</h1>
      <p>{language}</p>
      <p>{review}</p>
      <p>{description}</p>
    </div>
  );
};

export default TutorCard;
