const ReviewCard = ({ review }) => {
  return (
    <li className="reviewCard">
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
    </li>
  );
};

export default ReviewCard;
