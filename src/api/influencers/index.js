import api from "api/api";

export const getInfluencers = async (params) => {
  return api.get(`/influencers`, { params });
};

const influencers = { getInfluencers };

export default influencers;
