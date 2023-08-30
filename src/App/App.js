import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { Navigate, Route, Routes } from "react-router-dom";
import SignIn from "../Components/SignIn";
import SignUp from "../Components/SignUp";
import { PageLayout } from "../Components/PageLayout";
import Employees from "../Pages/Employees/Employees";
import { NavigationBar } from "../Components/NavigationBar";

// Create a theme
const lightTheme = createTheme({
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
const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
  shape: {
    borderRadius: "10px",
  },
});

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <NavigationBar authenticated={authenticated} setDarkMode={setDarkMode} />
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
          path="/Employee-Management/employees"
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
      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;
