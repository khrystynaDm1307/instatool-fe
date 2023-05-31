import { Typography } from "@mui/material";
import InfluencerCell from "../../../../../components/Form/InfluencerCell";
import { Link } from "react-router-dom";
import MDTypography from "components/MDTypography";

const columns = [
  {
    headerName: "Influencer",
    field: "user",
    sortable: false,
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
  { headerName: "Email", field: "email", width: 300, sortable: false },
  {
    headerName: "Followers",
    field: "followersCount",
    align: "center",
    sortable: false,
  },
  {
    headerName: "Post",
    field: "post_pic",
    sortable: false,
    width: 300,
    renderCell: (params) => (
      <Link to={`/posts/${params.row.id}`}>
        <img
          src={
            params.row.gcs_picture
              ? `https://storage.googleapis.com/instagram-global-data-images/media/${params.row.id}.jpg`
              : params.row.type !== "Video"
              ? params.row.displayUrl
              : params.row.videoUrl
          }
          style={{ width: 100 }}
          alt="No picture"
        />
      </Link>
    ),
  },
  {
    headerName: "Caption",
    field: "caption",
    width: 500,
    sortable: false,
    renderCell: (params) => (
      <Link to={`/posts/${params.row.id}`}>
        <MDTypography
          variant="button"
          color="text"
          sx={{
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: "3",
            overflow: "hidden",
          }}
        >
          {params.row.caption}
        </MDTypography>
      </Link>
    ),
  },
  {
    headerName: "Likes",
    field: "likesCount",
    align: "center",
    sortable: false,
    valueGetter: (params) => (params.value === -1 ? "-" : params.value),
  },
  {
    headerName: "Engagement",
    field: "engagement",
    align: "center",
    sortable: false,
    valueGetter: (params) => {
      const {
        likesCount,
        commentsCount,
        videoViewCount = 0,
        videoPlayCount = 0,
      } = params.row;

      const engagement =
        videoPlayCount + videoViewCount + likesCount + commentsCount;
      return engagement;
    },
  },
  {
    headerName: "Engagement Rate",
    field: "engagement_rate",
    width: 200,
    align: "center",
    headerAlign: "center",
    sortable: false,
    valueGetter: (params) => {
      const {
        likesCount,
        commentsCount,
        followersCount,
        videoViewCount = 0,
        videoPlayCount = 0,
      } = params.row;
      if (!followersCount) return "0.00 %";

      const engagement =
        videoPlayCount + videoViewCount + likesCount + commentsCount;

      const eng_persent = (engagement / followersCount) * 100;
      return eng_persent.toFixed(2) + " %";
    },
  },
  {
    headerName: "Mentions",
    field: "mentions",
    width: 400,
    sortable: false,
    valueGetter: (params) => {
      return params.value?.map((men) => `@${men.username} `)?.join("");
    },
  },
  {
    headerName: "Hashtags",
    field: "hashtags",
    sortable: false,
    width: 400,
    renderCell: (params) => (
      <Link to={`/posts/${params.row.id}`}>
        <MDTypography
          variant="button"
          color="text"
          sx={{
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: "3",
            overflow: "hidden",
          }}
        >
          {params.row.hashtags?.map((hash) => `#${hash.name} `)?.join("")}
        </MDTypography>
      </Link>
    ),
  },

  { headerName: "Type", field: "type", align: "center", sortable: false },
  {
    headerName: "Location",
    field: "locationName",
    width: 300,
    sortable: false,
  },
  {
    headerName: "Published",
    field: "timestamp",
    width: 300,
    sortable: false,
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
  {
    headerName: "Video plays",
    field: "videoPlayCount",
    align: "center",
    sortable: false,
  },
  {
    headerName: "Video views",
    field: "videoViewCount",
    align: "center",
    sortable: false,
  },
];

export default columns;
