const getRows = (owner) => {
  const {
    engagement,
    followersCount,
    profilePicUrl,
    email,
    biography,
    ownerUsername,
    ownerFullName,
    id,
    url,
    verified,
    posts,
  } = owner;

  return {
    overall_engagement: followersCount ? engagement / followersCount : null,
    followersCount,
    email,
    biography,
    user: { ownerUsername, ownerFullName, verified, url, profilePicUrl },
    id: ownerUsername,
    url,
    lastPost: posts.sort(
      (a, b) => new Date(b.timestamp) - new Date(a.timestamp)
    )[0],
  };
};

export default getRows;
