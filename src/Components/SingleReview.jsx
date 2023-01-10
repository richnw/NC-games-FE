import * as api from "../api";
import { useEffect, useState } from "react";
import { Route, useParams } from "react-router";
import moment from "moment";
import Comments from "./Comments";

const SingleReview = () => {
  const { reviewID } = useParams();
  const [currentReview, setCurrentReview] = useState({});

  useEffect(() => {
    api.fetchReview(reviewID).then(({ review }) => {
      setCurrentReview(review);
    });
  }, [reviewID]);

  return (
    <main className="SingleReview">
      <h2>{currentReview.title}</h2>
      <section className="SingleReviewText">
        <p>designer: {currentReview.designer} </p>
        <p>user: {currentReview.owner}</p>
        <p>{moment(currentReview.created_at).format("LLL")}</p>
        <p>{currentReview.review_body} </p>
        <p>Votes: {currentReview.votes} </p>
        <p> Comment Count: {currentReview.comment_count} </p>
      </section>
      <img
        className="SingleReviewImage"
        src={`${currentReview.review_img_url}`}
        alt={`${currentReview.title}`}
      />
      <h3>Comments:</h3>
      <Route path="/reviews/:reviewID/comments" element={<Comments />} />
    </main>
  );
};

export default SingleReview;
