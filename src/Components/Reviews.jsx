import * as api from "../api";
import { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    api.fetchReviews().then(({ reviews }) => {
      setReviews(reviews);
    });
  }, []);
  return (
    <ul>
      {reviews.map((review) => (
        <ReviewCard review={review} />
      ))}
    </ul>
  );
};

export default Reviews;
