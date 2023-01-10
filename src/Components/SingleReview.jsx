import * as api from "../api";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import moment from "moment";

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
        {moment(currentReview.created_at).format("LLL")} <br />
        <p className="ReviewBody">{currentReview.review_body}</p> <br />
        Votes: {currentReview.votes} <br />
        Comment Count: {currentReview.comment_count}
      </section>
      <img
        className="SingleReviewImage"
        src={`${currentReview.review_img_url}`}
        alt={`${currentReview.title}`}
      />
      <h3>Comments:</h3>
    </main>
  );
};

export default SingleReview;
