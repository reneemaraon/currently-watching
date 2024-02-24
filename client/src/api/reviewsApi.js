import axios from "axios";

export const getReviewsRequest = async (params) =>
  await axios.get("/api/v1/reviews/");

export const getReviewRequest = async (id) =>
  await axios.get("/api/v1/reviews/" + id);
