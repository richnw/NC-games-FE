import * as api from "../api";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import moment from "moment";
import { Route, Routes, Link } from "react-router-dom";
import Comments from "./Comments";

const SingleReview = () => {
  const { reviewID } = useParams();
  const [currentReview, setCurrentReview] = useState({});
  const [reviewVotes, setReviewVotes] = useState(0);
  const [err, setErr] = useState(null);

  <Routes>
    <Route
      path="/reviews/:reviewID/comments"
      element={<Comments review={currentReview} />}
    />
  </Routes>;

  const addVote = (increment) => {
    setReviewVotes((currVotes) => currVotes + increment);
    setErr(null);
    api.incVote(reviewID, increment).catch((err) => {
      setReviewVotes((currVotes) => currVotes - increment);
      setErr("Something went wrong, please try again.");
    });
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
        {err ? <p>{err}</p> : ""}
        <p> Comment Count: {currentReview.comment_count} </p>
        <Link to={`/reviews/${currentReview.review_id}/comments}`}>
          <button>Comments</button>
        </Link>
      </section>
      <img
        className="SingleReviewImage"
        src={`${currentReview.review_img_url}`}
        alt={`${currentReview.title}`}
      />
      <p className="ReviewBody">{currentReview.review_body}</p>
      <section className="CommentsOnSingleReview">
        <h3>Comments:</h3>
        <Comments />
      </section>
    </main>
  );
};

export default SingleReview;
