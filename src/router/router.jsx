import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Main from "../layout/Main/Main";
import NotFound from "../pages/NotFound/NotFound";
import LogInRegistration from "../pages/LogInRegistration/LogInRegistration";
import Dashboard from "../pages/Dashboard/Dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Main>
        <Home />
      </Main>
    ),
  },
  {
    path: "/logIn",
    element: (
      <Main>
        <LogInRegistration />
      </Main>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <Main>
        <Dashboard />
      </Main>
    ),
  },
  { path: "*", element: <NotFound /> },
]);
