import { useState } from "react";
import * as api from "../api";

const CommentAdder = ({ setComments, reviewID }) => {
  console.log(reviewID);
  const [newComment, setNewComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setComments((currComments) => {
      return [{ author: "jessjelly", body: newComment }, ...currComments];
    });
    api.postComment(reviewID, newComment).then(() => {
      setNewComment("");
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="Add a new comment">
        <input
          placeholder="Write your comment here..."
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
      </label>
      <button type="submit">Add comment</button>
    </form>
  );
};

export default CommentAdder;
