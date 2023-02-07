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
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const usestyles = makeStyles({
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
  paperstyle: {
    marginTop: "30px",
    // margin: "30px auto",
    padding: "20px",
    height: "80vh",
    width: "400px",
  },
  iconStyle: {
    backgroundColor: "primary",
  },
  btnStyle: {
    margin: "8px 0px",
  },
});

export default function Register() {
  const classes = usestyles();
  const [input, setInput] = useState({
    fName: "",
    lName: "",
    email: "",
    password: "",
    role: "user",
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data, e) => {
    e.preventDefault();
    setInput(data);
  };

  // const [errors, setErrors] = useState({});
  // console.log(errors); //only for avoiding warning
  // let onSubmit = () => {
  //   let temp = {};
  //   temp.fName = input.fName ? "" : "this field is required";
  //   temp.lName = input.lName ? "" : "this field is required";
  //   temp.email = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(input.email)
  //     ? ""
  //     : "Enter valid email-id";
  //   temp.password = /^(.{0,7}|[^0-9]*|[^A-Z]*|[^a-z]*|[a-zA-Z0-9]*)$/g.test(
  //     input.password
  //   )
  //     ? ""
  //     : "Enter valid password";
  //   setErrors({
  //     ...temp,
  //   });
  //   return Object.input(temp).every((x) => x === "");
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (validate()) Window.alert("testing");
  // };
  let Navigate = useNavigate();
  let fetchAPI = async () => {
    try {
      let responce = await axios.post(
        "https://products-jwt.onrender.com/users/register",
        input
      );
      localStorage.setItem("regtoken", JSON.stringify(responce.data));
      let token = JSON.parse(localStorage.getItem("regtoken"));
      if (token) {
        alert(token.message);
        Navigate("/");
      } else {
        alert(token.error);
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
        <center>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid>
              <Paper elevation={10} className={classes.paperstyle}>
                <Grid align="center">
                  <Avatar className={classes.iconStyle}>
                    <LockPersonOutlinedIcon />
                  </Avatar>
                  <h2>Sign in</h2>
                  <Typography variant="caption">
                    Please fill this form to register{" "}
                  </Typography>
                </Grid>
                <TextField
                  variant="outlined"
                  label="fName"
                  placeholder="Enter First Name"
                  fullWidth={true}
                  type="text"
                  {...register("fName", {
                    required: "Required field",
                    pattern: {
                      value: /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/gm,
                      message: "Invalid First Name",
                    },
                  })}
                  error={!!errors?.fName}
                  helperText={errors?.fName ? errors.fName.message : null}
                />
                <br />
                <br />
                <TextField
                  variant="outlined"
                  label="lName"
                  placeholder="Enter Last Name"
                  fullWidth={true}
                  type="text"
                  // onChange={(e) => {
                  //   setInput({ ...input, lName: e.target.value });
                  // }}
                  {...register("lName", {
                    required: "Required field",
                    pattern: {
                      value: /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/gm,
                      message: "Invalid Last Name address",
                    },
                  })}
                  error={!!errors?.lName}
                  helperText={errors?.lName ? errors.lName.message : null}
                />
                <br />
                <br />
                {/*  */}
                <TextField
                  variant="outlined"
                  label="email"
                  placeholder="Enter user email"
                  fullWidth={true}
                  type="text"
                  // onChange={(e) => {
                  //   setInput({ ...input, email: e.target.value });
                  // }}
                  {...register("email", {
                    required: "Required field",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                  error={!!errors?.email}
                  helperText={errors?.email ? errors.email.message : null}
                />
                <br />
                <br />
                <TextField
                  variant="outlined"
                  label="password"
                  placeholder="Enter user password"
                  fullWidth={true}
                  type="password"
                  // onChange={(e) => {
                  //   setInput({ ...input, password: e.target.value });
                  // }}
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
                />
                {/*  */}
                <FormControlLabel
                  control={<Checkbox />}
                  label="I accept the terms and conditions"
                />
                <br />
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  className={classes.btnStyle}
                  fullWidth={true}
                  onClick={fetchAPI}
                >
                  {" "}
                  Sign in
                </Button>
              </Paper>
            </Grid>
          </form>
        </center>
      </div>
    </>
  );
}
