import {
  Avatar,
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import axios from "axios";
import React, { useState } from "react";
import LockPersonOutlinedIcon from "@mui/icons-material/LockPersonOutlined";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "0px",
    backgroundRepeat: "repeat",
    backgroundSize: "cover",
    width: "100%",
    minHeight: "100vh",
    backgroundImage: `url(${
      process.env.PUBLIC_URL +
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSArEyiZPDI9mD0Nst-VLKUv3xoLVcIjoY1aw&usqp=CAU"
    })`,
  },
  sidemenu: {
    display: "flex",
    top: "0px",
    flexDirection: "column",
    position: "absolute",
    left: "0px",
    width: "100px",
    height: "100%",
    backgroundColor: "#253053",
  },
  paperstyle: {
    margin: "auto auto",
    padding: "20px",
    height: "50vh",
    width: "330px",
    backgroundImage: `url(${
      process.env.PUBLIC_URL +
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuLusXvWlsxI-775m4DL4bwwvmM91H5QKWNg&usqp=CAU"
    })`,
    backgroundRepeat: "repeat",
    backgroundSize: "cover",
  },
  iconStyle: {
    backgroundColor: "green",
  },
  btnStyle: {
    margin: "8px 0px",
  },
}));
export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const classes = useStyles();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  let Navigate = useNavigate();
  //=====================================================================
  const onSubmit = (data, e) => {
    e.preventDefault();
    setInput(data);
  };

  //======================================================================
  let fetchAPI = async () => {
    try {
      let responce = await axios.post(
        "https://products-jwt.onrender.com/users/login",
        input
      );
      localStorage.setItem("token", JSON.stringify(responce.data));
      var token = JSON.parse(localStorage.getItem("token"));
      if (token.data.token != null) {
        Navigate("/Home");
      } else {
        alert("token.data.error");
      }
    } catch (error) {
      if (error) {
        alert(error.response.data.message);
      }
    }
  };
  return (
    <>
      <div className={classes.root}>
        <br />
        <form onSubmit={handleSubmit(onSubmit)}>
          <center>
            <Grid>
              <Paper elevation={10} className={classes.paperstyle}>
                <Grid align="center">
                  <Avatar className={classes.iconStyle}>
                    <LockPersonOutlinedIcon />
                  </Avatar>
                  <h2>Log in</h2>
                </Grid>
                <TextField
                  variant="outlined"
                  label="email"
                  placeholder="Enter user email"
                  fullWidth
                  {...register("email", {
                    required: "Required field",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                  error={!!errors?.email}
                  helperText={errors?.email ? errors.email.message : null}
                  type="email"
                />
                <br />
                <br />
                <TextField
                  variant="outlined"
                  label="password"
                  placeholder="Enter user password"
                  {...register("password", {
                    required: "password is required",
                    pattern: {
                      value:
                        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                      message:
                        "Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character:",
                    },
                  })}
                  error={!!errors?.password}
                  helperText={errors?.password ? errors.password.message : null}
                  fullWidth
                  type="password"
                />
                <FormControlLabel control={<Checkbox />} label="Remember me" />
                <br />
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  className={classes.btnStyle}
                  fullWidth
                  onClick={fetchAPI}
                >
                  {" "}
                  Log in
                </Button>
                <Typography>
                  <Link to="/UserInfo" underline="none">
                    Forgot Password
                  </Link>
                </Typography>
                <br />
                <Typography>
                  {" "}
                  Do you have an account?
                  <Link to="/Register" underline="hover">
                    Register here
                  </Link>
                </Typography>
              </Paper>
            </Grid>
          </center>
        </form>
      </div>
    </>
  );
}
