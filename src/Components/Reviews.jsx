import * as api from "../api";
import { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";

import { useParams, useSearchParams } from "react-router-dom";

import Error from "./Error";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sort, setSort] = useState("votes");
  const [order, setOrder] = useState("desc");
  let [searchParams, setSearchParams] = useSearchParams();

  let { category } = useParams();

  function handleSubmit(e) {
    e.preventDefault();
    setSort(e.target.value);
    setSearchParams({ sort_by: e.target.value });
  }

  useEffect(() => {
    api.fetchReviews(sort, order, category).then(({ reviews }) => {
      setReviews(reviews);
      setIsLoading(false);
    });
  }, [category, sort, order]);

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
      <section>
        <select value={sort} onChange={handleSubmit}>
          <option value="votes">Votes</option>
          <option value="comment_count">Comments</option>
          <option value="created_at">Date</option>
        </select>
        <select value={order} onChange={(e) => setOrder(e.target.value)}>
          <option value="desc">Descending</option>
          <option value="asc">Ascending</option>
        </select>
      </section>
      <ul>
        {reviews.map((review) => (
          <ReviewCard review={review} />
        ))}
      </ul>
    </main>
  );
};

export default Reviews;
