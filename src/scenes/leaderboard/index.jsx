import React from "react";
import LeaderboardChart from "../../components/LeaderboardChart";
import { Box } from "@mui/material";
import Header from "../../components/Header";

const Leaderboard = () => {
  return (
    <Box m="20px">
      <Header
        title="Leaderboard"
        subtitle="An illustrative leaderboard chart with rows ranked from top to bottom. Each row has a different color like purple, orange, and teal, representing different players. "
      />
      <Box height="70vh">
        <LeaderboardChart />
      </Box>
    </Box>
  );
};

export default Leaderboard;
