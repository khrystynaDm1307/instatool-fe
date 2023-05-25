import { Box, Snackbar } from "@mui/material";
import MDAlert from "components/MDAlert";

function MD2Alert({ color, message, onClose, open }) {
  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={onClose}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <Box>
        <MDAlert color={color} dismissible>
          {message}
        </MDAlert>
      </Box>
    </Snackbar>
  );
}
export default MD2Alert;
