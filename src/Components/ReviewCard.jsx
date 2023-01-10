import { Link } from "react-router-dom";

const ReviewCard = ({ review }) => {
  // const handleClick = (e) => {
  //   console.log(e.target.value);
  // };

  return (
    <li className="reviewCard">
      <Link to={`/reviews/${review.review_id}`}>
        <button>
          {review.title}
          <br />
          <br />
          user: {review.owner}
          <br />
          votes: {review.votes}
          <img
            className="reviewImage"
            src={`${review.review_img_url}`}
            alt={`${review.title}`}
          />
        </button>
      </Link>
    </li>
  );
};

export default ReviewCard;
