import * as api from "../api";
import { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";
import Error from "./Error";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    api
      .fetchReviews()
      .then(({ reviews }) => {
        setReviews(reviews);
        setIsLoading(false);
      })
      .catch((err) => {
        setError({ err });
      });
  }, []);

  if (error) {
    return <Error />;
  }

  if (isLoading) return <h1>Loading...</h1>;
  return (
    <ul>
      {reviews.map((review) => (
        <ReviewCard review={review} />
      ))}
    </ul>
  );
};

export default Reviews;
