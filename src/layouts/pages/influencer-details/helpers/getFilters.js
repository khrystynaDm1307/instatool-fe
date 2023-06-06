export function getFilters(posts) {
  let allMentions = [];
  let allhashtags = [];
  let allLocations = [];
  let allTypes = [];
  let allLangs = [];

  posts.forEach((post) => {
    const {
      mentions,
      hashtags,
      locationName,
      tagged_accounts,
      type,
      language,
    } = post;
    allMentions = [
      ...allMentions,
      ...mentions.map((m) => m.id),
      ...tagged_accounts.map((m) => m.username),
    ];

    allhashtags = [...allhashtags, ...hashtags.map((m) => m.id)];

    if (locationName) {
      allLocations.push(locationName);
    }

    if (language) allLangs.push(language);

    allTypes.push(type);
  });

  allMentions = Array.from(new Set(allMentions));
  allhashtags = Array.from(new Set(allhashtags));
  allLocations = Array.from(new Set(allLocations));
  allTypes = Array.from(new Set(allTypes));
  allLangs = Array.from(new Set(allLangs));

  return { allMentions, allLocations, allhashtags, allTypes, allLangs };
}
