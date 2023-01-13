import * as api from "../api";
import { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";

import { useParams } from "react-router-dom";

import Error from "./Error";


const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  let { category } = useParams();

  useEffect(() => {
    api.fetchReviews(category).then(({ reviews }) => {
      setReviews(reviews);
      setIsLoading(false);
    });
  }, [category]);

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
    <main>
      <h2>{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
      <ul>
        {reviews.map((review) => (
          <ReviewCard review={review} />
        ))}
      </ul>
    </main>
  );
};

export default Reviews;
