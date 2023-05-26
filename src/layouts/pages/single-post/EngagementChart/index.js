/**
=========================================================
* Material Dashboard 2 PRO React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-pro-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Card from "@mui/material/Card";
import Tooltip from "@mui/material/Tooltip";
import Icon from "@mui/material/Icon";
import Grid from "@mui/material/Grid";

// Material Dashboard 2 PRO React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
import MDBadgeDot from "components/MDBadgeDot";
import PieChart from "examples/Charts/PieChart";

// Data
import channelChartData from "layouts/dashboards/sales/components/ChannelsChart/data";

// Material Dashboard 2 PRO React contexts
import { useMaterialUIController } from "context";
import DefaultDoughnutChart from "examples/Charts/DoughnutCharts/DefaultDoughnutChart";
import defaultDoughnutChartData from "layouts/pages/charts/data/defaultDoughnutChartData";
import { Doughnut } from "react-chartjs-2";
import configs from "examples/Charts/DoughnutCharts/DefaultDoughnutChart/configs";

function EngagementChart({
  likesCount,
  owner,
  commentsCount,
  videoPlayCount: videoPlays,
  videoViewCount: videoViews,
}) {
  const [controller] = useMaterialUIController();
  const { darkMode } = controller;
  const { data, options } = configs(
    [],
    {
      label: "Projects",
      backgroundColors: [
        "info",
        "primary",
        "warning",
        "secondary",
        "success",
        "warning",
      ],
      data: [15, 20, 12, 30, 30],
    },
    120
  );
  return (
    <Card sx={{ height: "100%", p: 2 }}>
      <MDBox
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        px={2}
      >
        <MDTypography variant="h6">Engagement</MDTypography>
        <Tooltip title="See traffic channels" placement="bottom" arrow>
          <MDButton
            variant="outlined"
            color="secondary"
            size="small"
            circular
            iconOnly
          >
            <Icon>priority_high</Icon>
          </MDButton>
        </Tooltip>
      </MDBox>
      <MDBox mt={3}>
        <Grid container alignItems="center">
          <Grid item xs={5}>
            <Doughnut data={data} options={options} />
          </Grid>
          <Grid item xs={7}>
            <MDBox pr={1}>
              <MDBox mb={1}>
                <MDBadgeDot
                  color="primary"
                  size="md"
                  badgeContent="Followers"
                  font={{ weight: "bold" }}
                  value={owner.followersCount || "-"}
                />
              </MDBox>
              <MDBox mb={1}>
                <MDBadgeDot
                  color="dark"
                  size="md"
                  badgeContent="Likes"
                  font={{ weight: "bold" }}
                  value={likesCount === -1 ? "-" : likesCount || "-"}
                />
              </MDBox>
              <MDBox mb={1}>
                <MDBadgeDot
                  color="info"
                  size="md"
                  badgeContent="Comments"
                  font={{ weight: "bold" }}
                  value={commentsCount === -1 ? "-" : commentsCount || "-"}
                />
              </MDBox>
              <MDBox mb={1}>
                <MDBadgeDot
                  color="success"
                  size="md"
                  badgeContent="Plays"
                  font={{ weight: "bold" }}
                  value={videoPlays || "-"}
                />
              </MDBox>
              <MDBox mb={1}>
                <MDBadgeDot
                  color="warning"
                  size="md"
                  badgeContent="Views"
                  font={{ weight: "bold" }}
                  value={videoViews || "-"}
                  noBorder
                />
              </MDBox>
            </MDBox>
          </Grid>
        </Grid>
      </MDBox>
    </Card>
  );
}

export default EngagementChart;
