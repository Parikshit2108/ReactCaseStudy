import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import Appbar from "./Casestudy/Appbar";
import Login from "./Casestudy/Login";
import Register from "./Casestudy/Register";
import UserInfo from "./Casestudy/UserInfo";
import Home from "./Casestudy/Home";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";

const theme = createTheme({});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <div className="App">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Login />}></Route>
              <Route path="/home" element={<Home />}></Route>
              <Route path="/appbar" element={<Appbar />}></Route>
              <Route path="/register" element={<Register />}></Route>
              <Route path="/userinfo" element={<UserInfo />}></Route>
            </Routes>
          </BrowserRouter>
        </div>
      </ThemeProvider>
      <CssBaseline />
    </>
  );
}

export default App;
