import api from "api/api";

export const getPosts = async (params) => {
  return api.get(`/posts`, { params });
};

const posts = { getPosts };

export default posts;
