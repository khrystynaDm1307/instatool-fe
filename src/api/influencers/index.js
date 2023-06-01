import api from "api/api";

export const getInfluencers = async (params) => {
  return api.get(`/influencers`, { params });
};

export const getInfluencer = async (username, params) => {
  return api.get(`/influencers/${username}`, { params });
};

const influencers = { getInfluencers, getInfluencer };

export default influencers;
