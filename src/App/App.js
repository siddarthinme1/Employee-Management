import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { Navigate, Route, Routes } from "react-router-dom";
import SignIn from "../Components/SignIn";
import SignUp from "../Components/SignUp";
import { PageLayout } from "../Components/PageLayout";
import Employees from "../Pages/Employees/Employees";

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
                path="/Employee-Management"
                element={
                  <SignIn
                    authenticated={authenticated}
                    setAuthenticated={setAuthenticated}
                  />
                }
              />
              <Route path="/Employee-Management/signup" element={<SignUp />} />
              <Route
                path="/EmployeeManagement/employees"
                element={
                  authenticated ? (
                    <PageLayout>
                      <Employees />
                    </PageLayout>
                  ) : (
                    <Navigate to="/Employee-Management" />
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
