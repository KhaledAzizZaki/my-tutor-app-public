import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Registration from "../pages/Registration";
import Login from "../pages/Login";
import AddTutor from "../pages/AddTutor";
import PrivateRoute from "../provider/PrivateRoute";
import FindTutors from "../pages/FindTutors";
import TutorDetails from "../pages/TutorDetails";
import axios from "axios";
import MyTutor from "../pages/MyTutor";
import MyBookedTutors from "../pages/MyBookedTutors";
// import useAxiosSecure from "../hooks/useAxiosSecure";

// const axiosSecure = useAxiosSecure;

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/addTutor",
        element: (
          <PrivateRoute>
            <AddTutor></AddTutor>
          </PrivateRoute>
        ),
      },
      {
        path: "/findTutors",
        element: <FindTutors></FindTutors>,
      },
      {
        path: "/tutor/:id",
        element: (
          <PrivateRoute>
            <TutorDetails></TutorDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          axios(`${import.meta.env.VITE_API_URL}/tutor/${params.id}`),
      },
      {
        path: "/myTutor/:email",
        element: (
          <PrivateRoute>
            <MyTutor></MyTutor>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          axios(`${import.meta.env.VITE_API_URL}/my-tutor/${params.email}`),
      },
      {
        path: "/myBookedTutors/:email",
        element: (
          <PrivateRoute>
            <MyBookedTutors></MyBookedTutors>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          axios(
            `${import.meta.env.VITE_API_URL}/my-booked-tutor/${params.email}`
          ),
      },
    ],
  },
]);
