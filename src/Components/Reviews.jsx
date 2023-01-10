import * as api from "../api";
import { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    api.fetchReviews().then(({ reviews }) => {
      setReviews(reviews);
      setIsLoading(false);
    });
  }, []);

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
