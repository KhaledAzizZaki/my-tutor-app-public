import React, { use } from "react";
import { AuthContext } from "../provider/AuthContext";
import useAxiosSecure from "../hooks/useAxiosSecure";

const AddTutor = () => {
  const { user } = use(AuthContext);
  const axiosSecure = useAxiosSecure();

  //
  const handleAddTask = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const taskData = Object.fromEntries(formData.entries());
    taskData.review = 0;
    console.log(taskData);

    //
    axiosSecure.post(`/add-tutor`, taskData).then((data) => {
      console.log(data.data);
    });
  };

  //
  return (
    <div className="hero min-h-screen p-5">
      <div className="hero-content flex-col ">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Add New Tutor</h1>
          <p className="py-6 max-w-3xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
            voluptate velit consectetur ipsam doloremque at eius aperiam porro
            numquam est, itaque ad dolorem modi vero neque exercitationem libero
            quisquam temporibus!
          </p>
        </div>
        <div className="card w-full shrink-0 shadow-2xl">
          <div className="card-body p-10">
            <form onSubmit={handleAddTask} className="fieldset">
              {/* name */}
              <label className="label font-medium  text-[16px]">Name</label>
              <input
                type="text"
                className="input w-full  border-0 border-b-2  rounded-none focus:border-0  mb-5"
                placeholder="Name"
                name="name"
                defaultValue={user.displayName}
                readOnly
              />

              {/* email */}
              <label className="label font-medium  text-[16px]">Email</label>
              <input
                type="email"
                className="input w-full  border-0 border-b-2  rounded-none focus:border-0  mb-5"
                placeholder="Email"
                name="email"
                defaultValue={user.email}
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
              />

              {/* Language */}
              <label className="label font-medium  text-[16px]">Language</label>
              <input
                type="text"
                className="input w-full  border-0 border-b-2  rounded-none focus:border-0  mb-5"
                placeholder="Language"
                name="language"
                required
              />

              {/* Price */}
              <label className="label font-medium  text-[16px]">Price</label>
              <input
                type="text"
                className="input w-full  border-0 border-b-2  rounded-none focus:border-0  mb-5"
                placeholder="Price"
                name="price"
                required
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
              />

              <button className="btn border-0 mt-4">Add Task</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTutor;
