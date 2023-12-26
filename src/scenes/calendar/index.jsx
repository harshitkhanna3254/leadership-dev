import { Box } from "@mui/material";
import Header from "../../components/Header";
import FullCalendarC from "../../components/FullCalendarC";

const Calendar = () => {
  return (
    <Box m="20px">
      <Header title="Calendar" subtitle="Create and Remove events" />
      <Box height="75vh">
        <FullCalendarC />
      </Box>
    </Box>
  );
};

export default Calendar;
