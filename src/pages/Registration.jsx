import React, { use } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthContext";
import { Bounce, toast } from "react-toastify";
import useAxiosSecure from "../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const Registration = () => {
  const { handleCreateUser, handleGoogleSignIn, updateUser, setUser } =
    use(AuthContext);
  const axiosSecure = useAxiosSecure();

  const navigate = useNavigate();
  const location = useLocation();

  //
  const googleSignIn = () => {
    handleGoogleSignIn()
      .then((result) => {
        navigate(`${location.state ? location.state : "/"}`);

        // console.log(result.user);
        const { displayName, email, photoURL } = result.user;
        // console.log(displayName);

        //
        axiosSecure
          .post(`/add-user`, {
            displayName,
            email,
            photoURL,
          })
          .then(() => {
            // console.log(data.data);
          });

        //
        toast.success("Login successfully", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      })
      .catch(() => {
        //
      });
  };

  //
  const handleSignUp = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const image = e.target.image.value;
    // console.log(name, email, password, image);

    handleCreateUser(email, password)
      .then((result) => {
        const user = result.user;
        // console.log(user);

        updateUser({ displayName: name, photoURL: image })
          .then(() => {
            setUser({ ...result.user, displayName: name, photoURL: image });
            //
            axiosSecure
              .post(`/add-user`, {
                displayName: name,
                email: user.email,
                photoURL: image,
              })
              .then(() => {
                // console.log(data.data);
                navigate("/");

                Swal.fire({
                  icon: "success",
                  title: "Create Account",
                  text: "Account created successfully",
                  showConfirmButton: false,
                  timer: 1500,
                });
              });
          })
          .catch((error) => {
            const errorCode = error.code;
            toast.error(`${errorCode}`, {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: false,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              transition: Bounce,
            });
          });
      })
      .catch((error) => {
        const errorCode = error.code;

        // console.log(errorCode);

        toast.error(`${errorCode}`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      });
  };

  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col">
        <div className="card dark:bg-gray-800 bg-white w-[400px] shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleSignUp} className="fieldset">
              <h1 className="text-5xl font-bold text-center py-10 text-blue-600">
                Registration now!
              </h1>

              {/* Name */}
              <div className="py-5">
                <label className="label">Name</label>
                <input
                  type="name"
                  name="name"
                  className="input w-full dark:bg-gray-800"
                  placeholder="Name"
                  required
                />
              </div>

              {/* Image */}
              <div className="">
                <label className="label">Image URL</label>
                <input
                  type="text"
                  className="input w-full dark:bg-gray-800"
                  placeholder="Image URL"
                  name="image"
                  required
                />
              </div>

              {/* Email */}
              <div className="py-5">
                <label className="label">Email</label>
                <input
                  type="email"
                  className="input w-full dark:bg-gray-800"
                  placeholder="Email"
                  name="email"
                  required
                />
              </div>

              {/* Password */}
              <label className="label">Password</label>
              <input
                type="password"
                className="input w-full dark:bg-gray-800"
                placeholder="Password"
                name="password"
                required
                // minLength="6"
                pattern="(?=.*[a-z])(?=.*[A-Z]).{6,}"
                title="Must be more than 6 characters, lowercase letter, uppercase letter"
              />

              <button className="btn btn-neutral mt-4 bg-blue-600 border-0">
                Register
              </button>
            </form>

            {/* Google */}
            <button
              onClick={googleSignIn}
              className="btn bg-white text-blue-600 dark:bg-gray-800 shadow-none border-blue-600 "
            >
              <svg
                aria-label="Google logo"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g>
                  <path d="m0 0H512V512H0" fill="#fff"></path>
                  <path
                    fill="#34a853"
                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                  ></path>
                  <path
                    fill="#4285f4"
                    d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                  ></path>
                  <path
                    fill="#fbbc02"
                    d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                  ></path>
                  <path
                    fill="#ea4335"
                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                  ></path>
                </g>
              </svg>
              Login with Google
            </button>
            <p>
              Already have an account? please{" "}
              <Link to="/login" className="text-blue-600 underline">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
