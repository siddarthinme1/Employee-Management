import React from "react";
import { makeStyles } from "@mui/styles";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import SignIn from "../Components/SignIn";
import SignUp from "../Components/SignUp";
import Home from "../Pages/Employees/Home";

// Create a theme
const theme = createTheme({
  palette: {
    primary: {
      main: "#333996",
      light: "#3c44b126",
    },
    secondary: {
      main: "#f83245",
      light: "#f8324526",
    },
    background: {
      default: "#f4f5fd",
    },
  },
  shape: {
    borderRadius: "10px",
  },
});

// Styles
const useStyles = makeStyles((theme) => ({
  appMain: {
    // paddingLeft: "250px",
    width: "100%",
  },
}));

function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.appMain}>
        <Routes>
          <Route path="/EmployeeManagement" element={<SignIn />} />
          <Route path="EmployeeManagement/signup" element={<SignUp />} />
          <Route path="EmployeeManagement/employees" element={<Home />} />
        </Routes>
      </div>
      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;
