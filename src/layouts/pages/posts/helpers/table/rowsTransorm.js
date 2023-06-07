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
    displayUrl,
    videoUrl,
    tagged_accounts,
  } = post;

  const { email, followersCount } = owner;

  return {
    ...post,
    user: owner,
    engagement,
    displayUrl,
    tagged_accounts,
    videoUrl,
    shortCode,
    engagement_rate: followersCount
      ? (engagement / followersCount).toFixed(2)
      : "-",
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
    displayUrl: displayUrl || videoUrl,
  };
};

export default getRows;
