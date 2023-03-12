import { Route, Routes } from "react-router";
import LandingPage from "../pages/landingPage";
import LoginPage from "../pages/login";
import RegisterForm from "../pages/register";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterForm />} />
      <Route
        path="/userDashboard"
        element={"Colocar a pagina dashboard de usuario"}
      />
      <Route
        path="/adminDashboard"
        element={"Colocar a pagina dashboard do administrador"}
      />
    </Routes>
  );
};
