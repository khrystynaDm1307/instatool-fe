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

// @mui material components
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 PRO React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

import ProductImages from "layouts/ecommerce/products/product-page/components/ProductImages";

function PostsCard({ image, title, description, price, location, action }) {
  return (
    <Card
      sx={{
        "&:hover .card-header": {
          transform: action && "translate3d(0, -50px, 0)",
        },
        p: 3,
        mt: 10,
        height: "calc(100% - 5rem)",
      }}
    >
      <MDBox
        position="relative"
        borderRadius="lg"
        mt={-12}
        mx={2}
        className="card-header"
        sx={{ transition: "transform 300ms cubic-bezier(0.34, 1.61, 0.7, 1)" }}
      >
        <MDBox width="100%" height="100%" position="relative" zIndex={1}>
          <ProductImages />
        </MDBox>
      </MDBox>

      <MDBox display="flex" flexDirection="column" justifyContent="space-between" height="100%">
        <MDBox textAlign="center" pt={3} px={3}>
          <MDBox
            display="flex"
            justifyContent="center"
            alignItems="center"
            mt={action ? -8 : -4.25}
          >
            {action}
          </MDBox>

          <MDTypography variant="body2" color="text" sx={{ mt: 5, mb: 1 }}>
            {description}
          </MDTypography>
        </MDBox>
        <MDBox>
          <Divider />
          <MDBox
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            pt={0.5}
         
            px={3}
            lineHeight={1}
          >
            <MDTypography variant="button" fontWeight="light" color="text">
             Published: 14th of May 2023 
            </MDTypography>
            <MDBox color="text" display="flex" alignItems="center">
              <Icon color="inherit" sx={{ m: 0.5 }}>
                place
              </Icon>
              <MDTypography variant="button" fontWeight="light" color="text">
                {location}
              </MDTypography>
            </MDBox>
          </MDBox>
        </MDBox>
      </MDBox>
    </Card>
  );
}

// Setting default values for the props of BookingCard
PostsCard.defaultProps = {
  action: false,
};

// Typechecking props for the BookingCard
PostsCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  location: PropTypes.node.isRequired,
  action: PropTypes.oneOfType([PropTypes.bool, PropTypes.node]),
};

export default PostsCard;
