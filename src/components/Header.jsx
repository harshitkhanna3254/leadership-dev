/* react imports */
import React from "react";

/* mui and theme imports */
import { tokens } from "../theme";
import { Box, Typography, useTheme } from "@mui/material";

function Header({ title, subtitle }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box mb={"20px"}>
      <Typography variant="h4" color={colors.grey[100]} mb={"5px"}>
        {title}
      </Typography>
      <Typography variant="h6" color={colors.greenAccent[400]}>
        {subtitle}
      </Typography>
    </Box>
  );
}

export default Header;
