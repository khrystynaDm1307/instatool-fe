import InfluencerCell from "../../../../../components/Form/InfluencerCell";

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
      return (params.value * 100).toFixed(2) + " %";
    },
  },
];

export default columns;
