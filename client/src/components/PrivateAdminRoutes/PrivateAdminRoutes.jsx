import { Navigate, Outlet } from "react-router-dom";

function PrivateAdminRoutes() {
  return localStorage.getItem("admin") ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateAdminRoutes;
