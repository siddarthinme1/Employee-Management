import {
  AppBar,
  Button,
  Grid,
  IconButton,
  InputBase,
  Link,
  Toolbar,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";

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

export const NavigationBar = (props) => {
  const classes = useStyles();

  return (
    <>
      <AppBar color="primary" variant="contained" position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Grid container alignItems="center" columns={{ xs: 4, md: 12 }}>
            <Grid item>
              <Link href="/Employee-Management">
                <Typography variant="h5" component="h2" sx={{ color: "white" }}>
                  L&T Technology Services
                </Typography>
              </Link>
            </Grid>

            <Grid item sm></Grid>
            <Grid item>
              {props.authenticated ? (
                <InputBase
                  data-testid="searchInput"
                  startAdornment={<SearchIcon fontSize="small" />}
                  placeholder="Search"
                  className={classes.searchInput}
                  sx={{ ml: "15px", borderRadius: "8px", mr: "15px" }}
                ></InputBase>
              ) : null}
            </Grid>
            <Grid item>
              {props.authenticated ? (
                <Button
                  variant="contained"
                  color="error"
                  href="/Employee-Management"
                >
                  Sign out
                </Button>
              ) : (
                <Button variant="contained" color="success">
                  Sign in
                </Button>
              )}
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
};
