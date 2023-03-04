import { Route, Routes } from "react-router";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={"Colocar a pagina Login"} />
      <Route path="/register" element={"Colocar a pagina registro"} />
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
