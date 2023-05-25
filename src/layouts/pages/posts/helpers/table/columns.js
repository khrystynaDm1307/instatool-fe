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
  {
    headerName: "Post",
    field: "post_pic",
    width: 300,
    renderCell: (params) => (
      <img
        src={`https://storage.googleapis.com/instagram-global-data-images/media/${params.row.id}.jpg`}
        style={{ width: 200 }}
      />
    ),
  },
  {
    headerName: "Post link",
    field: "url",
    width: 200,
    renderCell: (params) => (
      <a href={params.value} target="_blanck">
        <Typography
          variant="h6"
          sx={{
            fontWeight: 400,
            color: "#7b809a",
            textDecoration: "underline",
          }}
        >
          Post page
        </Typography>{" "}
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
    valueGetter: (params) => {
      return params.row.likesCount + params.row.commentsCount;
    },
  },
  {
    headerName: "Engagement Rate",
    field: "engagement_rate",
    width: 200,
    align: "center",
    headerAlign: "center",
    valueGetter: (params) => {
      const { likesCount, commentsCount, followersCount } = params.row;
      const engagement_rate =
        ((likesCount || 0) + (commentsCount || 0) * 100) / (followersCount || 1);
      return engagement_rate.toFixed(2) + ' %';
    },
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
