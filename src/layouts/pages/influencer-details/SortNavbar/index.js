import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function BasicSortMenu({ name, sort, setSort }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleClose = (type) => {
    setSort({ name: name.toLowerCase().replace(" ", "_"), type });
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{
          fontSize: "1rem",
          fontWeight: 400,
          fontFamily: "Roboto",
          textTransform: "capitalize",
        }}
        endIcon={<KeyboardArrowDownIcon />}
        variant=""
      >
        {name}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={() => handleClose("ASC")}>Low to high</MenuItem>
        <MenuItem onClick={() => handleClose("DESC")}>High to low</MenuItem>
      </Menu>
    </div>
  );
}
