import React from "react";
import { Box, Paper, Grid, Avatar, Typography, Divider } from "@mui/material";
import { mockDiscussions } from "../../data/mockData";
import { useTheme } from "@emotion/react";
import { tokens } from "../../theme";

function Discussions() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      padding={2}
      className="App"
      style={{ maxWidth: "800px", margin: "auto" }}
    >
      <Typography variant="h4" gutterBottom>
        Discussions
      </Typography>

      {mockDiscussions.map((comment, index) => (
        <Paper
          key={comment.id}
          style={{
            padding: "20px",
            marginTop: index > 0 ? 20 : 0,
            backgroundColor: colors.primary[900],
            borderRadius: "8px",
          }}
        >
          <Grid container wrap="nowrap" spacing={2}>
            <Grid item>
              <Avatar
                alt={comment.author}
                src={comment.avatar || comment.avatar}
                style={{ width: 60, height: 60 }}
              />
            </Grid>
            <Grid item xs>
              <Typography variant="h6" style={{ marginBottom: 8 }}>
                {comment.author}
              </Typography>
              <Typography variant="body1">{comment.text}</Typography>
              <Typography
                variant="caption"
                display="block"
                style={{ marginTop: 8, color: colors.primary[100] }}
              >
                {comment.timestamp}
              </Typography>
            </Grid>
          </Grid>
          {index < mockDiscussions.length - 1 && (
            <Divider style={{ margin: "20px 0" }} />
          )}
        </Paper>
      ))}
    </Box>
  );
}

export default Discussions;
