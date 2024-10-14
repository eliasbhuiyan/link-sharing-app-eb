import { Navigate, Outlet } from "react-router-dom";
import DashbordNav from "./DashbordNav";
import { useSelector } from "react-redux";

const DashbordLayout = () => {
  const userData = useSelector((state) => state.isLoggedUser.user);

  if (!userData || !userData?.emailVerified) {
    return <Navigate to="/signin" />;
  }
  return (
    <>
      <DashbordNav />
      <Outlet />
    </>
  );
};

export default DashbordLayout;
