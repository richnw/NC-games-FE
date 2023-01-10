import * as api from "../api";
import { useEffect, useState } from "react";

const SingleReview = () => {
  const [currentReview, setCurrentReview] = useState({});

  useEffect(() => {
    api.fetchReview().then(({ review }) => {
      setCurrentReview(review);
    });
  }, []);

  return currentReview.designer;
};

export default SingleReview;
