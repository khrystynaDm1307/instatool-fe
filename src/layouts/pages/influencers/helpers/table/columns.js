const columns = [
  { Header: "Influencer", accessor: "user", width: "25%" },
  { Header: "Followers", accessor: "followersCount", width: "15%" },
  {
    Header: "Total Engagement",
    accessor: "total_engagement",
    width: "10%",
  },
  {
    Header: "Engagement Rate",
    accessor: "overall_engagement",
    width: "10%",
  },
  { Header: "Biography", accessor: "biography", width: "10%" },
  { Header: "Email", accessor: "email", width: "10%" },
];

export default columns;
