import { createBrowserRouter } from "react-router-dom";
import ProtectLogin from "../Hooks/ProtectLogin";
import RequireAdmin from "../Hooks/RequireAdmin";
import RequireAuth from "../Hooks/RequireAuth";
import Main from "../Layouts/Main";
import Dashboard from "../Pages/Dashboard";
import Login from "../Pages/Login";
import AddCustomerData from "../Pages/Outlates/AddCustomerData";
import AllData from "../Pages/Outlates/AllData";
import MyData from "../Pages/Outlates/MyData";
import Register from "../Pages/Outlates/Register";
import UpdateCustomerData from "../Pages/Outlates/UpdateCustomerData";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: (
          <ProtectLogin>
            <Login></Login>
          </ProtectLogin>
        ),
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
            element: (
              <RequireAdmin>
                <AllData></AllData>
              </RequireAdmin>
            ),
          },
          {
            path: "/dashboard/added-by-me",
            element: <MyData></MyData>,
          },
          {
            path: "/dashboard/add-customer-data",
            element: <AddCustomerData></AddCustomerData>,
          },
          {
            path: "/dashboard/Add-employee",
            element: (
              <RequireAdmin>
                <Register></Register>
              </RequireAdmin>
            ),
          },
          {
            path: "/dashboard/update-customer/:cid",
            element: <UpdateCustomerData></UpdateCustomerData>,
          },
        ],
      },
    ],
  },
]);
export default routes;
