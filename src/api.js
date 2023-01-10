import axios from "axios";

const api = axios.create({
  baseURL: "https://nc-games-z0p2.onrender.com/api/",
});

export const fetchReviews = () => {
  return api.get("reviews").then((res) => res.data);
};
