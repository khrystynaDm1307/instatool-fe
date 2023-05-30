import { LinearProgress, Typography } from "@mui/material";
import MDBox from "components/MDBox";
import MDProgress from "components/MDProgress";
import MDTypography from "components/MDTypography";

function Sentiment({ label, value, color, textProps }) {
  return (
    <MDBox mb={2}>
      <MDBox display="flex" justifyContent="space-between">
        <MDTypography
          variant="button"
          color={textProps ? color : "text"}
          fontWeight="light"
          mb={1}
          {...textProps}
        >
          {label}
        </MDTypography>
        <MDTypography variant="button" color="text" fontWeight="light" mb={1}>
          {value} %
        </MDTypography>
      </MDBox>
      <MDProgress color={color} value={value} />
    </MDBox>
  );
}

export default Sentiment;
