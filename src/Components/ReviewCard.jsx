import { Link } from "react-router-dom";

const ReviewCard = ({ review }) => {
  return (
    <li className="ReviewCard">
      <Link to={`/reviews/${review.review_id}`}>
        <h3> {review.title}</h3>
        user: {review.owner}
        <br />
        votes: {review.votes}
        <img
          className="reviewImage"
          src={`${review.review_img_url}`}
          alt={`${review.title}`}
        />
      </Link>
    </li>
  );
};

export default ReviewCard;
