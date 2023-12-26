import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import TrafficIcon from "@mui/icons-material/Traffic";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import ForumIcon from "@mui/icons-material/Forum";
import GeographyChart from "../../components/GeographyChart";
import StatBox from "../../components/StatBox";

import { Link } from "react-router-dom";
import RadialBar from "../../components/RadialBar";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      {/* grid system */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* row 1 */}
        <Box
          gridColumn="span 3"
          gridRow="span 1"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius="15px"
        >
          <StatBox
            type="countdown"
            title="15 Days"
            subtitle="Event Countdown"
            progress="0.80"
          />
        </Box>

        <Box
          gridColumn="span 6"
          gridRow="span 1"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius="15px"
          sx={{
            "&:hover": {
              backgroundColor: colors.primary[500], // Darken on hover for feedback
            },
          }}
        >
          <Link
            to="/assignments"
            style={{
              display: "flex",
              flexGrow: 1,
              alignItems: "center",
              textDecoration: "none",
            }}
          >
            <StatBox
              type="assignments"
              title="My Assignments & Deadlines"
              subtitle="Please check your deadlines"
              progress="+2"
              increase="+3 pos"
              icon={
                <ErrorOutlineOutlinedIcon
                  sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                />
              }
            />
          </Link>
        </Box>

        <Box
          gridColumn="span 3"
          gridRow="span 1"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius="15px"
          sx={{
            "&:hover": {
              backgroundColor: colors.primary[500], // Darken on hover for feedback
            },
          }}
        >
          <Link
            to="/leaderboard"
            style={{
              display: "flex",
              flexGrow: 1,
              alignItems: "center",
              textDecoration: "none",
            }}
          >
            <StatBox
              type="leaderboard"
              title="Leaderboard"
              subtitle="Climb up!"
              progress="+2"
              increase="+3 pos"
              icon={
                <TrafficIcon
                  sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                />
              }
            />
          </Link>
        </Box>

        {/* row 2 */}
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.blueAccent[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius="15px"
          sx={{
            "&:hover": {
              backgroundColor: colors.blueAccent[600], // Darken on hover for feedback
            },
          }}
        >
          <Link
            to="/discussions"
            style={{
              display: "flex",
              flexGrow: 1,
              alignItems: "center",
              justifyContent: "center", // Center the content
              textDecoration: "none",
              padding: "10px", // Add some padding for better spacing
            }}
          >
            <Box display="flex" alignItems="center" justifyContent="center">
              <ForumIcon
                style={{
                  marginRight: "10px",
                  color: colors.primary[100],
                  fontSize: "40px",
                  textAlign: "center",
                }}
              />{" "}
              {/* Material UI Icon */}
              <Typography
                variant="h1"
                component="span"
                color={colors.primary[100]}
                style={{
                  fontWeight: "bold", // Make the font bold
                  letterSpacing: "0.5px", // Spacing between letters for a modern look
                }}
              >
                Discussions
              </Typography>
            </Box>
          </Link>
        </Box>

        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          overflow="auto"
          borderRadius="15px"
          sx={{
            position: "relative",
            "&:hover": {
              "& .overlay": {
                opacity: 0.7,
              },
              "& .text": {
                opacity: 1,
              },
            },
          }}
        >
          <Link to="/calendar" style={{ textDecoration: "none" }}>
            <Box
              className="overlay"
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "rgba(0,0,0,0.5)",
                opacity: 0.4,
                transition: "opacity 0.3s",
              }}
            />
            <Typography
              className="text"
              variant="h4"
              component="span"
              sx={{
                position: "absolute",
                textAlign: "center",
                width: "70%",
                fontSize: "2.5rem", // Increase the font size
                fontWeight: 300, // Sleeker font weight
                lineHeight: 1.2, // Adjust line height for better readability
                letterSpacing: "0.5px", // Slight increase in letter spacing
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                color: "white",
                opacity: 0,
                transition: "opacity 0.3s",
                textShadow: "2px 2px 4px rgba(0,0,0,0.6)",
              }}
            >
              My Calendar
            </Typography>

            <img
              alt="calendar-image"
              width="100%"
              height="100%"
              src={`../../assets/calendar_image.png`}
              style={{ cursor: "pointer" }}
            />
          </Link>
        </Box>

        {/* row 3 */}
        <Box
          gridColumn="span 4"
          gridRow="span 1"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius="15px"
          sx={{
            "&:hover": {
              backgroundColor: colors.primary[500], // Darken on hover for feedback
            },
          }}
        >
          <Link
            to="/faq"
            style={{
              display: "flex",
              flexGrow: 1,
              alignItems: "center",
              textDecoration: "none",
            }}
          >
            <StatBox
              type="event"
              title="My Smith Resources"
              subtitle="Read the FAQs here"
              icon={
                <TrafficIcon
                  sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                />
              }
            />
          </Link>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          borderRadius="15px"
          sx={{
            "&:hover": {
              backgroundColor: colors.primary[500], // Darken on hover for feedback
            },
          }}
        >
          <Link
            to="/bar"
            style={{
              textDecoration: "none",
              color: theme.palette.mode === "dark" ? "#FFFFFF" : "#000000",
            }}
          >
            <Typography
              variant="h5"
              fontWeight="600"
              sx={{ padding: "30px 30px 0 30px" }}
            >
              Leadership Tools
            </Typography>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              borderRadius="15px"
              height="250px"
              mt="-5px"
              ml="45px"
            >
              <RadialBar />
            </Box>
          </Link>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          padding="30px"
          borderRadius="15px"
          sx={{
            "&:hover": {
              backgroundColor: colors.primary[500], // Darken on hover for feedback
            },
          }}
        >
          <Link
            to="/geography"
            style={{
              textDecoration: "none",
              color: theme.palette.mode === "dark" ? "#FFFFFF" : "#000000",
            }}
          >
            <Typography
              variant="h5"
              fontWeight="600"
              sx={{ marginBottom: "15px" }}
            >
              My LDP Community
            </Typography>
            <Box height="200px">
              <GeographyChart isDashboard={true} />
            </Box>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
