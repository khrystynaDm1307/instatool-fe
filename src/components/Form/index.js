const { default: MDBox } = require("components/MDBox");
const { default: MDButton } = require("components/MDButton");

function MDForm({ children, isLoading, formData, submitBtnLabel }) {
  const resetFilters = () => {
    formData.resetForm();
  };
  return (
    <>
      {children}
      <MDBox
        mt={4}
        sx={{ width: "100%", justifyContent: "flex-end" }}
        display="flex"
      >
        <MDButton
          variant="outlined"
          color="info"
          sx={{ mr: 1 }}
          onClick={resetFilters}
        >
          Clear all filters
        </MDButton>
        <MDButton
          variant="contained"
          color="info"
          disabled={isLoading}
          type="submit"
        >
          {submitBtnLabel || "Submit"}
        </MDButton>
      </MDBox>
    </>
  );
}

export default MDForm;
