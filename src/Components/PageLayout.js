import { Link } from "@mui/material";
import PageHeader from "./PageHeader";
import PeopleIcon from "@mui/icons-material/People";

export const PageLayout = (props) => {
  return (
    <>
      <PageHeader
        title="Employee"
        subTitle="Welcome to the Employee Management System"
        icon={<PeopleIcon fontSize="large" />}
      />
      {props.children}
      <footer>
        <center>
          Go to GitHub!
          <Link
            href="https://github.com/siddarthinme1/Employee-Management"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            GitHub Employee Management
          </Link>
        </center>
      </footer>
    </>
  );
};
