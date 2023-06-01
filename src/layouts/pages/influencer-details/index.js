import { Box, Card, CircularProgress, Grid, Typography } from "@mui/material";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";
import EngagementChart from "./EngagementChart";
import kal from "assets/images/kal-visuals-square.jpg";

import ComplexProjectCard from "examples/Cards/ProjectCards/ComplexProjectCard";
import { similarData } from "./data";
import MDAvatar from "components/MDAvatar";
import burceMars from "assets/images/bruce-mars.jpg";
import { useQuery } from "react-query";
import posts from "api/posts";
import { useParams } from "react-router-dom";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import Chart from "../widgets/components/Chart";
import caloriesChartData from "../widgets/data/caloriesChartData";

// Material Dashboard 2 PRO React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import ProfileInfoCard from "examples/Cards/InfoCards/ProfileInfoCard";
import DefaultProjectCard from "examples/Cards/ProjectCards/DefaultProjectCard";

// Images
import homeDecor1 from "assets/images/home-decor-1.jpg";
import homeDecor2 from "assets/images/home-decor-2.jpg";
import homeDecor3 from "assets/images/home-decor-3.jpg";
import homeDecor4 from "assets/images/home-decor-4.jpeg";
import team1 from "assets/images/team-1.jpg";
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";
import InfluencerPostsForm from "./Form";
import influencers from "api/influencers";
import PostPrevCard from "examples/Cards/PostPrevCard";

function InfluencerDetails() {
  const params = useParams();

  const { data, isLoading, error } = useQuery("influencer", async () =>
    influencers.getInfluencer(params.username)
  );

  const {
    ownerUsername,
    ownerFullName,
    biography,
    email,
    followersCount,
    followsCount,
    postsCount,
    posts,
    totalComments,
    totalLikes,
    videoPlays,
    videoViews,
  } = data?.data?.influencer || {};

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
      {data && data?.data?.influencer === null && (
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
          No influencer found
        </Box>
      )}
      {!isLoading && !error && data?.data?.influencer && (
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
                  description={biography}
                  info={{
                    fullName: ownerFullName,
                    mobile: "(44) 123 1234 123",
                    email: email || "-",
                    location: "USA",
                  }}
                  shadow={false}
                  data={[
                    { label: "Posts", value: postsCount },
                    { label: "Reels", value: 12 },
                    { label: "Followers", value: followersCount },
                    { label: "Followings", value: followsCount },
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
                      count={totalLikes}
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
                      count={totalComments}
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
                <EngagementChart
                  {...({
                    likesCount: totalLikes,
                    commentsCount: totalComments,
                    videoPlayCount: videoPlays,
                    videoViewCount: videoViews,
                    owner: { followersCount },
                  } || {})}
                />
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
          <Box mt={6}>
            <InfluencerPostsForm />
          </Box>
          <MDBox p={2} mt={6} mb={4}>
            <MDTypography variant="h6" mb={4}>
              Posts
            </MDTypography>
            <Grid container spacing={6}>
              {posts?.map((post) => {
                return (
                  <Grid item xs={12} md={6} xl={3}>
                    <PostPrevCard
                      image={homeDecor1}
                      mentions={[...post.mentions, ...post.tagged_accounts]}
                      hashtags={post.hashtags}
                      metrics={[
                        { label: "Likes", value: post.likesCount },
                        { label: "Comments", value: post.commentsCount },
                        {
                          label: "Eng.rate",
                          value: `${(post.eng_rate * 100).toFixed(1)}%`,
                        },
                      ]}
                      action={{
                        type: "internal",
                        route: `/posts/${post.id}`,
                        color: "dark",
                        label: "view post",
                      }}
                      authors={[
                        { image: team1, name: "Elena Morison" },
                        { image: team2, name: "Ryan Milly" },
                        { image: team3, name: "Nick Daniel" },
                        { image: team4, name: "Peterson" },
                      ]}
                    />
                  </Grid>
                );
              })}
            </Grid>
          </MDBox>
        </Card>
      )}
    </DashboardLayout>
  );
}
export default InfluencerDetails;
