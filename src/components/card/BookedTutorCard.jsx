import React from "react";

const BookedTutorCard = ({ tutor }) => {
  //   console.log(tutor);
  const { name, language, price } = tutor;

  return (
    <div className="m-5 border p-5">
      <h1>{name}</h1>
      <h1>{language}</h1>
      <h1>{price}</h1>
    </div>
  );
};

export default BookedTutorCard;
