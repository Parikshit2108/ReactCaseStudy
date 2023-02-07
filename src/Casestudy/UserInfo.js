import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Box, Button, Typography } from "@mui/material";
import AddModal from "./AddModal";
import Editmodal from "./Editmodal";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import QueueIcon from "@mui/icons-material/Queue";
import Appbar from "./Appbar";
// import { deleteInfo } from "./Localstoarage";
import { makeStyles } from "@mui/styles";
// import { editInfo } from "./Localstoarage";
import Childmodal3 from "./Childmodal3";

const useStyles = makeStyles((theme) => ({
  box: {
    marginTop: "0px",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: "100%",
    height: "100vh",
    opacity: "1.5",
    backgroundImage: `url(${
      process.env.PUBLIC_URL +
      "https://media.istockphoto.com/id/937026088/photo/abstract-defocused-blue-soft-background.jpg?s=612x612&w=0&k=20&c=KKztWYwE7hthXpJEwbO9cfLSEZxCYW7Baim5ZyRPVms="
    })`,
  },
  head: {
    backgroundColor: "darkblue",
    color: "orange",
  },
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.blue,
    color: theme.palette.common.white,
  },
}));
export default function UserInfo() {
  let classes = useStyles();
  const [page, setPage] = useState(0);
  const [open, setModal] = useState(false);
  const [openEdit, setEditModal] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const [edit, setEdit] = useState({}); //edit
  const [idx, setIdx] = useState(); //edit
  const [openMod, setOpenMod] = useState(false); //
  const [delIdx, setDelIdx] = useState();

  let response = JSON.parse(localStorage.getItem("userDB"));

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const openModal = () => {
    setModal(true);
  };
  const openEditModal = () => {
    setEditModal(true);
  };
  const sendData = (row) => {
    setEdit(row);
  };
  const setIndex = (index) => {
    setIdx(index);
  };
  const childmod = () => {
    setOpenMod(true);
  };

  return (
    <>
      <Box className={classes.box}>
        <Appbar />
        <Box sx={{ marginTop: "30px", backgroundColor: "ThreeDLightShadow" }}>
          <Typography
            sx={{ fontSize: "30px", fontFamily: "fantasy", color: "orange" }}
          >
            USER DATA{" "}
          </Typography>
        </Box>
        <Card sx={{ minWidth: "800", p: 2, mx: 4, my: 4 }}>
          <CardContent>
            <Paper sx={{ width: "100%", elevation: 20, overflow: "hidden" }}>
              <TableContainer sx={{ maxHeight: 400 }}>
                <Table stickyHeader aria-label="stickyHeader">
                  <TableHead className={classes.head} sx={{}}>
                    <TableRow>
                      <TableCell align="left" sx={{ fontSize: "20px" }}>
                        ID
                      </TableCell>
                      <TableCell align="left" sx={{ fontSize: "20px" }}>
                        FIRST NAME
                      </TableCell>
                      <TableCell align="left" sx={{ fontSize: "20px" }}>
                        LAST NAME
                      </TableCell>
                      <TableCell align="left" sx={{ fontSize: "20px" }}>
                        EMAIL-ID
                      </TableCell>
                      <TableCell align="left" sx={{ fontSize: "20px" }}>
                        PROFILE
                      </TableCell>
                      <TableCell align="left">
                        <Button
                          onClick={openModal}
                          sx={{ fontSize: "20px" }}
                          variant="contained"
                          startIcon={<QueueIcon />}
                        >
                          {" "}
                          Add Info
                        </Button>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody
                    sx={{ backgroundColor: "darkcyan", textcolor: "#fff" }}
                  >
                    {response
                      ? response
                          .slice(
                            page * rowsPerPage,
                            page * rowsPerPage + rowsPerPage
                          )
                          .map((row, index) => {
                            return (
                              <TableRow
                                hover
                                role="checkbox"
                                tabIndex={-1}
                                key={index}
                              >
                                <TableCell
                                  align="left"
                                  sx={{ fontSize: "20px" }}
                                >
                                  {index + 1}
                                </TableCell>
                                <TableCell
                                  align="left"
                                  sx={{ fontSize: "20px" }}
                                >
                                  {row.fName}
                                </TableCell>
                                <TableCell
                                  align="left"
                                  sx={{ fontSize: "20px" }}
                                >
                                  {row.lName}
                                </TableCell>
                                <TableCell
                                  align="left"
                                  sx={{ fontSize: "20px" }}
                                >
                                  {row.email}
                                </TableCell>
                                <TableCell
                                  align="left"
                                  sx={{ fontSize: "20px" }}
                                >
                                  <img
                                    width="80px"
                                    src={`${row.profile}?w=164&h=164&fit=crop&auto=format`}
                                    alt="imgnotfound"
                                    loading="lazy"
                                  />
                                </TableCell>
                                <TableCell
                                  align="left"
                                  sx={{ fontSize: "20px" }}
                                  width={"30%"}
                                >
                                  <Button
                                    sx={{ fontSize: "15px" }}
                                    color="warning"
                                    variant="contained"
                                    onClick={() => {
                                      openEditModal();
                                      setIndex(index);
                                      sendData(row);
                                    }}
                                    startIcon={<EditIcon />}
                                  >
                                    EDIT
                                  </Button>
                                  <Button
                                    sx={{ margin: "15px", fontSize: "15px" }}
                                    color="error"
                                    variant="contained"
                                    startIcon={<DeleteForeverIcon />}
                                    onClick={() => {
                                      childmod();
                                      setDelIdx(index);
                                    }}
                                  >
                                    DELETE
                                  </Button>
                                </TableCell>
                              </TableRow>
                            );
                          })
                      : "datanotfound"}
                  </TableBody>
                </Table>
              </TableContainer>
              <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={response ? response.length : 0}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </Paper>
          </CardContent>
        </Card>
        {open && <AddModal open={open} setModal={setModal} />}
        {openEdit && (
          <Editmodal
            open={openEdit}
            setEditModal={setEditModal}
            edit={edit}
            idx={idx}
          />
        )}
        {openMod && (
          <Childmodal3
            openMod={openMod}
            setOpenMod={setOpenMod}
            delIdx={delIdx}
          />
        )}
      </Box>
    </>
  );
}
