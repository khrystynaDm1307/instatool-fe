export function sortPosts(array, sort, setLoading) {
  if (!sort) return array;
  setLoading(true);
  const { type, name } = sort;
  const isASC = type === "ASC";

  let sortedArr = array;

  if (name === "likes") {
    sortedArr = array.sort((a, b) =>
      isASC ? a.likesCount - b.likesCount : b.likesCount - a.likesCount
    );
  }

  if (name === "comments") {
    sortedArr = array.sort((a, b) =>
      isASC
        ? a.commentsCount - b.commentsCount
        : b.commentsCount - a.commentsCount
    );
  }

  if (name === "plays") {
    sortedArr = array
      .filter((post) => post.videoPlayCount)
      .sort((a, b) =>
        isASC
          ? a.videoPlayCount - b.videoPlayCount
          : b.videoPlayCount - a.videoPlayCount
      );
  }

  if (name === "views") {
    sortedArr = array
      .filter((post) => post.videoViewCount)
      .sort((a, b) =>
        isASC
          ? a.videoViewCount - b.videoViewCount
          : b.videoViewCount - a.videoViewCount
      );
  }

  if (name === "engagement_rate") {
    sortedArr = array.sort((a, b) =>
      isASC ? a.eng_rate - b.eng_rate : b.eng_rate - a.eng_rate
    );
  }

  if (name === "engagement") {
    sortedArr = array.sort((a, b) => {
      const engA =
        a.likesCount +
        a.commentsCount +
        (a.videoPlayCount || 0) +
        (a.videoViewCount || 0);
      const engB =
        b.likesCount +
        b.commentsCount +
        (b.videoPlayCount || 0) +
        (b.videoViewCount || 0);
      return isASC ? engA - engB : engB - engA;
    });
  }
  setLoading(false);
  return sortedArr;
}
