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

export const fetchComments = (reviewID) => {
  return api.get(`reviews/${reviewID}/comments`).then((res) => res.data);
};
