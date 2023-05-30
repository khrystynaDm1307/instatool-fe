import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

export default function Mentioned({ img, name, bio, followers }) {
  return (
    <MDBox display="flex" justifyContent="space-between" maxWidth={350} mb={2}>
      <MDBox display="flex" alignItems="center">
        <img src={img} alt="asos" width={50} />

        <MDBox ml={1}>
          <MDTypography variant="h6" sx={{ fontSize: "0.875rem" ,mb:-1}}>
            {name}
          </MDTypography>
          <MDTypography
            variant="button"
            sx={{ fontSize: "0.75rem"}}
            color="text"
          >
            {bio}
          </MDTypography>
        </MDBox>
      </MDBox>

      <MDBox>
        <MDTypography
          variant="button"
          sx={{
            fontWeight: "0.75rem",
            fontWeight: 700,
            color: "#4F4F52",
          }}
          color="dark"
        >
          Followers
        </MDTypography>
        <MDTypography
          variant="button"
          textAlign="center"
          sx={{
            fontSize: "0.875rem",
            color: "black",
            fontWeight: 400,
            display: "block",
          }}
        >
          {followers}
        </MDTypography>
      </MDBox>
    </MDBox>
  );
}
