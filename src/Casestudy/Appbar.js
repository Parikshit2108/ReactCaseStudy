import {
  AppBar,
  Badge,
  Grid,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import SettingsPowerIcon from "@mui/icons-material/SettingsPower";
import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/system";

const useStyles = makeStyles((theme) => ({
  div: {
    color: "ThreeDDarkShadow",
    fontSize: "20px",
  },
  bar: {
    fontSize: "50px",
  },
}));

export default function Appbar() {
  let navigate = useNavigate();
  let classes = useStyles();
  return (
    <>
      <AppBar position="sticky" sx={{ background: "#f5f5f5" }}>
        <Toolbar>
          <Grid container className={classes.div}>
            <Grid i>
              <Typography
                variant="h5"
                sx={{ mx: "10px", fontFamily: "fantasy", fontSize: "40px" }}
              >
                DASH
                <span style={{ color: "orange", fontSize: "40px" }}>BOARD</span>
              </Typography>
            </Grid>
            <Grid
              sx={{
                display: "flex",
                mx: "0px",
                P: "40px",
                justifyItems: "center",
              }}
            >
              <Typography
                variant="button"
                onClick={() => {
                  navigate("/home");
                }}
                sx={{
                  mx: "10px",
                  fontSize: "20px",
                  cursor: "pointer",
                }}
              >
                HOME
              </Typography>
              <Typography
                variant="button"
                onClick={() => {
                  navigate("/userinfo");
                }}
                sx={{ mx: "10px", fontSize: "20px", cursor: "pointer" }}
              >
                USER INFO
              </Typography>
              <Typography
                onClick={() => {
                  navigate("/userinfo");
                }}
                sx={{ mx: "10px", fontSize: "20px", cursor: "pointer" }}
              >
                ABOUT
              </Typography>
              <Typography
                onClick={() => {
                  navigate("/");
                }}
                sx={{ mx: "10px", fontSize: "20px", cursor: "pointer" }}
              >
                LOG OUT
              </Typography>
            </Grid>
            <Grid item sm></Grid>
            <Grid style={{ border: "1px solid red", mx: "20px" }}>
              <IconButton>
                <Badge badgeContent={3} color="secondary">
                  <NotificationsNoneIcon />
                </Badge>
              </IconButton>
              <IconButton>
                <Badge badgeContent={4} color="secondary">
                  <ChatBubbleOutlineIcon />
                </Badge>
              </IconButton>
              <IconButton>
                <Badge>
                  <SettingsPowerIcon> </SettingsPowerIcon>
                </Badge>
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
}
