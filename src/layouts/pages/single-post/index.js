import { Box, Card, Grid, Typography } from "@mui/material";
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

const info = {
  fullName: "Alec M. Thompson",
  mobile: "(44) 123 1234 123",
  email: "alecthompson@mail.com",
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
    <MDTypography variant="button" fontWeight="bold" textTransform="capitalize">
      {label}: &nbsp;
    </MDTypography>
    <MDTypography variant="button" fontWeight="regular" color="text">
      &nbsp;{values[key]}
    </MDTypography>
  </MDBox>
));

function SinglePost() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Card sx={{ py: 3, px: 6 }}>
        <Typography variant="h4" mb={3}>
          Post
        </Typography>

        <Grid container spacing={6}>
          <Grid item lg={6}>
            <PostsCard
              image={booking1}
              title="Cozy 5 Stars Apartment"
              description='The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Barcelona.'
              price="$899/night"
              location="Barcelona, Spain"
            />
          </Grid>
          <Grid item lg={6}>
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
        <Box sx={{ mt: 8 }}>
          <SalesByCountry />
        </Box>

        <Box sx={{ mt: 8 }}>
          <Grid container>
            <Grid item lg={6}>
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

              <MDTypography variant="h6" mt={6}>
                #Hashtags
              </MDTypography>
              <MDTypography variant="h6" mt={1} fontSize="0.875rem">
                asos, fashion, zara_style, mango_fashion, clothing
              </MDTypography>
            </Grid>
            <Grid item lg={6}>
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
                    Richard Davis
                  </MDTypography>
                  <MDTypography
                    variant="button"
                    color="text"
                    fontWeight="regular"
                  >
                    CEO / Co-Founder
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
                  If you cant decide, the answer is no. If two equally difficult
                  paths, choose the one more painful in the short term pain
                  avoidance is creating an illusion of equality.
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
    </DashboardLayout>
  );
}
export default SinglePost;
