import api from "api/api";

export const getInfluencers = async (data) => {
  const { username, ...params } = data;
  return api.get(`/influencers/${username}`, { params });
};

const influencers = { getInfluencers };

export default influencers;
