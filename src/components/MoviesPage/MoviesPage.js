import { lazy, Suspense } from "react";
import {
  NavLink,
  useRouteMatch,
  Route,
  useParams,
  useLocation,
  useHistory,
} from "react-router-dom";
import styled from "./MoviesPage.module.css";
import { Spinner } from "../Spinner/Spinner";

const Cast = lazy(() =>
  import("../../Views/Cast" /* webpackChunkName: "cast" */)
);
