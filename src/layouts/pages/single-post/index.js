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
import Sentiment from "./Sentiment";
import { grey } from "@mui/material/colors";
import MDButton from "components/MDButton";
import zara from "assets/images/zara.png";
import asos from "assets/images/asos.png";
import mango from "assets/images/mango.png";
import Mentioned from "./Mentioned";
import { useQuery } from "react-query";
import posts from "api/posts";
import { useParams } from "react-router-dom";

function SinglePost() {
  const params = useParams();

  const { data, isLoading, error } = useQuery("post-id", async () =>
    posts.getPostById(params.id)
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
    videoViews,
    videoPlays,
    tagged_accounts,
  } = data?.data?.post || {};
  const { ownerUsername, ownerFullName, biography, email, followersCount } =
    owner || {};

  const info = {
    fullName: ownerFullName,
    mobile: "(44) 123 1234 123",
    email: email || "alecthompson@mail.com",
    location: "USA",
  };

  const labels = [];
  const values = [];
  // Convert this form `objectKey` of the object key in to this `object key`
  Object.keys(info).forEach((el) => {
    if (el.match(/[A-Z\s]+/)) {
      const uppercaseLetter = Array.from(el).find((i) => i.match(/[A-Z]+/));
      const newElement = el.replace(
        uppercaseLetter,
        ` ${uppercaseLetter.toLowerCase()}`
      );

      labels.push(newElement);
    } else {
      labels.push(el);
    }
  });

  // Push the object values into the values array
  Object.values(info).forEach((el) => values.push(el));

  // Render the card info items
  const renderItems = labels.map((label, key) => (
    <MDBox key={label} display="flex" py={1} pr={2}>
      <MDTypography
        variant="button"
        fontWeight="bold"
        textTransform="capitalize"
      >
        {label}: &nbsp;
      </MDTypography>
      <MDTypography variant="button" fontWeight="regular" color="text">
        &nbsp;{values[key]}
      </MDTypography>
    </MDBox>
  ));

  console.log(data?.data);
  const mentions_arr = mentions?.map((hashtag) => `@${hashtag.username}`) || [];

  const tagged_accounts_arr =
    tagged_accounts?.map((hashtag) => `@${hashtag.username}`) || [];

  const all_mentions = Array.from(
    new Set([...mentions_arr, ...tagged_accounts_arr])
  )?.join(", ");

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
          <Typography variant="h4" mb={3}>
            Post - {type === "Sidecar" ? "Carousel" : type}
          </Typography>

          <Grid container spacing={6}>
            <Grid item lg={6}>
              <PostsCard
                image={booking1}
                description={caption}
                timestamp={timestamp}
                location={location}
                title=""
              />
            </Grid>
            <Grid item lg={6} md={12}>
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
                      count={commentsCount === -1 ? "-" : commentsCount || "-"}
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
                      count={videoPlays || "-"}
                    />
                  </MDBox>
                </Grid>
                <Grid item xs={12} md={6} lg={6}>
                  <MDBox mb={1.5}>
                    <ComplexStatisticsCard
                      icon="person_add"
                      title="Video Views"
                      count={videoViews || "-"}
                    />
                  </MDBox>
                </Grid>
              </Grid>
              <Box>
                <EngagementChart {...(data?.data?.post || {})} />
              </Box>
            </Grid>
          </Grid>
          <Box sx={{ mt: 8 }}>
            <SalesByCountry />
          </Box>

          <Box sx={{ mt: 8 }}>
            <Grid container>
              <Grid item lg={6} md={12}>
                <MDBox>
                  <MDTypography variant="h6" mb={3}>
                    Mentioned
                  </MDTypography>
                  <Mentioned
                    img={asos}
                    name="Asos"
                    followers={2500}
                    bio="Hi! I need more information.."
                  />
                  <Mentioned
                    img={zara}
                    name="Zara"
                    followers={2500}
                    bio="Hi! I need more information.."
                  />
                  <Mentioned
                    img={mango}
                    name="Mango"
                    followers={2500}
                    bio="Hi! I need more information.."
                  />
                </MDBox>

                <MDTypography variant="h6" mt={6}>
                  #Hashtags
                </MDTypography>
                <MDTypography variant="h6" mt={1} fontSize="0.875rem">
                  {hashtags?.map((hashtag) => hashtag.name)?.join(", ") || "-"}
                </MDTypography>

                <MDTypography variant="h6" mt={6}>
                  Tagged users
                </MDTypography>
                <MDTypography variant="h6" mt={1} fontSize="0.875rem" mb={2}>
                  {all_mentions}
                </MDTypography>
              </Grid>
              <Grid item lg={6} md={12}>
                <MDTypography variant="h6" mb={3}>
                  Sentiment
                </MDTypography>
                {sentiment.map((item) => (
                  <Sentiment {...item} />
                ))}
                <MDBox
                  sx={{
                    borderTop: "2px solid",
                    mt: 3,
                    pt: 2,
                    borderColor: grey[200],
                  }}
                >
                  <Sentiment
                    color="success"
                    textProps={{ fontWeight: "bold" }}
                    value={90}
                    label="Buying intentions"
                  />
                </MDBox>
                <MDBox mt={6} display="flex" justifyContent="space-between">
                  <MDTypography
                    variant="button"
                    sx={{ maxWidth: "350px" }}
                    color="text"
                  >
                    More than <span style={{ fontWeight: "bold" }}>1,500 </span>
                    people commented with a buying intent and over{" "}
                    <span style={{ fontWeight: "bold" }}>7,000</span> comments
                    were positive.
                  </MDTypography>
                  <MDButton variant="gradient" color="dark">
                    VIEW ALL COMMENTS
                  </MDButton>
                </MDBox>
              </Grid>
            </Grid>
          </Box>
          <Box sx={{ mt: 8 }}>
            <MDTypography variant="h6">Profile</MDTypography>
            <Grid container mt={3} columnSpacing={6}>
              <Grid item lg={6}>
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
                <MDTypography
                  variant="h6"
                  fontWeight="medium"
                  textTransform="capitalize"
                >
                  Bio
                </MDTypography>
                <MDBox sx={{ maxWidth: 500, lineHeight: 1 }}>
                  <MDTypography
                    variant="button"
                    color="text"
                    fontWeight="regular"
                  >
                    {biography || "-"}
                  </MDTypography>
                </MDBox>
              </Grid>
              <Grid item lg={6}>
                {renderItems}
              </Grid>
            </Grid>
          </Box>

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
export default SinglePost;
