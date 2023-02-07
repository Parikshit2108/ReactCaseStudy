import {
  Avatar,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Modal,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React, { useState } from "react";
import Addchildmodal from "./Addchildmodal";
import { addData } from "./Localstoarage";

const useStyle = makeStyles({
  modal: {
    width: "500px",
    height: "100vh",
    margin: "20px auto",
  },
  paperstyle1: {
    // margin: "20px auto",
    // padding: "20px",
    // height: "85vh",
    // width: "500px",
  },
  iconStyle1: {
    backgroundColor: "primary",
  },
  btnStyle1: {
    margin: "8px 0px",
  },
});
export default function AddModal({ open, setModal }) {
  const [childmod, setChildMod] = useState(false); // child modal
  const [input, setInput] = useState({
    fName: "",
    lName: "",
    email: "",
    profile: "",
  });
  // child confirmation model
  let openChildMod = () => {
    setChildMod(true);
  };

  const closeModalHandal = () => {
    setModal(false);
  };
  let classes = useStyle();

  return (
    <>
      <Modal open={open} className={classes.modal}>
        <Paper
          elevation={10}
          justifyContent={"center"}
          sx={{
            width: { xs: "80%", md: "600px" },
            marginTop: { xs: "30%", md: "10px" },
            textAlign: "center",
            Padding: "20px",
            height: "70vh",
          }}
        >
          <Grid
            container
            rowSpacing={1}
            display={"flex"}
            justifyContent={"center"}
          >
            <Grid item xs={8} md={8} display={"block"}>
              <Avatar sx={{ ml: "45%" }}></Avatar>
              <Typography>Add Employee Info</Typography>
              <Typography variant="caption">
                Please fill this form to add data{" "}
              </Typography>
            </Grid>
            <Grid item xs={8}>
              <TextField
                variant="outlined"
                label="First Name"
                placeholder="Enter First Name"
                type="text"
                value={input.fName}
                fullWidth={true}
                onChange={(e) => {
                  setInput({ ...input, fName: e.target.value });
                }}
              />
            </Grid>
            <Grid item xs={8}>
              <TextField
                variant="outlined"
                label="Last Name"
                value={input.lName}
                placeholder="Enter Title"
                fullWidth={true}
                type="text"
                onChange={(e) => {
                  setInput({ ...input, lName: e.target.value });
                }}
              />
            </Grid>
            <Grid item xs={8}>
              <TextField
                variant="outlined"
                label="User Email"
                value={input.email}
                placeholder="Enter Email"
                fullWidth={true}
                type="text"
                onChange={(e) => {
                  setInput({ ...input, email: e.target.value });
                }}
              />
            </Grid>
            <Grid item xs={8}>
              <TextField
                variant="outlined"
                label="Profile"
                value={input.profile}
                placeholder="Add Profile "
                type="text"
                fullWidth={true}
                onChange={(e) => {
                  setInput({ ...input, profile: e.target.value });
                }}
              />
            </Grid>
            <FormControlLabel
              control={<Checkbox />}
              label="I accept the terms and conditions"
            />
            <br />
          </Grid>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
              my: "10px",
            }}
          >
            <Button
              type="button"
              variant="contained"
              color="primary"
              className={classes.btnStyle1}
              onClick={() => {
                openChildMod ()
                
              }}
            >
              {" "}
              Submit
            </Button>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.btnStyle1}
              onClick={closeModalHandal}
            >
              {" "}
              Close
            </Button>
          </Box>
        </Paper>
      </Modal>
      {childmod && (
        <Addchildmodal
          childmod={childmod}
          setChildMod={setChildMod}
          closeModalHandal={closeModalHandal}
          input={input}
        />
      )}
    </>
  );
}
