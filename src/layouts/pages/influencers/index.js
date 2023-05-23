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

// React tools
import { useState } from "react";

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Snackbar from "@mui/material/Snackbar";

// Material Dashboard 2 PRO React components
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import MDTypography from "components/MDTypography";
import MDAlert from "components/MDAlert";

// Material Dashboard 2 PRO React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";

// react-query
import { useMutation } from "react-query";

// forms data
import { Formik, Form } from "formik";
import form from "./schemas/form";
import FormField from "./components/FormField";
import initialValues from "./schemas/initialValues";
import columns from "./helpers/table/columns";
import getRows from "./helpers/table/rowsTransorm";

// api
import influencers from "api/influencers";
import getInfluencersSchema from "./schemas/validation";

function Influencers() {
  const {
    followers,
    verified,
    bio,
    keywords,
    mentions,
    language,
    hashtags,
    lastPost,
    engagement,
    overallEngagement,
    postType,
    contacts,
    username,
  } = form.formField;

  const [err, setErr] = useState();
  const { isLoading, data, mutate } = useMutation("influencers", influencers.getInfluencers);
  console.log(data);
  const handleSubmit = (values, handlers) => {
    const params = {};

    for (const key in values) {
      params[key] =
        values[key] === "any" || values[key] === "" || values[key] === [] ? null : values[key];
    }

    mutate(params, { onError: (e) => setErr(true) });
    handlers.setSubmitting(false);
  };

  const resetFilters = (formData) => {
    formData.resetForm();
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <Card>
          <MDBox mb={3} p={2}>
            <Formik
              initialValues={initialValues}
              onSubmit={handleSubmit}
              validationSchema={getInfluencersSchema}
            >
              {(formData) => (
                <Form id={form.formId} autoComplete="off">
                  <Grid container spacing={3}>
                    <Grid item xs={12}>
                      <FormField {...{ ...username, formData }} />
                    </Grid>
                  </Grid>

                  <Grid container spacing={3} mt={1}>
                    <Grid item xs={12} sm={4}>
                      <FormField {...{ ...followers, formData }} />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <FormField {...{ ...verified, formData }} />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <FormField {...{ ...bio, formData }} />
                    </Grid>
                  </Grid>
                  <Grid container spacing={3} mt={1}>
                    <Grid item xs={12} sm={4}>
                      <FormField {...{ ...keywords, formData }} />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <FormField {...{ ...contacts, formData }} />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <FormField {...{ ...language, formData }} />
                    </Grid>
                  </Grid>

                  <Grid container spacing={3} mt={1}>
                    <Grid item xs={12} sm={3}>
                      <FormField {...{ ...overallEngagement, formData }} />
                    </Grid>
                    <Grid item xs={12} sm={3}>
                      <FormField {...{ ...engagement, formData }} />
                    </Grid>
                    <Grid item xs={12} sm={3}>
                      <FormField {...{ ...lastPost, formData }} />
                    </Grid>
                    <Grid item xs={12} sm={3}>
                      <FormField {...{ ...postType, formData }} />
                    </Grid>
                  </Grid>

                  <Grid container spacing={3} mt={1}>
                    <Grid item xs={12} sm={6}>
                      <FormField {...{ ...mentions, formData }} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <FormField {...{ ...hashtags, formData }} />
                    </Grid>
                  </Grid>

                  <MDBox mt={4} sx={{ width: "100%", justifyContent: "flex-end" }} display="flex">
                    <MDButton
                      variant="outlined"
                      color="info"
                      sx={{ mr: 1 }}
                      onClick={() => resetFilters(formData)}
                    >
                      Clear all filters
                    </MDButton>
                    <MDButton variant="contained" color="info" disabled={isLoading} type="submit">
                      Find influencers
                    </MDButton>
                  </MDBox>
                </Form>
              )}
            </Formik>
          </MDBox>
        </Card>

        {err && (
          <Snackbar
            open={err}
            autoHideDuration={6000}
            onClose={() => setErr(false)}
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
          >
            <Box>
              <MDAlert color="error" dismissible>
                Something went wrong
              </MDAlert>
            </Box>
          </Snackbar>
        )}

        {(isLoading || data) && (
          <Grid container spacing={3} mt={2}>
            <Grid item xs={12}>
              <Card>
                <MDBox pt={3} px={3}>
                  <MDTypography variant="h6" fontWeight="medium">
                    Influencers
                  </MDTypography>
                </MDBox>
                {isLoading && (
                  <Box
                    sx={{ width: "100%", p: 2, pb: 3, display: "flex", justifyContent: "center" }}
                  >
                    <CircularProgress />
                  </Box>
                )}
                {data?.data && (
                  <MDBox py={1}>
                    <DataTable
                      table={{
                        columns,
                        rows: data.data?.map((owner) => getRows(owner)),
                      }}
                      entriesPerPage={true}
                      showTotalEntries={true}
                      isSorted={true}
                      noEndBorder
                    />
                  </MDBox>
                )}
              </Card>
            </Grid>
          </Grid>
        )}
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Influencers;
