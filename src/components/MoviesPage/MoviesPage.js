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
import Spinner from "../Spinner/Spinner";

const Cast = lazy(() =>
  import("../../Views/Cast" /* webpackChunkName: "cast" */)
);
const Reviews = lazy(() =>
  import("../../Views/Reviews" /* webpackChunkName: "reviews" */)
);

export default function MoviesPage({ movie }) {
  const history = useHistory();
  const location = useLocation();
  const { slug } = useParams();
  const { url, path } = useRouteMatch();

  const movieId = slug.match(/[a-z0-9]+$/)[0];

  const onGoBack = () => {
    history.push(location?.state?.from?.location ?? "/");
  };

  const checkLocation = () => {
    const { state } = location;
    return state?.from ? state.from : "";
  };

  return (
    <div>
      <button type="button" onClick={onGoBack} className={styled.button}>
        {location?.state?.from?.label ?? "Go back to main page"}
      </button>

      <div className={styled.div}>
        <div className={styled.movie_card}>
          <img
            className={styled.img}
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title}
          />

          <div className={styled.movie_info}>
            <h2 className={styled.h2}>{movie.title}</h2>
            <p className={styled.p}> {movie.release_date}</p>
            <ul className={styled.li}>
              {movie.genres.map((genre) => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </ul>

            <p className={styled.p}>{movie.overview}</p>

            <div className={styled.links}>
              <NavLink
                className={styled.link}
                to={{
                  pathname: `${url}/cast`,
                  state: { from: checkLocation() },
                }}
              >
                Cast
              </NavLink>
              <NavLink
                className={styled.link}
                to={{
                  pathname: `${url}/reviews`,
                  state: { from: checkLocation() },
                }}
              >
                Reviews
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <Suspense fallback={<Spinner />}>
        <Route path={`${path}/cast`}>
          <Cast movieId={movieId} />
        </Route>

        <Route path={`${path}/reviews`}>
          <Reviews movieId={movieId} />
        </Route>
      </Suspense>
    </div>
  );
}
