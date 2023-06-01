import { Box, Card, CircularProgress, Grid, Typography } from "@mui/material";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import SalesByCountry from "layouts/dashboards/analytics/components/SalesByCountry";
import EngagementChart from "./EngagementChart";
import PostsCard from "examples/Cards/PostCard";
import booking1 from "assets/images/products/product-1-min.jpg";
import kal from "assets/images/kal-visuals-square.jpg";

import ComplexProjectCard from "examples/Cards/ProjectCards/ComplexProjectCard";
import { sentiment, similarData } from "./data";
import MDAvatar from "components/MDAvatar";
import burceMars from "assets/images/bruce-mars.jpg";
import { useQuery } from "react-query";
import posts from "api/posts";
import { useParams } from "react-router-dom";
import ProfileInfoCard from "examples/Cards/InfoCards/ProfileInfoCard";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import Chart from "../widgets/components/Chart";
import caloriesChartData from "../widgets/data/caloriesChartData";

function InfluencerDetails() {
  const params = useParams();

  const { data, isLoading, error } = useQuery("post-id", async () =>
    posts.getPostById(params.username)
  );

  const {
    caption,
    type,
    location,
    timestamp,
    owner,
    hashtags,
    mentions,
    likesCount,
    commentsCount,
    videoViewCount: videoViews,
    videoPlayCount: videoPlays,
    tagged_accounts,
  } = data?.data?.post || {};
  const { ownerUsername, ownerFullName, biography, email, followersCount } =
    owner || {};
  console.log({ data });

  return (
    <DashboardLayout>
      <DashboardNavbar />
      {isLoading && (
        <Box
          sx={{
            width: "100%",
            height: "calc(100vh - 300px)",
            p: 2,
            pb: 3,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress />
        </Box>
      )}
      {data && data?.data?.post === null && (
        <Box
          sx={{
            width: "100%",
            height: "calc(100vh - 300px)",
            p: 2,
            pb: 3,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          No post found
        </Box>
      )}
      {!isLoading && !error && data?.data?.post && (
        <Card sx={{ py: 3, px: 6 }}>
          <Typography variant="h4" mb={8}>
            Influencer
          </Typography>

          <Grid container spacing={6}>
            <Grid item lg={5} md={12}>
              <Box>
                <MDBox display="flex" alignItems="center" mb={3}>
                  <MDAvatar
                    src={burceMars}
                    alt="profile-image"
                    size="xl"
                    shadow="sm"
                  />
                  <MDBox height="100%" mt={0.5} lineHeight={1} ml={3}>
                    <MDTypography variant="h5" fontWeight="medium">
                      {ownerFullName || ownerUsername}
                    </MDTypography>
                    <MDTypography
                      variant="button"
                      color="text"
                      fontWeight="regular"
                    >
                      {ownerFullName ? `@${ownerUsername}` : "CEO / Co-Founder"}
                    </MDTypography>
                  </MDBox>
                </MDBox>
              </Box>

              <Box>
                <ProfileInfoCard
                  title="Biography"
                  description="Hi, I’m Alec Thompson, Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality)."
                  info={{
                    fullName: "Alec M. Thompson",
                    mobile: "(44) 123 1234 123",
                    email: "alecthompson@mail.com",
                    location: "USA",
                  }}
                  shadow={false}
                  data={[
                    { label: "Posts", value: 12 },
                    { label: "Reels", value: 12 },
                    { label: "Followers", value: 12 },
                    { label: "Followings", value: 12 },
                  ]}
                  social={[
                    {
                      link: "https://www.facebook.com/CreativeTim/",
                      icon: <FacebookIcon />,
                      color: "facebook",
                    },
                    {
                      link: "https://twitter.com/creativetim",
                      icon: <TwitterIcon />,
                      color: "twitter",
                    },
                    {
                      link: "https://www.instagram.com/creativetimofficial/",
                      icon: <InstagramIcon />,
                      color: "instagram",
                    },
                  ]}
                />
              </Box>

              <Chart
                title="Engagement growth last 3 months"
                count={97}
                percentage={{ color: "success", label: "+5%" }}
                chart={caloriesChartData}
              />
            </Grid>

            <Grid item lg={7} md={12}>
              <Typography variant="h5">Total Engagement</Typography>
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
                      color="dark"
                      count={likesCount === -1 ? "-" : likesCount || "-"}
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
                      color="dark"
                      count={commentsCount === -1 ? "-" : commentsCount || "-"}
                      percentage={{
                        color: "success",
                        amount: "+3%",
                        label: "than last month",
                      }}
                    />
                  </MDBox>
                </Grid>
                {(videoPlays || videoPlays === 0) && (
                  <Grid item xs={12} md={6} lg={6}>
                    <MDBox mb={1.5}>
                      <ComplexStatisticsCard
                        icon="store"
                        title="Plays"
                        color="dark"
                        count={videoPlays || "-"}
                      />
                    </MDBox>
                  </Grid>
                )}
                {(videoViews || videoViews === 0) && (
                  <Grid item xs={12} md={6} lg={6}>
                    <MDBox mb={1.5}>
                      <ComplexStatisticsCard
                        icon="person_add"
                        title="Video Views"
                        color="dark"
                        count={videoViews || "-"}
                      />
                    </MDBox>
                  </Grid>
                )}
              </Grid>
              <Box>
                <EngagementChart {...(data?.data?.post || {})} />
              </Box>
            </Grid>
          </Grid>

          <Box sx={{ mt: 8 }}>
            <MDTypography variant="h6">Similar profiles</MDTypography>
            <Grid container spacing={3} mt={3} rowSpacing={6}>
              {similarData.map((item) => (
                <Grid item lg={4} md={6} xs={12} key={item.name}>
                  <ComplexProjectCard
                    image={kal}
                    title={item.name}
                    description={item.description}
                    members={item.members}
                  />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Card>
      )}
    </DashboardLayout>
  );
}
export default InfluencerDetails;
