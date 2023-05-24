import { Typography } from "@mui/material";

const getRows = (post) => {
  const {
    owner,
    engagement,
    caption,
    type,
    likesCount,
    commentsCount,
    timestamp,
    locationName,
    hashtags,
    mentions,
    videoPlayCount,
    videoViewCount,
    id,
    url,
  } = post;

  const { email, followersCount } = owner;

  return {
    user: owner,
    engagement,
    engagement_rate: (
      (engagement > 0 ? engagement : 0) / (followersCount || 1)
    ).toFixed(2),
    // post_pic:<img src={`https://storage.googleapis.com/instagram-global-data-images/media/${id}.jpg`} width={300}/>,
    caption,
    followersCount,
    type: type === "Sidecar" ? "Carousel" : type,
    url,
    likesCount,
    commentsCount,
    timestamp,
    locationName,
    hashtags,
    mentions,
    videoPlayCount,
    videoViewCount,
    email,
    id,
  };
};

export default getRows;
