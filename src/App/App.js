import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { Navigate, Route, Routes } from "react-router-dom";
import SignIn from "../Components/SignIn";
import SignUp from "../Components/SignUp";
import HomePage from "../Pages/Employees/HomePage";

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
const isAuthenticated = true;

function App() {
  const classes = useStyles();
  const [authenticated, setAuthenticated] = useState(false);
  {
    console.log(authenticated);
  }

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.appMain}>
        <ThemeProvider theme={theme}>
          <div className={classes.appMain}>
            <Routes>
              <Route
                path="/EmployeeManagement"
                element={
                  <SignIn
                    authenticated={authenticated}
                    setAuthenticated={setAuthenticated}
                  />
                }
              />
              <Route path="/EmployeeManagement/signup" element={<SignUp />} />
              {/* <Route
                path="/EmployeeManagement/employees"
                element={<HomePage />}
              /> */}
              {/* {authenticated && (
                <Route
                  path="/EmployeeManagement/employees"
                  element={<HomePage />}
                />
              )} */}
              <Route
                path="/EmployeeManagement/employees"
                element={
                  authenticated ? (
                    <HomePage />
                  ) : (
                    <Navigate to="/EmployeeManagement" />
                  )
                }
              />
            </Routes>
          </div>
          <CssBaseline />
        </ThemeProvider>
      </div>
      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;
