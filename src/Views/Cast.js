import { useState, useEffect } from "react";
import { Container } from "semantic-ui-react";
import * as moviesAPI from "../services/ApiService";
import styled from "../ViewsStyle/Cast.module.css";

export default function MovieCastView({ movieId }) {
  const [casts, setCasts] = useState(null);
  useEffect(() => {
    moviesAPI.movieCast(movieId).then((data) => setCasts(data.cast));
  }, [movieId]);

  return (
    <Container textAlign="center">
      <ul className={styled.ul}>
        {casts &&
          casts.map((cast) => (
            <li className={styled.li} key={cast.id}>
              <img
                className={styled.img}
                alt={cast.name}
                src={`https://image.tmdb.org/t/p/w300/${cast.profile_path}`}
              />
              <p className={styled.p}>{cast.name}</p>
            </li>
          ))}
      </ul>
    </Container>
  );
}
