import { lazy, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as moviesApi from "../services/ApiService";
import { Container } from "semantic-ui-react";

const MoviesPageDetails = lazy(() =>
  import(
    "../components/MoviesPage/MoviesPage.js" /*webpackChunkName: "MoviesPage" */
  )
);

export const MoviesDetails = () => {
  const { slug } = useParams();
  const { movie, setMovie } = useState(null);
  const movieId = slug.match(/[a-z0-9]+$/)[0];

  useEffect(() => {
    moviesApi.movieDetails(movieId).then(setMovie);
  }, [movieId]);

  return (
    <Container textAlign="center">
      {movie && <MoviesPageDetails movie={movie} />}
    </Container>
  );
};
