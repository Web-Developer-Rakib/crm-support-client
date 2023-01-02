import { Navigate, useLocation } from "react-router-dom";
import useUser from "./useUser";

const RequireAdmin = ({ children }) => {
  const { user } = useUser();
  const location = useLocation();
  if (user.userType !== "admin") {
    return (
      <Navigate
        to="/dashboard/added-by-me"
        state={{ from: location }}
        replace
      ></Navigate>
    );
  } else {
    return children;
  }
};

export default RequireAdmin;
