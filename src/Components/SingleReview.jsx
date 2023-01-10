import * as api from "../api";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import moment from "moment";

const SingleReview = () => {
  const { reviewID } = useParams();
  const [currentReview, setCurrentReview] = useState({});
  const [reviewVotes, setReviewVotes] = useState(0);

  const addVote = (increment) => {
    setReviewVotes((currVotes) => {
      return currVotes + increment;
    });
    api.incVote(reviewID, increment);
  };

  useEffect(() => {
    api.fetchReview(reviewID).then(({ review }) => {
      setCurrentReview(review);
      setReviewVotes(review.votes);
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
        <p>
          Votes: {reviewVotes}
          <button onClick={() => addVote(1)}>👍</button>
          <button onClick={() => addVote(-1)}>👎</button>
        </p>
        <p> Comment Count: {currentReview.comment_count} </p>
      </section>
      <img
        className="SingleReviewImage"
        src={`${currentReview.review_img_url}`}
        alt={`${currentReview.title}`}
      />
    </main>
  );
};

export default SingleReview;
