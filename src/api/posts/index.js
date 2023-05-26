import api from "api/api";

const getPosts = async (params) => {
  return api.get(`/posts`, { params });
};

const getPostById = async (id) => {
  return api.get(`/posts/${id}`);
};

const posts = { getPosts, getPostById };

export default posts;
