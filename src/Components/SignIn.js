import React, { useContext, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { Alert, AlertTitle, CircularProgress, Snackbar } from "@mui/material";
import Control from "../Controls/Control";
import AppContext from "../Context/AppContext";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link
        color="inherit"
        href="https://github.com/siddarthinme1/Employee-Management"
      >
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const defaultTheme = createTheme();

export default function SignIn(props) {
  const { setToken } = useContext(AppContext);

  const { authenticated, setAuthenticated } = props;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [open, setOpen] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const requestBody = {
      userName: email,
      password: password,
    };

    try {
      const response = await axios.post(
        "http://localhost:8080/api/authenticate",
        requestBody,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response?.status) {
        console.log("Sign-in successful!");
        const token = JSON.stringify(response.data);
        setToken(token);
        setAuthenticated(true);
      } else {
        console.error("Invalid credentials");
      }
    } catch (error) {
      console.error("Error:", error);
      if (error.response?.status === 404) {
        setErrorMsg("Server not found");
      } else if (error.response?.status === 401) {
        setErrorMsg("Couldn't find your account");
      } else if (error?.code === "ERR_NETWORK") {
        setErrorMsg(error.code);
      }
    }
  };

  if (authenticated) {
    return <Navigate to="/Employee-Management/employees" />;
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        {errorMsg ? (
          <Alert severity="error" sx={{ margin: 2 }}>
            <AlertTitle>Error</AlertTitle>
            An error occurred: — <strong>{errorMsg}</strong>
          </Alert>
        ) : null}
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <Control.Input
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Control.Input
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled={!password || !email}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/Employee-Management/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
        <Snackbar
          open={open}
          autoHideDuration={2000}
          onClose={() => setOpen(false)}
        >
          <CircularProgress onClose={() => setOpen(false)} />
        </Snackbar>
      </Container>
    </ThemeProvider>
  );
}
