import { FileSliders, Trash2 } from "lucide-react";
import React, { useState } from "react";
import { Link, useLoaderData } from "react-router";
import Swal from "sweetalert2";
import useAxiosSecure from "../hooks/useAxiosSecure";

const MyTutor = () => {
  const data = useLoaderData();
  const [myTutor, setMyTutor] = useState(data.data);

  const axiosSecure = useAxiosSecure();

  //   console.log(data.data);

  const handleDelete = (id) => {
    console.log(id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/delete-tutor/${id}`).then((data) => {
          if (data.data.deletedCount) {
            Swal.fire({
              title: "Deleted!",
              text: "Your tutor has been deleted.",
              icon: "success",
            });
            const remainingTutor = myTutor.filter((task) => task._id !== id);
            setMyTutor(remainingTutor);
          }
        });
      }
    });
  };

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
                  <td className="flex flex-wrap items-center gap-2">
                    <Link to={`/updateTutor/${tutor._id}`}>
                      <FileSliders />
                    </Link>
                    <Link onClick={() => handleDelete(tutor._id)}>
                      <Trash2 />
                    </Link>
                  </td>
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
