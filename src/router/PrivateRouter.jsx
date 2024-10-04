import { Navigate, Outlet } from "react-router-dom";
import { useLoginContext } from "../context/LoginProvider";

const PrivateRouter = () => {
  const { user } = useLoginContext();
  // const userInfo = sessionStorage.getItem("user");
  // const user = true;
  return user?.username && user?.password ? (
    <Outlet />
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRouter;
