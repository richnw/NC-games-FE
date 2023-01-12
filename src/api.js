import axios from "axios";

const api = axios.create({
  baseURL: "https://nc-games-z0p2.onrender.com/api/",
});

export const fetchReviews = () => {
  return api.get("reviews").then((res) => res.data);
};

export const fetchReview = (reviewID) => {
  return api.get(`reviews/${reviewID}`).then((res) => res.data);
};

export const incVote = (reviewID, increment) => {
  return api
    .patch(`reviews/${reviewID}`, { inc_votes: increment })
    .then((res) => res.data);
};

export const fetchComments = (reviewID) => {
  return api.get(`reviews/${reviewID}/comments`).then((res) => res.data);
};

export const postComment = (reviewID, newComment, currentUser) => {
  return api
    .post(`reviews/${reviewID}/comments`, {
      username: currentUser,
      body: newComment,
    })
    .then((res) => res.data);
};

export const fetchCategoryBySlug = (category_slug) => {
  return api.get(`/reviews?category=${category_slug}`).then((res) => res.data);
};

export const getCategories = () => {
  return api.get("categores").then((res) => res.data);
};
