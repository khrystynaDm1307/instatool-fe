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
import { getFilters } from "../helpers/getFilters";
import MDButton from "components/MDButton";

function InfluencerPostsForm({ posts, formik, filters, setFilters }) {
  const { allMentions, allLocations, allhashtags, allTypes, allLangs } =
    getFilters(posts);

  const handleFiltersChange = (value, name) => {
    setFilters({ ...filters, [name]: value });
  };

  return (
    <Card id="basic-info" sx={{ overflow: "visible" }}>
      <MDBox p={3}>
        <MDTypography variant="h5">Filter posts</MDTypography>
      </MDBox>
      <MDBox component="form" pb={3} px={3} onSubmit={formik.handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Autocomplete
              defaultValue={[]}
              value={filters.mentions}
              onChange={(e, value) => handleFiltersChange(value, "mentions")}
              name="mentions"
              options={allMentions}
              multiple={true}
              renderInput={(params) => (
                <FormField
                  {...params}
                  label="Mentioned"
                  InputLabelProps={{ shrink: true }}
                  handleChange={(e, value) => {
                    console.log(value);
                  }}
                />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormField
              label="Keywords"
              placeholder="Any..."
              value={filters.keywords}
              onChange={(e) => handleFiltersChange(e.target.value, "keywords")}
              name="keywords"
            />
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={4}>
                <Autocomplete
                  value={filters.postType}
                  onChange={(e, value) =>
                    handleFiltersChange(value, "postType")
                  }
                  name="postType"
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
                      value={filters.month}
                      onChange={(e, value) =>
                        handleFiltersChange(value, "month")
                      }
                      name="month"
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
                      value={filters.day}
                      onChange={(e, value) => handleFiltersChange(value, "day")}
                      name="day"
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
                      defaultValue="2000"
                      options={selectData.years}
                      value={filters.year}
                      onChange={(e, value) =>
                        handleFiltersChange(value, "year")
                      }
                      name="year"
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
              defaultValue="Any"
              value={filters.likes}
              onChange={(e, value) => handleFiltersChange(value, "likes")}
              name="likes"
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
              defaultValue="Any"
              options={ENGAGEMENT_VALUES.map((e) => e.name)}
              value={filters.engagement}
              onChange={(e, value) => handleFiltersChange(value, "engagement")}
              name="engagement"
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
              value={filters.locations}
              onChange={(e, value) => handleFiltersChange(value, "locations")}
              name="locations"
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
              value={filters.hashtags}
              onChange={(e, value) => handleFiltersChange(value, "hashtags")}
              name="hashtags"
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
              value={filters.lang}
              onChange={(e, value) => handleFiltersChange(value, "lang")}
              name="lang"
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
        <MDBox sx={{ width: "100%", display: "flex", justifyContent: "end" }}>
          <MDButton
            sx={{ mt: 2 }}
            variant="outlined"
            color="dark"
            type="submit"
          >
            Filter
          </MDButton>
        </MDBox>
      </MDBox>
    </Card>
  );
}

export default InfluencerPostsForm;
