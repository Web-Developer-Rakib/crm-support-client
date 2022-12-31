import { Navigate, useLocation } from "react-router-dom";
import useUser from "./useUser";

const RequireAuth = ({ children }) => {
  const { user } = useUser();
  const location = useLocation();
  if (!user) {
    return <Navigate to="/" state={{ from: location }} replace></Navigate>;
  } else {
    return children;
  }
};

export default RequireAuth;
