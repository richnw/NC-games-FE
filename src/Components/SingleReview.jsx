import * as api from "../api";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import moment from "moment";

import Comments from "./Comments";
import Error from "./Error";

import { Route, Routes } from "react-router-dom";
import CommentsForSingleReview from "./CommentsForSingleReview";

const SingleReview = (currentUser) => {
  const { reviewID } = useParams();
  const [currentReview, setCurrentReview] = useState({});
  const [reviewVotes, setReviewVotes] = useState(0);
  const [error, setError] = useState(null);

  <Routes>
    <Route
      path="/reviews/:reviewID/comments"
      element={<CommentsForSingleReview review={currentReview} />}
    />
  </Routes>;

  const addVote = (increment) => {
    setReviewVotes((currVotes) => currVotes + increment);
    setError(null);
    api.incVote(reviewID, increment).catch((err) => {
      setReviewVotes((currVotes) => currVotes - increment);
      setError("Something went wrong, please try again.");
    });
  };

  useEffect(() => {
    api
      .fetchReview(reviewID)
      .then(({ review }) => {
        setCurrentReview(review);
        setReviewVotes(review.votes);
      })
      .catch((err) => {
        setError({ err });
      });
  }, [reviewID]);

  if (error) {
    return <Error />;
  }

  return (
    <main className="SingleReview">
      <h2>{currentReview.title}</h2>
      <section className="SingleReviewText">
        <p>designer: {currentReview.designer} </p>
        <p>user: {currentReview.owner}</p>
        <p>{moment(currentReview.created_at).format("LLL")}</p>
        <p className="ReviewBody">{currentReview.review_body} </p>
        <p className="VotesAndAddComment">
          Votes: {reviewVotes}
          <button className="VoteButton" onClick={() => addVote(1)}>
            👍
          </button>
          <button className="VoteButton" onClick={() => addVote(-1)}>
            👎
          </button>
        </p>
        {error ? <p>{error}</p> : ""}
      </section>
      <img
        className="SingleReviewImage"
        src={`${currentReview.review_img_url}`}
        alt={`${currentReview.title}`}
      />
      <section className="CommentsOnSingleReview">
        <h3> Comment Count: {currentReview.comment_count} </h3>
        <Comments currentUser={currentUser} />
      </section>
    </main>
  );
};

export default SingleReview;
