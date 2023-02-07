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
import React, { useEffect, useState } from "react";
import Editchildmodal from "./Editchildmodal";

const useStyle = makeStyles({
  modal: {
    width: "500px",
    height: "100vh",
    margin: "20px auto",
  },

  iconStyle1: {
    backgroundColor: "primary",
  },
  btnStyle1: {
    margin: "8px 0px",
  },
});
export default function AddModal({ open, setEditModal, edit, idx }) {
  const [newdata, setNewData] = useState(edit); // edit
  const [childmod, setChildMod] = useState(false); // child modal
  const closeModalHandal = () => {
    setEditModal(false);
  };
  useEffect(() => {
    setNewData({ ...edit });
  }, [edit]);

  let openChildMod = () => {
    setChildMod(true);
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
              <Typography>Edit Employee Info</Typography>
              <Typography variant="caption">Please fill this form</Typography>
            </Grid>
            <Grid item xs={8}>
              <TextField
                variant="outlined"
                label="First Name"
                placeholder="Enter Name"
                value={newdata.fName}
                type="text"
                fullWidth={true}
                onChange={(e) => {
                  setNewData({ ...newdata, fName: e.target.value });
                }}
              />
            </Grid>
            <Grid item xs={8}>
              <TextField
                variant="outlined"
                label="Last Name"
                placeholder="Enter Last Name"
                fullWidth={true}
                value={newdata.lName}
                type="text"
                onChange={(e) => {
                  setNewData({ ...newdata, lName: e.target.value });
                }}
              />
            </Grid>
            <Grid item xs={8}>
              <TextField
                variant="outlined"
                label="User Id"
                placeholder="Enter User Id"
                fullWidth={true}
                value={newdata.email}
                type="text"
                onChange={(e) => {
                  setNewData({ ...newdata, email: e.target.value });
                }}
              />
            </Grid>
            <Grid item xs={8}>
              <TextField
                variant="outlined"
                label="Info"
                placeholder="Enter Info "
                type="text"
                fullWidth={true}
                value={newdata.profile}
                onChange={(e) => {
                  setNewData({ ...newdata, profile: e.target.value });
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
              type="submit"
              variant="contained"
              color="primary"
              className={classes.btnStyle1}
              onClick={openChildMod}
            >
              {" "}
              Update
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
        <Editchildmodal
          childmod={childmod}
          setChildMod={setChildMod}
          newdata={newdata}
          idx={idx}
          closeModalHandal={closeModalHandal}
        />
      )}
    </>
  );
}
