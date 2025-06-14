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
      <div className="hero-content flex-col ">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Update Tutor</h1>
          <p className="py-6 max-w-3xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
            voluptate velit consectetur ipsam doloremque at eius aperiam porro
            numquam est, itaque ad dolorem modi vero neque exercitationem libero
            quisquam temporibus!
          </p>
        </div>
        <div className="card w-full shrink-0 shadow-2xl">
          <div className="card-body p-10">
            <form onSubmit={handleDeleteTutor} className="fieldset">
              {/* name */}
              <label className="label font-medium  text-[16px]">Name</label>
              <input
                type="text"
                className="input w-full  border-0 border-b-2  rounded-none focus:border-0  mb-5"
                placeholder="Name"
                name="name"
                defaultValue={name}
                readOnly
              />

              {/* email */}
              <label className="label font-medium  text-[16px]">Email</label>
              <input
                type="email"
                className="input w-full  border-0 border-b-2  rounded-none focus:border-0  mb-5"
                placeholder="Email"
                name="email"
                defaultValue={email}
                readOnly
              />

              {/* Image */}
              <label className="label font-medium  text-[16px]">Image</label>
              <input
                type="text"
                className="input w-full  border-0 border-b-2  rounded-none focus:border-0  mb-5"
                placeholder="Image"
                name="image"
                required
                defaultValue={image}
              />

              {/* Language */}
              <label className="label font-medium  text-[16px]">Language</label>
              <input
                type="text"
                className="input w-full  border-0 border-b-2  rounded-none focus:border-0  mb-5"
                placeholder="Language"
                name="language"
                required
                defaultValue={language}
              />

              {/* Price */}
              <label className="label font-medium  text-[16px]">Price</label>
              <input
                type="text"
                className="input w-full  border-0 border-b-2  rounded-none focus:border-0  mb-5"
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
                className="input w-full  border-0 border-b-2  rounded-none focus:border-0  mb-5"
                placeholder="Description"
                name="description"
                required
                defaultValue={description}
              />

              <button className="btn border-0 mt-4">Update Tutor</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateTutor;
