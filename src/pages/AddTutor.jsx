import React, { use } from "react";
import { AuthContext } from "../provider/AuthContext";
import useAxiosSecure from "../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const AddTutor = () => {
  const { user } = use(AuthContext);
  const axiosSecure = useAxiosSecure();

  //
  const handleAddTutor = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const taskData = Object.fromEntries(formData.entries());
    taskData.review = 0;
    // console.log(taskData);

    const language = e.target.language.value;
    const upLanguage = language.charAt(0).toUpperCase() + language.slice(1);
    // console.log(upLanguage);

    taskData.language = upLanguage;
    //
    axiosSecure.post(`/add-tutor`, taskData).then((data) => {
      // console.log(data.data);
      if (data.data.insertedId) {
        e.target.reset();

        Swal.fire({
          icon: "success",
          title: "Add Tutor",
          text: "Tutor added successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  //
  return (
    <div className="hero min-h-screen p-5">
      <div className="hero-content flex-col ">
        <div className="card w-full shrink-0 shadow-2xl">
          <div className="card-body p-10 bg-white dark:bg-gray-800">
            <form onSubmit={handleAddTutor} className="fieldset">
              <h1 className="text-5xl font-bold max-w-3xl text-center p-10 text-blue-600">
                Add New Tutor
              </h1>
              <div className="sm:flex gap-10 py-10">
                {/* name */}
                <div>
                  <label className="label font-medium  text-[16px]">Name</label>
                  <input
                    type="text"
                    className="input w-full border-b-2  rounded-none focus:border-0 mt-3 dark:bg-gray-800"
                    placeholder="Name"
                    name="name"
                    defaultValue={user.displayName}
                    readOnly
                  />
                </div>

                {/* email */}
                <div>
                  <label className="label font-medium  text-[16px]">
                    Email
                  </label>
                  <input
                    type="email"
                    className="input w-full  rounded-none focus:border-0 mt-3 dark:bg-gray-800"
                    placeholder="Email"
                    name="email"
                    defaultValue={user.email}
                    readOnly
                  />
                </div>
              </div>

              {/* Image */}
              <label className="label font-medium  text-[16px]">Image</label>
              <input
                type="text"
                className="input w-full rounded-none focus:border-0 mt-3 dark:bg-gray-800"
                placeholder="Image URL"
                name="image"
                required
              />

              <div className="sm:flex gap-10 py-10">
                {/* Language */}
                <div>
                  <label className="label font-medium  text-[16px]">
                    Language
                  </label>
                  <input
                    type="text"
                    className="input w-full  rounded-none focus:border-0  mt-3 dark:bg-gray-800"
                    placeholder="Language"
                    name="language"
                    required
                  />
                </div>

                {/* Price */}
                <div>
                  <label className="label font-medium  text-[16px]">
                    Price
                  </label>
                  <input
                    type="text"
                    className="input w-full  rounded-none focus:border-0  mt-3 dark:bg-gray-800"
                    placeholder="Price"
                    name="price"
                    required
                  />
                </div>
              </div>

              {/* Description */}
              <label className="label font-medium  text-[16px]">
                Description
              </label>
              <input
                type="text"
                className="input w-full rounded-none focus:border-0 my-3 dark:bg-gray-800"
                placeholder="Description"
                name="description"
                required
              />

              <button className="btn border-0 mt-8 bg-blue-600 text-white shadow-none">
                Add Task
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTutor;
