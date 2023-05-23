const columns = [
  { Header: "Influencer", accessor: "user", width: "25%" },
  { Header: "Followers", accessor: "followersCount", width: "15%" },
  {
    Header: "Engagement",
    accessor: "engagement",
    width: "10%",
  },
  {
    Header: "Engagement Rate",
    accessor: "engagement_rate",
    width: "10%",
  },
  // { Header: "Post", accessor: "post_pic", width: "10%" },
  { Header: "Caption", accessor: "caption", width: "10%" },
  { Header: "Email", accessor: "email", width: "10%" },
  { Header: "Type", accessor: "type", width: "10%" },
  { Header: "Likes Count", accessor: "likesCount", width: "10%" },
  { Header: "Comments Count", accessor: "commentsCount", width: "10%" },
  { Header: "Date", accessor: "timestamp", width: "10%" },
  { Header: "Location", accessor: "locationName", width: "10%" },
  { Header: "Hashtags", accessor: "hashtags", width: "10%" },
  { Header: "Mentions", accessor: "mentions", width: "10%" },
  { Header: "Video plays", accessor: "videoPlayCount", width: "10%" },
  { Header: "Video views", accessor: "videoViewCount", width: "10%" },
];

export default columns;
