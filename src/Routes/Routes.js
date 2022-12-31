import { createBrowserRouter } from "react-router-dom";
import RequireAuth from "../Hooks/RequireAuth";
import Main from "../Layouts/Main";
import Dashboard from "../Pages/Dashboard";
import Login from "../Pages/Login";
import AddCustomerData from "../Pages/Outlates/AddCustomerData";
import AllData from "../Pages/Outlates/AllData";
import IndividualData from "../Pages/Outlates/MyData";
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
        path: "/dashboard",
        element: (
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>
        ),
        children: [
          {
            path: "/dashboard/all-data",
            element: <AllData></AllData>,
          },
          {
            path: "/dashboard/added-by-me",
            element: <IndividualData></IndividualData>,
          },
          {
            path: "/dashboard/add-customer-data",
            element: <AddCustomerData></AddCustomerData>,
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
