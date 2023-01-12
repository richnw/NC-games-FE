import * as api from "../api";
import { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";
import { useParams } from "react-router-dom";

const SingleCategory = () => {
  const [category, setCategory] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { category_slug } = useParams();

  useEffect(() => {
    api.fetchCategoryBySlug(category_slug).then((categoryData) => {
      setCategory(categoryData);
      setIsLoading(false);
    });
  }, [category_slug]);

  if (isLoading) return <h1>Loading...</h1>;
  return (
    <ul>
      {category.reviews.map((review) => (
        <ReviewCard review={review} />
      ))}
    </ul>
  );
};

export default SingleCategory;
