import { Typography } from "@mui/material";
import InfluencerCell from "../../components/InfluencerCell";

const columns = [
  {
    headerName: "Influencer",
    field: "user",
    renderCell: (params) => {
      return (
        <InfluencerCell
          fullName={params.row.user.ownerFullName}
          username={params.row.user.ownerUsername}
          verified={params.row.user.verified}
          url={params.row.user.url}
        />
      );
    },
    width: 300,
  },
  { headerName: "Email", field: "email", width: 300 },
  { headerName: "Followers", field: "followersCount", align: "center" },
  // { headerName: "Post", field: "post_pic", width: "10%" },
  {
    headerName: "Post link",
    field: "url",
    width: 200,
    renderCell: (params) => (
      <a href={params.value}>
        <Typography variant="h6" sx={{fontWeight:400}}>Post page</Typography>{" "}
      </a>
    ),
  },
  {
    headerName: "Caption",
    field: "caption",
    width: 500,
  },
  { headerName: "Likes Count", field: "likesCount", align: "center" },
  {
    headerName: "Engagement",
    field: "engagement",
    align: "center",
  },
  {
    headerName: "Engagement Rate",
    field: "engagement_rate",
    width: 200,
    align: "center",
  },
  {
    headerName: "Mentions",
    field: "mentions",
    width: 400,
    valueGetter: (params) => {
      return params.value?.map((men) => `@${men.username} `)?.join("");
    },
  },
  {
    headerName: "Hashtags",
    field: "hashtags",
    width: 400,
    valueGetter: (params) => {
      return params.value?.map((hash) => `#${hash.name} `)?.join("");
    },
  },

  { headerName: "Type", field: "type", align: "center" },
  {
    headerName: "Location",
    field: "locationName",
    width: 300,
 
  },
  {
    headerName: "Published",
    field: "timestamp",
    width: 300,
    valueGetter: (params) => {
      const date = new Date(params.value);
      const locale = Intl.DateTimeFormat().resolvedOptions().locale;
      const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      return Intl.DateTimeFormat(locale, {
        dateStyle: "medium",
        timeStyle: "medium",
        timeZone,
      }).format(date);
    },
  },
  { headerName: "Video plays", field: "videoPlayCount", align: "center" },
  { headerName: "Video views", field: "videoViewCount", align: "center" },
];

export default columns;
