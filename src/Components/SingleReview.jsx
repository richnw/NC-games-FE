import * as api from "../api";
import { useEffect, useState, useParams } from "react";

const SingleReview = () => {
  const reviewID = useParams();
  console.log(reviewID);
  const [currentReview, setCurrentReview] = useState({});

  useEffect(() => {
    api.fetchReview().then(({ review }) => {
      setCurrentReview(review);
    });
  }, []);
  console.log(currentReview);
  return currentReview.designer;
};

export default SingleReview;
