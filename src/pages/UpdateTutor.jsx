import React from "react";
import { useLoaderData } from "react-router";
import useAxiosSecure from "../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const UpdateTutor = () => {
  const data = useLoaderData();
  const axiosSecure = useAxiosSecure();

  const { description, email, image, language, name, price, _id } = data.data;
  // console.log(data.data);

  const handleDeleteTutor = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const taskData = Object.fromEntries(formData.entries());
    // console.log(taskData);

    axiosSecure.put(`/update-tutor/${_id}`, taskData).then((data) => {
      //   console.log(data.data);
      if (data.data.modifiedCount) {
        Swal.fire({
          icon: "success",
          title: "Update Tutor",
          text: "Tutor updated successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  return (
    <div className="hero min-h-screen p-5">
      <div className="hero-content  flex-col ">
        <div className="text-center ">
          <h1 className="text-5xl font-bold text-blue-600">Update Tutor</h1>
          <p className="py-6 max-w-3xl">
            Edit and update tutor details quickly and efficiently. Modify a
            tutor's profile, teaching language, pricing, availability, and
            personal bio to keep the information accurate and up-to-date for
            learners.
          </p>
        </div>
        <div className="card w-full shrink-0 shadow-2xl bg-white dark:bg-gray-800">
          <div className="card-body p-10">
            <form onSubmit={handleDeleteTutor} className="fieldset">
              {/* name */}
              <label className="label font-medium  text-[16px]">Name</label>
              <input
                type="text"
                className="input w-full  border-0 border-b-2  rounded-none focus:border-0  mb-5 dark:bg-gray-800"
                placeholder="Name"
                name="name"
                defaultValue={name}
                readOnly
              />

              {/* email */}
              <label className="label font-medium  text-[16px]">Email</label>
              <input
                type="email"
                className="input w-full  border-0 border-b-2  rounded-none focus:border-0  mb-5 dark:bg-gray-800"
                placeholder="Email"
                name="email"
                defaultValue={email}
                readOnly
              />

              {/* Image */}
              <label className="label font-medium  text-[16px]">Image</label>
              <input
                type="text"
                className="input w-full  border-0 border-b-2  rounded-none focus:border-0  mb-5 dark:bg-gray-800"
                placeholder="Image"
                name="image"
                required
                defaultValue={image}
              />

              {/* Language */}
              <label className="label font-medium  text-[16px]">Language</label>
              <input
                type="text"
                className="input w-full  border-0 border-b-2  rounded-none focus:border-0  mb-5 dark:bg-gray-800"
                placeholder="Language"
                name="language"
                required
                defaultValue={language}
              />

              {/* Price */}
              <label className="label font-medium  text-[16px]">Price</label>
              <input
                type="text"
                className="input w-full  border-0 border-b-2  rounded-none focus:border-0  mb-5 dark:bg-gray-800"
                placeholder="Price"
                name="price"
                required
                defaultValue={price}
              />

              {/* Description */}
              <label className="label font-medium  text-[16px]">
                Description
              </label>
              <input
                type="text"
                className="input w-full  border-0 border-b-2  rounded-none focus:border-0  mb-5 dark:bg-gray-800"
                placeholder="Description"
                name="description"
                required
                defaultValue={description}
              />

              <button className="btn border-0 mt-4 bg-blue-600 shadow-none text-white">
                Update Tutor
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateTutor;
