import { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";

const sx = {
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
};

const pageSizesOptions = [10, 50, 100];

// function Pagination({ page, onPageChange, className }) {
//   const apiRef = useGridApiContext();
//   const pageCount = useGridSelector(apiRef, gridPageCountSelector);

//   return (
//     <MuiPagination
//       color="info"
//       className={className}
//       count={pageCount}
//       page={page + 1}
//       onChange={(event, newPage) => {
//         onPageChange(event, newPage - 1);
//       }}
//     />
//   );
// }

// function CustomPagination(props) {

//   return <GridPagination ActionsComponent={Pagination} {...props} />;
// }

function MDDataGrid({
  rowCount,
  isLoading,
  rows,
  columns,
  paginationModel,
  onPaginationModelChange,
}) {
  const [rowCountState, setRowCountState] = useState(rowCount || 0);

  useEffect(() => {
    setRowCountState((prevRowCountState) =>
      rowCount !== undefined ? rowCount : prevRowCountState
    );
  }, [rowCount, setRowCountState, paginationModel]);

  return (
    <DataGrid
      rows={rows}
      columns={columns}
      paginationModel={paginationModel}
      pageSizeOptions={pageSizesOptions}
      paginationMode="server"
      disableRowSelectionOnClick
      onPaginationModelChange={onPaginationModelChange}
      loading={isLoading}
      rowCount={rowCountState}
      getRowHeight={() => "auto"}
      sx={sx}
      pagination
      disableColumnFilter
      disableColumnMenu
      // slots={{
      //   pagination: CustomPagination,
      // }}
    />
  );
}

export default MDDataGrid;
