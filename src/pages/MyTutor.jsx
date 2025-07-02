import { FileSliders, Trash2 } from "lucide-react";
import React, { use, useEffect, useState } from "react";
import { Link } from "react-router";
import Swal from "sweetalert2";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { AuthContext } from "../provider/AuthContext";

const MyTutor = () => {
  // const data = useLoaderData();
  const { user } = use(AuthContext);
  const [myTutor, setMyTutor] = useState([]);

  const axiosSecure = useAxiosSecure();

  //
  useEffect(() => {
    axiosSecure.get(`/my-tutor/${user.email}`).then((result) => {
      setMyTutor(result.data);
    });
  }, [axiosSecure, user.email]);

  // console.log(myTutor);

  const handleDelete = (id) => {
    // console.log(id);

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
    <div className="my-20 bg-blue-800 dark:bg-gray-800 w-11/12 mx-auto text-white p-10">
      <div className="text-center">
        <h1 className="text-4xl font-bold">My Tutor</h1>
        <p className="py-5">
          Easily manage the tutors you've connected with. View their profiles,
          track your sessions, and continue learning with the instructors who
          match your goals and style.
        </p>
      </div>

      {/*  */}
      <div className="pt-3">
        <div className="overflow-x-auto">
          <table className="table ">
            {/* head */}
            <thead>
              <tr>
                <th className="text-white">Image</th>
                <th className="text-white">Language</th>
                <th className="text-white">Description</th>
                <th className="text-white">Price</th>
                <th className="text-white">Review</th>
                <th className="text-white">Auction</th>
              </tr>
            </thead>
            <tbody>
              {myTutor.map((tutor) => (
                <tr key={tutor._id}>
                  <td>
                    <img
                      src={tutor.image}
                      alt=""
                      className="w-24 h-24 object-cover rounded"
                    />
                  </td>
                  <td>{tutor.language}</td>
                  <td>{tutor.description}</td>
                  <td>{tutor.price}</td>
                  <td>{tutor.review}</td>
                  <td>
                    <div className="flex justify-center items-center gap-3">
                      <Link to={`/updateTutor/${tutor._id}`}>
                        <FileSliders className="cursor-pointer hover:text-green-400" />
                      </Link>
                      <button onClick={() => handleDelete(tutor._id)}>
                        <Trash2 className="cursor-pointer hover:text-red-400" />
                      </button>
                    </div>
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
