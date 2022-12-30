import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Dashboard from "../Pages/Dashboard";
import Login from "../Pages/Login";
import AllData from "../Pages/Outlates/AllData";
import IndividualData from "../Pages/Outlates/IndividualData";
import Register from "../Pages/Outlates/Register";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Login></Login>,
      },
      {
        path: "/dashboard/all-data",
        element: <Dashboard></Dashboard>,
        children: [
          {
            path: "/dashboard/all-data",
            element: <AllData></AllData>,
          },
          {
            path: "/dashboard/individual-data",
            element: <IndividualData></IndividualData>,
          },
          {
            path: "/dashboard/Add-employee",
            element: <Register></Register>,
          },
        ],
      },
    ],
  },
]);
export default routes;
