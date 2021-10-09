import { lazy, useEffect, useState } from "react";
import * as moviesAPI from "../services/ApiService";
import { Container } from "semantic-ui-react";

const HomePageMovies = lazy(() =>
  import("../components/HomePage/HomePage" /* webpackChunkName: "HomePage"  */)
);

export default function HomePage() {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    moviesAPI.moviesTrending().then((data) => {
      setMovies(data.results);
    });
  }, []);

  return (
    <Container textAlign="center">
      {movies && <HomePageMovies movies={movies} />}
    </Container>
  );
}
