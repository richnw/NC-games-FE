import { useState } from "react";
import * as api from "../api";

const CommentAdder = ({ currentUser, setComments, reviewID }) => {
  const [newComment, setNewComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setComments((currComments) => {
      return [
        { author: currentUser.currentUser, body: newComment },
        ...currComments,
      ];
    });
    api.postComment(reviewID, newComment, currentUser.currentUser).then(() => {
      setNewComment("");
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="Add a new comment">
        <input
          required="required"
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
