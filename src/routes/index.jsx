import React from "react";
import PathConstants from "./pathConstants";

const Home = React.lazy(() => import("../pages/Home"));
const SignUp = React.lazy(() => import("../pages/SignUp"));
const Login = React.lazy(() => import("../pages/Login"));
const About = React.lazy(() => import("../pages/About"));
const Guide = React.lazy(() => import("../pages/Guide"));
const TutorialYoung = React.lazy(() => import("../pages/TutorialYoung"));
const Book = React.lazy(() => import("../pages/Book"));
const TutorialYoungHome = React.lazy(() => import("../pages/TutorialYoungHome"));

const routes = [
  { path: PathConstants.Home, element: <Home /> },
  { path: PathConstants.SignUp, element: <SignUp /> },
  { path: PathConstants.Login, element: <Login /> },
  { path: PathConstants.About, element: <About /> },
  { path: PathConstants.Guide, element: <Guide /> },
  { path: PathConstants.TutorialYoung, element: <TutorialYoung /> },
  { path: PathConstants.Book, element: <Book /> },
  { path: PathConstants.TutorialYoungHome, element: <TutorialYoungHome /> },
];
export default routes;
