import { Box, Card, Grid, Typography } from "@mui/material";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";
import DefaultDoughnutChart from "examples/Charts/DoughnutCharts/DefaultDoughnutChart";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import SalesByCountry from "layouts/dashboards/analytics/components/SalesByCountry";
import defaultDoughnutChartData from "../charts/data/defaultDoughnutChartData";
import EngagementChart from "./EngagementChart";

function SinglePost() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Card sx={{ py: 3, px: 3 }}>
        <Typography variant="h4">Post</Typography>

        <Grid container>
          <Grid item lg={5}></Grid>
          <Grid item lg={7}>
            <Typography variant="h6">Engagement</Typography>
            <MDTypography
              component="p"
              variant="button"
              color="text"
              mb={4}
              mt={1}
            >
              Insights of the performance of this post
            </MDTypography>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6} lg={6}>
                <MDBox mb={1.5}>
                  <ComplexStatisticsCard
                    icon="weekend"
                    title="Likes"
                    count={281}
                    percentage={{
                      color: "success",
                      amount: "+55%",
                      label: "than lask week",
                    }}
                  />
                </MDBox>
              </Grid>
              <Grid item xs={12} md={6} lg={6}>
                <MDBox mb={1.5}>
                  <ComplexStatisticsCard
                    icon="leaderboard"
                    title="Comments"
                    count="2,300"
                    percentage={{
                      color: "success",
                      amount: "+3%",
                      label: "than last month",
                    }}
                  />
                </MDBox>
              </Grid>
              <Grid item xs={12} md={6} lg={6}>
                <MDBox mb={1.5}>
                  <ComplexStatisticsCard
                    icon="store"
                    title="Plays"
                    count="34k"
                    percentage={{
                      color: "success",
                      amount: "+1%",
                      label: "than yesterday",
                    }}
                  />
                </MDBox>
              </Grid>
              <Grid item xs={12} md={6} lg={6}>
                <MDBox mb={1.5}>
                  <ComplexStatisticsCard
                    icon="person_add"
                    title="Views"
                    count="+91"
                    percentage={{
                      color: "success",
                      amount: "",
                      label: "Just updated",
                    }}
                  />
                </MDBox>
              </Grid>
            </Grid>
            <Box>
              <EngagementChart />
            </Box>
          </Grid>
        </Grid>

        <Box sx={{ mt: 6 }}>
          <SalesByCountry />
        </Box>
      </Card>
    </DashboardLayout>
  );
}
export default SinglePost;
