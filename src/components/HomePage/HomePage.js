import { NavLink, useLocation } from "react-router-dom";
import slugify from "slugify";
import styled from "./HomePage.module.css";

const makeSlug = (string) => slugify(string, { lover: true });

const HomePage = ({ movies }) => {
  const location = useLocation();

  return (
    <div className={styled.div}>
      <h1 className={styled.h1}>Trending today</h1>
      <ul className={styled.ul}>
        {movies.map((movie) => (
          <li key={movie.id} className={styled.li}>
            <NavLink
              className={styled.link}
              to={{
                pathname: `movies/${makeSlug(`${movie.title} ${movie.id}`)}`,
                state: { from: { location, label: "Back to trend movies" } },
              }}
            >
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
                className={styled.img}
              />
              <p className={styled.p}>{movie.title}</p>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
