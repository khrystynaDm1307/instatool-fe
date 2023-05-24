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
import { useEffect, useState } from "react";

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Snackbar from "@mui/material/Snackbar";
import { DataGrid } from "@mui/x-data-grid";

// Material Dashboard 2 PRO React components
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import MDTypography from "components/MDTypography";
import MDAlert from "components/MDAlert";

// Material Dashboard 2 PRO React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

// react-query
import { useMutation } from "react-query";

// forms data
import { Formik, Form } from "formik";
import form from "./schemas/form";
import FormField from "./components/FormField";
import initialValues from "./schemas/initialValues";

// api
import posts from "api/posts";
import getRows from "./helpers/table/rowsTransorm";
import columns from "./helpers/table/columns";

import {
  gridPageCountSelector,
  GridPagination,
  useGridApiContext,
  useGridSelector,
} from "@mui/x-data-grid";
import MuiPagination from "@mui/material/Pagination";

function Posts() {
  const {
    likes,
    keywords,
    mentions,
    period,
    hashtags,
    engagement,
    postType,
    username,
  } = form.formField;

  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: 50,
  });

  const [err, setErr] = useState();
  const { isLoading, data, mutate } = useMutation("posts", posts.getPosts);
  const [rowCountState, setRowCountState] = useState(data?.data?.count || 0);
  const [formValues, setFormValues] = useState({});

  function Pagination({ page, onPageChange, className }) {
    const apiRef = useGridApiContext();
    const pageCount = useGridSelector(apiRef, gridPageCountSelector);

    return (
      <MuiPagination
        color="info"
        className={className}
        count={pageCount}
        page={page + 1}
        onChange={(event, newPage) => {
          onPageChange(event, newPage - 1);
        }}
      />
    );
  }

  function CustomPagination(props) {
 
    return <GridPagination ActionsComponent={Pagination} {...props} />;
  }

  const handleSubmit = (values, handlers) => {
    const params = { ...paginationModel };

    for (const key in values) {
      params[key] =
        values[key] === "any" || values[key] === "" || values[key] === []
          ? null
          : values[key];
    }
    setFormValues(params);
    handleMutate(params);
    handlers?.setSubmitting(false);
  };

  const resetFilters = (formData) => {
    formData.resetForm();
  };

  const handleMutate = (params) =>
    mutate(params, { onError: (e) => setErr(true) });

  useEffect(() => {
    setRowCountState((prevRowCountState) =>
      data?.data?.count !== undefined ? data?.data?.count : prevRowCountState
    );
  }, [data?.data?.count, setRowCountState, paginationModel]);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <Card>
          <MDBox mb={3} p={2}>
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
              {(formData) => (
                <Form id={form.formId} autoComplete="off">
                  <Grid container spacing={3}>
                    <Grid item xs={12}>
                      <FormField {...{ ...username, formData }} />
                    </Grid>
                  </Grid>
                  <Grid container spacing={3} mt={1}>
                    <Grid item xs={12} sm={6}>
                      <FormField {...{ ...likes, formData }} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <FormField {...{ ...keywords, formData }} />
                    </Grid>
                  </Grid>
                  <Grid container spacing={3} mt={1}></Grid>

                  <Grid container spacing={3} mt={1}>
                    <Grid item xs={12} sm={4}>
                      <FormField {...{ ...engagement, formData }} />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <FormField {...{ ...period, formData }} />
                    </Grid>
                    <Grid item xs={12} sm={4}>
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

                  <MDBox
                    mt={4}
                    sx={{ width: "100%", justifyContent: "flex-end" }}
                    display="flex"
                  >
                    <MDButton
                      variant="outlined"
                      color="info"
                      sx={{ mr: 1 }}
                      onClick={() => resetFilters(formData)}
                    >
                      Clear all filters
                    </MDButton>
                    <MDButton
                      variant="contained"
                      color="info"
                      disabled={isLoading}
                      type="submit"
                    >
                      Find posts
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
                  <MDTypography variant="h5" fontWeight="medium">
                    Posts
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
                    <DataGrid
                      rows={data?.data?.data?.map((post) => getRows(post))}
                      columns={columns}
                      paginationModel={paginationModel}
                      pageSizeOptions={[10, 50, 100]}
                      paginationMode="server"
                      disableRowSelectionOnClick
                      onPaginationModelChange={(values) => {
                        setPaginationModel(values);
                        handleMutate({ ...formValues, ...values });
                      }}
                      loading={isLoading}
                      rowCount={rowCountState}
                      getRowHeight={() => "auto"}
                      sx={{
                        "& .MuiDataGrid-columnHeaderTitle": {
                          color: "dark.main",
                          fontSize: "0.9rem",
                        },
                        "& .MuiDataGrid-row": {
                          color: "text.main",
                          fontSize: "0.875rem",
                        },
                        "& .MuiDataGrid-cell": {
                          padding: "15px 15px 15px 0",
                        },
                        borderWidth: 0,
                      }}
                      pagination
                      // slots={{
                      //   pagination: CustomPagination,
                      // }}
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

export default Posts;
