import { lazy, useEffect, useState } from "react";
import * as moviesApi from "../services/ApiService";
import { Container } from "semantic-ui-react";

const HomePageMovies = lazy(() =>
  import("../components/HomePage/HomePage.js" /*webpackChunkName: "HomePage*/)
);

export const HomePage = () => {
  const [movies, setMovies] = useState(null);
  useEffect(() => {
    moviesApi.trendingMovies().then((data) => {
      setMovies(data.results);
    });
  }, []);

  return (
    <Container textAlign="center">
      {movies && <HomePageMovies movies={movies} />}
    </Container>
  );
};
