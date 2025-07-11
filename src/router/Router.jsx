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
import UpdateTutor from "../pages/UpdateTutor";
import OneLang from "../pages/OneLang";
import ErrorPage from "../components/errorPage/ErrorPage";

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
      },
      {
        path: "/myTutor",
        element: (
          <PrivateRoute>
            <MyTutor></MyTutor>
          </PrivateRoute>
        ),
        // loader: ({ params }) =>
        //   axios(`${import.meta.env.VITE_API_URL}/my-tutor/${params.email}`),
      },
      {
        path: "/myBookedTutors",
        element: (
          <PrivateRoute>
            <MyBookedTutors></MyBookedTutors>
          </PrivateRoute>
        ),
      },
      {
        path: "/updateTutor/:id",
        element: (
          <PrivateRoute>
            <UpdateTutor></UpdateTutor>
          </PrivateRoute>
        ),
      },
      {
        path: "/oneLang/:lang",
        element: <OneLang></OneLang>,
        loader: ({ params }) =>
          axios(`${import.meta.env.VITE_API_URL}/one-lang/${params.lang}`),
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);
