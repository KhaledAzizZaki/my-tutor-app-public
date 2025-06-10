import React from "react";
import { NavLink, useLoaderData } from "react-router";

const TutorDetails = () => {
  const data = useLoaderData();

  //   console.log(data.data);
  const { name, language, description, price, review } = data.data;

  return (
    <div className="m-5 border p-5">
      <h1>Name: {name}</h1>
      <p>{language}</p>
      <p>{description}</p>
      <p>{price}</p>
      <p>{review}</p>
      <NavLink className={"btn"}>Book Button</NavLink>
    </div>
  );
};

export default TutorDetails;
