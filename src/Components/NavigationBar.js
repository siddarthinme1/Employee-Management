import {
  AppBar,
  Button,
  IconButton,
  InputBase,
  Switch,
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

  const handleToggle = () => {
    props.setDarkMode((current) => !current);
  };

  const handleLogout = () => {
    sessionStorage.clear();
    localStorage.clear();
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar sx={{ display: "flex" }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h5"
            component="a"
            noWrap
            href="/Employee-Management"
            sx={{
              color: "white",
              flexGrow: 1,
              textDecoration: "none",
            }}
          >
            L&T Technology Services
          </Typography>
          {props.authenticated ? (
            <InputBase
              data-testid="searchInput"
              startAdornment={<SearchIcon fontSize="small" />}
              placeholder="Search"
              className={classes.searchInput}
              sx={{
                ml: "15px",
                borderRadius: "8px",
                mr: "15px",
              }}
            ></InputBase>
          ) : null}
          <Switch aria-label="Mode" onClick={handleToggle} />
          <Button
            variant="contained"
            color={props.authenticated ? "error" : "success"}
            href="/Employee-Management"
            onClick={handleLogout}
            sx={{
              ml: "15px",
              borderRadius: "8px",
              mr: "15px",
            }}
          >
            {props.authenticated ? "Sign Out" : "Sign In"}
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
};
