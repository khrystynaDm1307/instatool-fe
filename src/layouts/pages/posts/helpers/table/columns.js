import { Typography } from "@mui/material";
import InfluencerCell from "../../../../../components/Form/InfluencerCell";
import { Link } from "react-router-dom";

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
      <img
        src={
          params.row.gcs_picture
            ? `https://storage.googleapis.com/instagram-global-data-images/media/${params.row.id}.jpg`
            : params.row.type !== "Video"
            ? params.row.displayUrl
            : params.row.videoUrl
        }
        style={{ width: 200 }}
        alt="No picture"
      />
    ),
  },
  {
    headerName: "Post link",
    sortable: false,
    field: "url",
    width: 200,
    align: "center",
    headerAlign: "center",
    renderCell: (params) => (
      <Link to={`/posts/${params.row.id}`}>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 400,
            color: "#7b809a",
            fontSize: "0.875rem",
            ":hover": { cursor: "pointer" },
          }}
        >
          Post page
        </Typography>
      </Link>
    ),
  },
  {
    headerName: "Caption",
    field: "caption",
    width: 500,
    sortable: false,
  },
  {
    headerName: "Likes Count",
    field: "likesCount",
    align: "center",
    sortable: false,
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
      let engagement = 0;
      if (likesCount === -1 && commentsCount === -1) {
        return "-";
      }
      if (likesCount > 0) {
        engagement += likesCount;
      }
      if (commentsCount > 0) {
        engagement += commentsCount;
      }
      engagement += videoPlayCount + videoViewCount;
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
      if (!followersCount) return "-";

      let engagement = 0;

      if (likesCount === -1 && commentsCount === -1) {
        return "-";
      }
      if (likesCount > 0) {
        engagement += likesCount;
      }
      if (commentsCount > 0) {
        engagement += commentsCount;
      }
      engagement += videoPlayCount + videoViewCount;
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
    valueGetter: (params) => {
      return params.value?.map((hash) => `#${hash.name} `)?.join("");
    },
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
