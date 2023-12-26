import { Box, useTheme } from "@mui/material";
import { tokens } from "../theme";

const SmallLine = ({ data = [0, 20, 40], size = "50" }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // Assuming a simple linear data set for the graph
  const maxValue = Math.max(...data);
  const stepX = size / (data.length - 1);
  let pathD = `M 0 ${size}`;

  data.forEach((value, index) => {
    const x = index * stepX;
    const y = size - (value / maxValue) * size;
    pathD += ` L ${x} ${y}`;
  });

  return (
    <Box
      sx={{ border: `1px solid ${colors.primary[400]}`, borderRadius: "4px" }}
    >
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d={pathD}
          stroke={colors.blueAccent[500]}
          strokeWidth="2"
          fill="none"
        />
        {/* Optional: Add axis, labels, etc. here */}
      </svg>
    </Box>
  );
};

export default SmallLine;
