import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Main from "../layout/Main/Main";
import NotFound from "../pages/NotFound/NotFound";
import LogInRegistration from "../pages/LogInRegistration/LogInRegistration";
import Dashboard from "../pages/Dashboard/Dashboard";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import AddHouse from "../pages/Dashboard/HouseOwner/AddHouse";
import UpdateHouse from "../pages/Dashboard/HouseOwner/UpdateHouse";
import DetailsHouse from "../pages/Dashboard/HouseOwner/DetailsHouse";

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
  {
    path: "/dashboard/addHouse",
    element: (
      <Main>
        <AddHouse />
      </Main>
    ),
  },
  {
    path: "/dashboard/update/:id",
    element: (
      <Main>
        <UpdateHouse />
      </Main>
    ),
  },
  {
    path: "/dashboard/details/:id",
    element: (
      <Main>
        <DetailsHouse />
      </Main>
    ),
  },
  {
    path: "/about",
    element: (
      <Main>
        <About />
      </Main>
    ),
  },
  {
    path: "/contact",
    element: (
      <Main>
        <Contact />
      </Main>
    ),
  },
  { path: "*", element: <NotFound /> },
]);
