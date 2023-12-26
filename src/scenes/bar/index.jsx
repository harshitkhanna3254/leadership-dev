import { Box } from "@mui/material";
import Header from "../../components/Header";
import BarChart from "../../components/BarChart";

const Bar = () => {
  return (
    <Box m="20px">
      <Header
        title="Bar Chart"
        subtitle="A dynamic bar graph with vertical bars of varying heights, colored in shades of blue, green, and pink. Each bar is labeled at the base with a different category name and the height corresponds to the numerical value it represents."
      />
      <Box height="75vh">
        <BarChart />
      </Box>
    </Box>
  );
};

export default Bar;
