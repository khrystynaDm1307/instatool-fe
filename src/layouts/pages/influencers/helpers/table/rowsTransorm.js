const getRows = (owner) => {
  const {
    overall_engagement,
    followersCount,
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
    overall_engagement: overall_engagement,
    followersCount,
    email,
    biography,
    user: { ownerUsername, ownerFullName, verified, url },
    id: ownerUsername,
    url,
    lastPost: posts.sort(
      (a, b) => new Date(b.timestamp) - new Date(a.timestamp)
    )[0],
  };
};

export default getRows;
