import {
  AppBar,
  Button,
  Grid,
  InputBase,
  Link,
  Toolbar,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import SearchIcon from "@mui/icons-material/Search";

const useStyles = makeStyles(() => ({
  root: {
    transform: "translateZ(0)",
  },
  searchInput: {
    backgroundColor: "white",
    opacity: "0.8",
    padding: "0px 8px",
    //reference selector of the parent rule
    "&:hover": {
      backgroundColor: "#F2F2F2",
    },
  },
}));

export const NavigationBar = () => {
  const classes = useStyles();

  /**
   * Most applications will need to conditionally render certain components based on whether a user is signed in or not.
   * msal-react provides 2 easy ways to do this. AuthenticatedTemplate and UnauthenticatedTemplate components will
   * only render their children if a user is authenticated or unauthenticated, respectively.
   */
  return (
    <>
      <AppBar color="primary" variant="contained" position="static">
        <Toolbar>
          <Grid container alignItems="center" columns={{ xs: 4, md: 12 }}>
            <Grid item>
              <Link href="/EmployeeManagement">
                <Typography variant="h5" component="h2" sx={{ color: "white" }}>
                  L&T Technology Services
                </Typography>
              </Link>
            </Grid>
            <Grid item>
              <InputBase
                data-testid="searchInput"
                startAdornment={<SearchIcon fontSize="small" />}
                placeholder="Search"
                className={classes.searchInput}
                sx={{ ml: "15px", borderRadius: "8px" }}
              ></InputBase>
            </Grid>
            <Grid item sm></Grid>
            <Grid item>
              <Button variant="contained" color="error">
                Sign out
              </Button>

              <Button variant="contained" color="success">
                Sign in
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
};
