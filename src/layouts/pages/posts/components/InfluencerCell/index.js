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

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// Material Dashboard 2 PRO React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

import VerifiedIcon from "@mui/icons-material/Verified";
import Avatar from "@mui/material/Avatar";

function InfluencerCell({ fullName, username, verified }) {
  return (
    <MDBox display="flex" alignItems="center" pr={2}>
      <MDBox mr={2}>
        <Avatar
          src={`https://storage.googleapis.com/instagram-global-data-images/owners/${username}.jpg`}
          alt={fullName}
        />
      </MDBox>
      <MDBox display="flex" flexDirection="column">
        <MDBox display="flex" alignItems="center">
          <MDTypography sx={{ fontSize: "1.2rem" }}>{fullName}</MDTypography>
          {verified && <VerifiedIcon color="info" fontSize="small" sx={{ ml: 1 }} />}
        </MDBox>
        <MDTypography variant="button">@{username}</MDTypography>
      </MDBox>
    </MDBox>
  );
}

// Typechecking props for the InfluencerCell
InfluencerCell.propTypes = {
  fullName: PropTypes.string,
  username: PropTypes.string.isRequired,
  verified: PropTypes.bool,
};

InfluencerCell.defaultProps = {
  fullName: "",
  verified: false,
};

export default InfluencerCell;
