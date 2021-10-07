import React, { useState, useEffect } from "React";
import * as moviesApi from "../services/ApiService";
import { Container } from "semantic-ui-react";
import styled from "../ViewsStyle/Reviews.module.css";

export const MovieReviewsView = ({ movieId }) => {
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    moviesApi.movieReviews(movieId).then((data) => setReviews(data.results));
  }, [movieId]);

  return (
    <Container textAlign="center">
      <ul className={styled.ul}>
        {reviews && reviews.length > 0
          ? reviews.map((review) => (
              <li key={review.id} className={styled.li}>
                <h3 className={styled.h3}>{review.author}</h3>
                <p className={styled.p}>{review.content}</p>
              </li>
            ))
          : "No reviews"}
      </ul>
    </Container>
  );
};
