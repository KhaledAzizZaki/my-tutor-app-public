import React, { use } from "react";
import { Navigate, NavLink } from "react-router";
import { AuthContext } from "../../provider/AuthContext";

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
        <NavLink to={`/myTutor/${user?.email}`}>My Tutor</NavLink>
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
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {link}
          </ul>
        </div>

        <h2 className="btn btn-ghost text-xl">TalkTutor</h2>
      </div>

      <div className="navbar-end">
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{link}</ul>
        </div>

        {user && (
          <div className="relative inline-block group px-3">
            <button className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img alt="User avatar" src={user.photoURL} />
              </div>
            </button>

            <ul
              className="absolute right-0 mt-3 w-52 bg-base-100 menu menu-sm rounded-box p-2 shadow
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
          <a onClick={handleSignOut} className="btn">
            Logout
          </a>
        ) : (
          <NavLink to={"/login"} className="btn">
            Login
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default NavBar;
