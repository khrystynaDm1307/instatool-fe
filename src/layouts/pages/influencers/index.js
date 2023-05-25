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
import initialValues from "./schemas/initialValues";
import columns from "./helpers/table/columns";
import getRows from "./helpers/table/rowsTransorm";

// api
import influencers from "api/influencers";
import getInfluencersSchema from "./schemas/validation";
import MDForm from "components/Form";
import MD2Alert from "components/MD2Alert";
import InfluencerForm from "./components/Form";
import { transformValues } from "../posts/helpers/table/transformValues";
import MDDataGrid from "components/MDDataGrid";

function Influencers() {
  const [err, setErr] = useState();
  const [formValues, setFormValues] = useState({});

  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: 50,
  });

  const { isLoading, data, mutate } = useMutation(
    "influencers",
    influencers.getInfluencers
  );

  console.log(data);

  const handleSubmit = (values, handlers) => {
    const params = { ...paginationModel, ...transformValues(values) };
    setFormValues(params);
    handleMutate(params);
    handlers?.setSubmitting(false);
  };

  const handleMutate = (params) =>
    mutate(params, { onError: (e) => setErr(true) });

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
                  <MDForm
                    isLoading={isLoading}
                    formData={formData}
                    submitBtnLabel="   Find influencers"
                  >
                    <InfluencerForm formData={formData} />
                  </MDForm>
                </Form>
              )}
            </Formik>
          </MDBox>
        </Card>

        {err && (
          <MD2Alert
            open={err}
            onClose={() => setErr(false)}
            message="Something went wrong"
            color="error"
          />
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
                    sx={{
                      width: "100%",
                      p: 2,
                      pb: 3,
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <CircularProgress />
                  </Box>
                )}
                 {data?.data && (
                  <MDBox p={1} px={2}>
                    <MDDataGrid
                      rows={data?.data?.filteredPosts?.map((post) =>
                        getRows(post)
                      )}
                      columns={columns}
                      paginationModel={paginationModel}
                      onPaginationModelChange={(values) => {
                        setPaginationModel(values);
                        handleMutate({ ...formValues, ...values });
                      }}
                      rowCount={data?.data?.totalCount}
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
