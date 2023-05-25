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
  } = owner;

  return {
    overall_engagement:overall_engagement,
    followersCount,
    email,
    biography,
    user: { ownerUsername, ownerFullName, verified, url },
    id: ownerUsername,
    url,
  };
};

export default getRows;
