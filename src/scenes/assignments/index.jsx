import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataAssignments } from "../../data/mockData";
import Header from "../../components/Header";

import SentimentVeryDissatisfiedOutlinedIcon from "@mui/icons-material/SentimentVeryDissatisfiedOutlined";
import MoodBadOutlinedIcon from "@mui/icons-material/MoodBadOutlined";
import SentimentSatisfiedAltOutlinedIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";

const Assignments = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const assignmentsColumns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "deadline",
      headerName: "Deadline",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "contactName",
      headerName: "Contact Person",
      flex: 1,
    },
    {
      field: "contactPhone",
      headerName: "Contact Phone",
      flex: 1,
    },
    {
      field: "importanceLevel",
      headerName: "Importance Level",
      headerAlign: "left",
      flex: 1,
      renderCell: ({ row }) => {
        return (
          <Box
            width="60%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={
              row.importanceLevel === "Urgent"
                ? colors.redAccent[600]
                : row.importanceLevel === "Important"
                ? colors.blueAccent[500]
                : colors.greenAccent[700]
            }
            borderRadius="4px"
          >
            {row.importanceLevel === "Urgent" && (
              <SentimentVeryDissatisfiedOutlinedIcon />
            )}
            {row.importanceLevel === "Important" && <MoodBadOutlinedIcon />}
            {row.importanceLevel === "Not Important" && (
              <SentimentSatisfiedAltOutlinedIcon />
            )}
            <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
              {row.importanceLevel}
            </Typography>
          </Box>
        );
      },
    },
  ];

  return (
    <Box m="20px">
      <Header
        title="Assignments"
        subtitle="Look at the due assignments, their deadlines and more information!"
      />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid
          checkboxSelection
          rows={mockDataAssignments}
          columns={assignmentsColumns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default Assignments;
