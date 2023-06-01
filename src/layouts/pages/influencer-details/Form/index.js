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

// @material-ui core components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Autocomplete from "@mui/material/Autocomplete";

// Material Dashboard 2 PRO React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Settings page components
import FormField from "layouts/pages/account/components/FormField";

// Data
import selectData from "layouts/pages/account/settings/components/BasicInfo/data/selectData";
import { ENGAGEMENT_VALUES } from "layouts/pages/influencers/schemas/values";
import { LIKES_VALUES } from "layouts/pages/posts/schemas/values";
import { LANGUAGES } from "assets/feeds/languages";

function InfluencerPostsForm({ posts }) {
  let allMentions = [];
  let allhashtags = [];
  let allLocations = [];
  let allTypes = [];
  let allLangs = [];

  posts.forEach((post) => {
    const {
      mentions,
      hashtags,
      locationName,
      tagged_accounts,
      type,
      language,
    } = post;
    allMentions = [
      ...allMentions,
      ...mentions.map((m) => m.username),
      ...tagged_accounts.map((m) => m.username),
    ];

    allhashtags = [...allhashtags, ...hashtags.map((m) => m.name)];

    if (locationName) {
      allLocations.push(locationName);
    }

    if (language) allLangs.push(language);

    allTypes.push(type);
  });

  allMentions = Array.from(new Set(allMentions));
  allhashtags = Array.from(new Set(allhashtags));
  allLocations = Array.from(new Set(allLocations));
  allTypes = Array.from(new Set(allTypes));
  allLangs = Array.from(new Set(allLangs));

  return (
    <Card id="basic-info" sx={{ overflow: "visible" }}>
      <MDBox p={3}>
        <MDTypography variant="h5">Filter posts</MDTypography>
      </MDBox>
      <MDBox component="form" pb={3} px={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Autocomplete
              defaultValue={[]}
              options={allMentions}
              multiple={true}
              renderInput={(params) => (
                <FormField
                  {...params}
                  label="Mentioned"
                  InputLabelProps={{ shrink: true }}
                />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormField label="Keywords" placeholder="Any..." />
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={4}>
                <Autocomplete
                  defaultValue={[]}
                  options={allTypes}
                  multiple={true}
                  renderInput={(params) => (
                    <FormField
                      {...params}
                      label="Post type"
                      InputLabelProps={{ shrink: true }}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={8}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={5}>
                    <Autocomplete
                      defaultValue="February"
                      options={selectData.birthDate}
                      renderInput={(params) => (
                        <FormField
                          {...params}
                          label="Post date"
                          InputLabelProps={{ shrink: true }}
                        />
                      )}
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <Autocomplete
                      defaultValue="1"
                      options={selectData.days}
                      renderInput={(params) => (
                        <FormField
                          {...params}
                          InputLabelProps={{ shrink: true }}
                        />
                      )}
                    />
                  </Grid>
                  <Grid item xs={12} sm={3}>
                    <Autocomplete
                      defaultValue="2023"
                      options={selectData.years}
                      renderInput={(params) => (
                        <FormField
                          {...params}
                          InputLabelProps={{ shrink: true }}
                        />
                      )}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Autocomplete
              defaultValue="any"
              options={LIKES_VALUES.map((e) => e.name)}
              renderInput={(params) => (
                <FormField
                  {...params}
                  label="Likes"
                  InputLabelProps={{ shrink: true }}
                />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Autocomplete
              defaultValue="any"
              options={ENGAGEMENT_VALUES.map((e) => e.name)}
              renderInput={(params) => (
                <FormField
                  {...params}
                  label="Engagement"
                  InputLabelProps={{ shrink: true }}
                />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Autocomplete
              multiple
              defaultValue={[]}
              options={allLocations}
              renderInput={(params) => (
                <FormField
                  {...params}
                  InputLabelProps={{ shrink: true }}
                  label={"Location"}
                />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Autocomplete
              multiple
              defaultValue={[]}
              options={allhashtags}
              renderInput={(params) => (
                <FormField
                  {...params}
                  InputLabelProps={{ shrink: true }}
                  label={"Hashtags"}
                />
              )}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Autocomplete
              defaultValue={[]}
              multiple
              options={allLangs.map(
                (lang) => LANGUAGES.find((l) => l.value === lang)?.name
              )}
              renderInput={(params) => (
                <FormField
                  {...params}
                  label="Language"
                  InputLabelProps={{ shrink: true }}
                />
              )}
            />
          </Grid>
        </Grid>
      </MDBox>
    </Card>
  );
}

export default InfluencerPostsForm;
