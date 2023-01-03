import { Navigate, useLocation } from "react-router-dom";
import useUser from "./useUser";

const ProtectLogin = ({ children }) => {
  const { user } = useUser();
  const location = useLocation();
  if (user) {
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

export default ProtectLogin;
