import React from "react";
import { Box } from "@mui/system";
import { makeStyles } from "@mui/styles";
import Appbar from "./Appbar";
import { Typography } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "0px",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: "100%",
    height: "100vh",
    // opacity: "1.5",
    backgroundImage: `url(${
      process.env.PUBLIC_URL +
      "https://cdn.pixabay.com/photo/2017/11/27/21/31/computer-2982270_960_720.jpg"
    })`,
  },
}));

export default function Home() {
  let classes = useStyles();
  return (
    <>
      <Box className={classes.root}>
        <Appbar />
        <Typography
          variant="h4"
          sx={{
            marginTop: "30px",
            color: "orange",
          }}
        >
          {" "}
          HO<span>ME</span>
        </Typography>
      </Box>
    </>
  );
}
