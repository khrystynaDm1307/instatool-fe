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
    shortCode,
  } = post;

  const { email, followersCount } = owner;

  return {
    user: owner,
    engagement,
    shortCode,
    engagement_rate: (
      (engagement > 0 ? engagement : 0) / (followersCount || 1)
    ).toFixed(2),
    // post_pic:<img src={`https://storage.googleapis.com/instagram-global-data-images/media/${id}.jpg`} width={300}/>,
    caption,
    followersCount,
    type: type === "Sidecar" ? "Carousel" : type,
    url,
    likesCount: likesCount === -1 ? "-" : likesCount,
    commentsCount: commentsCount === -1 ? "-" : commentsCount,
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
