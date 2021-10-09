import { lazy, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as moviesApi from "../services/ApiService";
import { Container } from "semantic-ui-react";

const MoviePageDetails = lazy(() =>
  import(
    "../components/MoviesPage/MoviesPage" /* webpackChunkName: "MoviePage"  */
  )
);

export default function MovieDetails() {
  const { slug } = useParams();
  const [movie, setMovie] = useState(null);
  const movieId = slug.match(/[a-z0-9]+$/)[0];

  useEffect(() => {
    moviesApi.movieInfo(movieId).then(setMovie);
  }, [movieId]);

  return (
    <Container textAlign="center">
      {movie && <MoviePageDetails movie={movie} />}
    </Container>
  );
}
