import React from "react";
import PathConstants from "./pathConstants";

const Home = React.lazy(() => import("../pages/Home"));
const SignUp = React.lazy(() => import("../pages/SignUp"));
const Login = React.lazy(() => import("../pages/Login"));
const About = React.lazy(() => import("../pages/About"));
const Guide = React.lazy(() => import("../pages/Guide"));

const routes = [
  { path: PathConstants.Home, element: <Home /> },
  { path: PathConstants.SignUp, element: <SignUp /> },
  { path: PathConstants.Login, element: <Login /> },
  { path: PathConstants.About, element: <About /> },
  { path: PathConstants.Guide, element: <Guide /> },
];
export default routes;
