import { Box, Button, Grid, Modal, Typography } from "@mui/material";
import React, { useState } from "react";
import { deleteInfo } from "./Localstoarage";

const style = {
  marginTop: "15px",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  height: 200,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function Childmodal3({ openMod, setOpenMod, delIdx }) {
  let handleClose = () => setOpenMod(false);
  const [state, setState] = useState(false);

  return (
    <div>
      <Modal
        open={openMod}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            textAlign={"center"}
          >
            Are you sure want to delete data ?
          </Typography>
          <Grid
            display={"flex"}
            justifyContent={"space-evenly"}
            sx={{ marginTop: "50px" }}
          >
            <Button
              variant="contained"
              color="error"
              size="medium"
              onClick={() => {
                deleteInfo(delIdx);
                setState(!state);
                handleClose();
              }}
            >
              YES
            </Button>
            <Button
              variant="contained"
              color="success"
              size="medium"
              onClick={handleClose}
            >
              {" "}
              NO
            </Button>
          </Grid>
        </Box>
      </Modal>
    </div>

    // <>
    //   <Modal open={openMod} onClose={handleClose}>
    //   <Box></Box>
    //     <Box>
    //       <Typography>Are You sure ! want to delete?</Typography>
    //     </Box>
    //     <Grid display={"flex"} justifyContent={"space-evenly"}>
    //       <Button
    //         variant="contained"
    //         color="error"
    //         size="medium"
    //         onClick={() => {
    //           deleteInfo(delIdx);
    //           setState(!state);
    //         }}
    //       >
    //         YES
    //       </Button>
    //       <Button variant="contained" color="green" size="medium">
    //         {" "}
    //         NO
    //       </Button>
    //     </Grid>
    //   </Modal>
    // </>
  );
}
