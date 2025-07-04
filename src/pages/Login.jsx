import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthContext";
import { Bounce, toast } from "react-toastify";
import useAxiosSecure from "../hooks/useAxiosSecure";

const Login = () => {
  const [error, setError] = useState();
  const { handleSignInUser, handleGoogleSignIn } = use(AuthContext);
  const axiosSecure = useAxiosSecure();

  const location = useLocation();
  const navigate = useNavigate();

  //
  const googleSignIn = () => {
    handleGoogleSignIn()
      .then((result) => {
        navigate(`${location.state ? location.state : "/"}`);

        //
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
  const handleSignIn = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log(email, password);

    handleSignInUser(email, password)
      .then(() => {
        navigate(`${location.state ? location.state : "/"}`);

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

        // console.log(result.user);
      })
      .catch((error) => {
        const errorCode = error.code;

        toast.error("Invalid email or password. Please try again.", {
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

        // const errorMessage = error.message;
        setError(errorCode);
      });
  };

  //
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col">
        <div className="card dark:bg-gray-800 bg-white w-[400px] shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="text-5xl font-bold py-10 text-center text-blue-600">
              Login
            </h1>
            <form onSubmit={handleSignIn} className="fieldset">
              {/* email */}
              <label className="label">Email</label>
              <input
                type="email"
                className="input w-full dark:bg-gray-800"
                placeholder="Email"
                name="email"
                required
              />

              {/* password */}
              <div className="py-5">
                <label className="label">Password</label>
                <input
                  type="password"
                  className="input w-full dark:bg-gray-800"
                  placeholder="Password"
                  name="password"
                  required
                />
              </div>

              <button className="btn btn-neutral mt-4 bg-blue-600 border-0">
                Login
              </button>

              {error && <p className="text-red-600">{error}</p>}
            </form>

            {/* Google */}
            <button
              onClick={googleSignIn}
              className="btn bg-white text-blue-600 dark:bg-gray-800 border-blue-600 shadow-none"
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
              New to this site? please{" "}
              <Link to="/Registration" className="text-blue-600 underline">
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
