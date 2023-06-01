import { Link } from "react-router-dom";
import InfluencerCell from "../../../../../components/Form/InfluencerCell";
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
    width: 400,
  },
  { headerName: "Bio", field: "biography", width: 400, sortable: false },
  { headerName: "Email", field: "email", width: 300, sortable: false },
  {
    headerName: "Followers",
    field: "followersCount",
    align: "center",
    sortable: false,
  },

  {
    headerName: "Engagement Rate",
    field: "overall_engagement",
    width: 200,
    align: "center",
    headerAlign: "center",
    sortable: false,
    valueGetter: (params) => {
      return ((params.value / 1000) * 100).toFixed(2) + " %";
    },
  },

  {
    headerName: "Post",
    field: "lastPost",
    width: 400,
    align: "center",
    headerAlign: "center",
    sortable: false,
    renderCell: (params) => {
      return (
        <Link to={`/posts/${params.value?.id}`}>
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
            {params.value?.caption}
          </MDTypography>
        </Link>
      );
    },
  },
];

export default columns;
