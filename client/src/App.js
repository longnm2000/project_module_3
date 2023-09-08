import { Route, Routes } from "react-router-dom";
import Home from "./pages/user/home/Home";
import Cart from "./pages/user/cart/Cart";
import Login from "./pages/user/login/Login";
import Register from "./pages/user/register/Register";
import NotFound from "./pages/user/NotFound/NotFound";
import AdminLogin from "./pages/admin/AdminLogin/AdminLogin";
import PrivateAdminRoutes from "./components/PrivateAdminRoutes/PrivateAdminRoutes";
import AdminHome from "./pages/admin/AdminHome/AdminHome";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/admin/login" element={<AdminLogin />}></Route>
      <Route element={<PrivateAdminRoutes />}>
        <Route path="/admin/home" element={<AdminHome />}></Route>
      </Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
}

export default App;
