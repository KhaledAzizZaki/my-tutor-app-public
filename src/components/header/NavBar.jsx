import React, { use } from "react";
import { Navigate, NavLink } from "react-router";
import { AuthContext } from "../../provider/AuthContext";
import ThemeToggle from "../button/ThemeToggle";
import { Fade } from "react-awesome-reveal";

const NavBar = () => {
  const { handleSignOutUser, user } = use(AuthContext);

  //
  const handleSignOut = () => {
    handleSignOutUser()
      .then(() => {
        Navigate("/signin");
        // Sign-out successful.
      })
      .catch(() => {
        // console.log(error);
        // An error happened.
      });
  };

  //
  const link = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/findTutors"}>Find tutors</NavLink>
      </li>
      <li>
        <NavLink to={"/addTutor"}>Add Tutor</NavLink>
      </li>
      <li>
        <NavLink to={`/myTutor`}>My Tutor</NavLink>
      </li>
      <li>
        <NavLink to={`/myBookedTutors`}>My booked tutors</NavLink>
      </li>
      {!user && (
        <li>
          <NavLink to={"/registration"}>Registration</NavLink>
        </li>
      )}
    </>
  );

  return (
    <div className="bg-blue-800 dark:bg-gray-800 text-gray-300">
      <div className="navbar shadow-sm px-0 w-11/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="lg:hidden rounded-0 pl-0 mr-5 hover:cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content rounded-box z-1 mt-3 w-52 p-2 shadow bg-blue-700 dark:bg-gray-800"
            >
              {link}
            </ul>
          </div>

          <Fade direction="left" triggerOnce>
            <h2 className="text-2xl pr-4">TalkTutor</h2>
          </Fade>
          <Fade direction="down" cascade triggerOnce>
            <div className="hidden lg:flex">
              <ul className="menu menu-horizontal px-1">{link}</ul>
            </div>
          </Fade>
        </div>

        <div className="navbar-end">
          <ThemeToggle></ThemeToggle>

          {user && (
            <div className="relative inline-block group pr-3">
              <button className="btn btn-ghost btn-circle avatar">
                <div className="w-10   hover:border-blue-400">
                  <img alt="User avatar" src={user.photoURL} />
                </div>
              </button>

              <ul
                className="absolute right-0 mt-3 w-52 bg-blue-700 dark:bg-gray-800 menu menu-sm rounded-box p-2 shadow
                 opacity-0 invisible group-hover:opacity-100 group-hover:visible
                 transition-all duration-300 z-10"
              >
                <li>
                  <p>Name: {user.displayName}</p>
                </li>
              </ul>
            </div>
          )}

          {/* button */}
          {user ? (
            <a
              onClick={handleSignOut}
              className="border-2 px-4 py-1 hover:border-blue-400  hover:cursor-pointer hover:bg-white hover:text-blue-600"
            >
              Logout
            </a>
          ) : (
            <NavLink
              to={"/login"}
              className="border-2 px-4 py-1 hover:border-blue-400  hover:cursor-pointer hover:bg-white hover:text-blue-600"
            >
              Login
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
