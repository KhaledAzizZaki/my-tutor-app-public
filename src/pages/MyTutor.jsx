import React from "react";
import { useLoaderData } from "react-router";

const MyTutor = () => {
  const data = useLoaderData();
  const myTutor = data.data;

  //   console.log(data.data);

  return (
    <div>
      <h1>This is my tutor</h1>

      {/*  */}
      <div>
        Add commentMore actions
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Image</th>
                <th>Language</th>
                <th>Description</th>
                <th>Price</th>
                <th>Review</th>
                <th>Auction</th>
              </tr>
            </thead>
            <tbody>
              {myTutor.map((tutor) => (
                <tr key={tutor._id}>
                  <td>{tutor.image}</td>
                  <td>{tutor.language}</td>
                  <td>{tutor.description}</td>
                  <td>{tutor.price}</td>
                  <td>{tutor.review}</td>
                  <td className="flex flex-wrap items-center gap-2"></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyTutor;
